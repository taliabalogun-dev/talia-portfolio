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
  theme?: PillTheme;
}) {
  const [open, setOpen] = useState(false);
  const hasExtras = (roles && roles.length > 0) || (results && results.length > 0);

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
