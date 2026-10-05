"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { PillTheme } from "@/content/pillTheme";

export default function EnlargeableImage({
  src,
  alt = "",
  className = "",
  sizes,
  priority,
  roles,
  results,
  theme,
  onPrev,
  onNext,
  counter,
}: {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Role tags shown only in the enlarged lightbox, below the image. */
  roles?: string[];
  /** Result pills shown only in the enlarged lightbox, below the image. */
  results?: string[];
  theme?: PillTheme;
  /** When set, the lightbox gets Prev / Next (buttons, arrow keys, swipe) to move through a slideshow. */
  onPrev?: () => void;
  onNext?: () => void;
  /** Position label such as "3 / 20", shown under the image. */
  counter?: string;
}) {
  const [open, setOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onPrev, onNext]);

  const arrow =
    "absolute top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 px-3 pb-1.5 pt-0.5 text-4xl leading-none text-white/80 hover:text-white";

  return (
    <>
      <Image src={src} alt={alt} fill className={className} sizes={sizes} priority={priority} />
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={alt ? `Enlarge: ${alt}` : "Enlarge image"}
        className="absolute inset-0 cursor-zoom-in"
      />

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 p-6"
          onClick={() => setOpen(false)}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (delta > 40) onPrev?.();
            else if (delta < -40) onNext?.();
          }}
        >
          {onPrev && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous"
              className={`${arrow} left-2 sm:left-6`}
            >
              ‹
            </button>
          )}
          {onNext && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next"
              className={`${arrow} right-2 sm:right-6`}
            >
              ›
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 hover:text-white sm:right-8 sm:top-8"
          >
            ×
          </button>
          <div
            className="relative h-[75vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
          </div>
          {counter && <p className="text-sm text-white/60">{counter}</p>}
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
