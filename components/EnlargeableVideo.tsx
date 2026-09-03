"use client";

import { useState } from "react";

export default function EnlargeableVideo({
  src,
  poster,
  autoplay,
  className = "",
  roles,
}: {
  src: string;
  poster?: string;
  autoplay?: boolean;
  className?: string;
  /** Role tags shown only in the enlarged lightbox, below the video. */
  roles?: string[];
}) {
  const [open, setOpen] = useState(false);

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
      {roles && roles.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="View role details"
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
          {roles && (
            <div
              className="flex flex-wrap justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
                >
                  {role}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
