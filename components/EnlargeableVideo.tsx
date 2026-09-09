"use client";

import { useState } from "react";
import type { PillTheme } from "@/content/pillTheme";

export default function EnlargeableVideo({
  src,
  poster,
  autoplay,
  className = "",
  roles,
  results,
  password,
  theme,
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
}) {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(!password);
  const [attempt, setAttempt] = useState("");
  const [wrongAttempt, setWrongAttempt] = useState(false);
  const hasExtras = (roles && roles.length > 0) || (results && results.length > 0);

  function submitPassword(e: React.FormEvent) {
    e.preventDefault();
    if (attempt === password) {
      setUnlocked(true);
      setWrongAttempt(false);
    } else {
      setWrongAttempt(true);
    }
  }

  if (password && !unlocked) {
    return (
      <div
        className={`relative flex items-center justify-center ${className}`}
        style={{
          backgroundImage: poster ? `url(${poster})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
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
        src={src}
        poster={poster}
        controls
        playsInline
        autoPlay={autoplay}
        muted={autoplay}
        loop={autoplay}
        preload={autoplay ? "auto" : "metadata"}
        className={className}
      />
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
      )}
    </>
  );
}
