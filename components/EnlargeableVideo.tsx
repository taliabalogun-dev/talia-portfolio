"use client";

import Portal from "@/components/Portal";
import { useEffect, useRef, useState } from "react";
import type { PillTheme } from "@/content/pillTheme";
import { useVideoGate } from "@/lib/videoGate";
import VideoLockButton from "@/components/VideoLockButton";

export default function EnlargeableVideo({
  src,
  poster,
  autoplay,
  className = "",
  roles,
  results,
  password,
  theme,
  externalLock = false,
  tint,
}: {
  src: string;
  poster?: string;
  autoplay?: boolean;
  className?: string;
  /** Role tags shown only in the enlarged lightbox, below the video. */
  roles?: string[];
  /** Result pills shown only in the enlarged lightbox, below the video. */
  results?: string[];
  /** Gates playback behind a client-side password prompt (not real security - a polite viewing gate). */
  password?: string;
  theme?: PillTheme;
  /** The parent places its own padlock (e.g. beside a badge), so don't draw one in the corner. */
  externalLock?: boolean;
  /** 0-1: a dark wash over the poster with a play button, until the video is started. */
  tint?: number;
}) {
  const [started, setStarted] = useState(false);
  const [open, setOpen] = useState(false);
  const gate = useVideoGate(src, password);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Muted looping autoplay: play while the video is on screen, pause when it scrolls away (saves data and battery).
  useEffect(() => {
    const v = videoRef.current;
    if (!autoplay || !v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.3 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [autoplay, gate.locked]);
  const [attempt, setAttempt] = useState("");
  const [wrongAttempt, setWrongAttempt] = useState(false);
  const hasExtras = (roles && roles.length > 0) || (results && results.length > 0);

  function submitPassword(e: React.FormEvent) {
    e.preventDefault();
    if (gate.tryUnlock(attempt)) {
      setJustUnlocked(true);
      setWrongAttempt(false);
    } else {
      setWrongAttempt(true);
    }
  }

  const posterBg = {
    backgroundImage: poster ? `url(${poster})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  } as const;

  // Looks like an ordinary video until play (or the padlock) is pressed.
  if (gate.locked && !gate.asking) {
    return (
      <div className={`relative flex items-center justify-center bg-black ${className}`} style={posterBg}>
        {tint ? <div className="absolute inset-0 bg-black" style={{ opacity: tint }} /> : null}
        <button
          type="button"
          onClick={gate.ask}
          aria-label="Play"
          className="relative grid h-16 w-16 place-items-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75"
        >
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M7 4.5v15l13-7.5z" />
          </svg>
        </button>
        {!externalLock && <VideoLockButton src={src} password={password} className="absolute right-2 top-2" />}
      </div>
    );
  }

  if (gate.locked && gate.asking) {
    return (
      <div className={`relative flex items-center justify-center ${className}`} style={posterBg}>
        <div className="absolute inset-0 bg-black/70" />
        <button
          type="button"
          onClick={gate.cancel}
          aria-label="Close password prompt"
          className="absolute right-2 top-2 z-10 text-2xl leading-none text-white/70 hover:text-white"
        >
          ×
        </button>
        <form
          onSubmit={submitPassword}
          className="relative flex w-full max-w-[220px] flex-col items-center gap-2 px-4 text-center"
        >
          <span className="text-2xl">🔒</span>
          <p className="text-xs font-semibold uppercase tracking-wide text-white">
            Password Protected
          </p>
          <input
            type="password"
            value={attempt}
            autoFocus
            onChange={(e) => {
              setAttempt(e.target.value);
              setWrongAttempt(false);
            }}
            placeholder="Enter password"
            aria-label="Video password"
            className="w-full rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/60"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition-opacity hover:opacity-85"
          >
            Unlock
          </button>
          {wrongAttempt && (
            <p className="text-xs text-red-300">Incorrect password</p>
          )}
        </form>
      </div>
    );
  }

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={!tint || started || !!autoplay}
        playsInline
        autoPlay={justUnlocked}
        muted={autoplay}
        loop={autoplay}
        preload="metadata"
        className={className}
      />
      {tint && !started && !autoplay ? (
        <button
          type="button"
          aria-label="Play"
          onClick={() => {
            setStarted(true);
            videoRef.current?.play().catch(() => {});
          }}
          className="absolute inset-0 z-[5] grid place-items-center"
          style={{ background: `rgba(0,0,0,${tint})` }}
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/75">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M7 4.5v15l13-7.5z" />
            </svg>
          </span>
        </button>
      ) : null}
      {hasExtras && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View role and result details"
          className="absolute right-2 top-2 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white hover:bg-black/80"
        >
          Expand ⤢
        </button>
      )}

      {open && (
        <Portal>
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 p-6"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 hover:text-white sm:right-8 sm:top-8"
          >
            ×
          </button>
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="max-h-[75vh] w-auto max-w-full"
            onClick={(e) => e.stopPropagation()}
          />
          {roles && roles.length > 0 && (
            <div
              className="flex flex-wrap justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full px-3 py-1 text-sm"
                  style={
                    theme
                      ? { background: theme.roleBg, color: theme.roleText }
                      : undefined
                  }
                >
                  {role}
                </span>
              ))}
            </div>
          )}
          {results && results.length > 0 && (
            <div
              className="flex flex-wrap justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {results.map((result) => (
                <span
                  key={result}
                  className="rounded-full px-3 py-1 text-sm"
                  style={
                    theme
                      ? { background: theme.resultBg, color: theme.resultText }
                      : undefined
                  }
                >
                  {result}
                </span>
              ))}
            </div>
          )}
        </div>
        </Portal>
      )}
    </>
  );
}
