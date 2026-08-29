"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { SlideImage } from "@/content/site";

/* A contact sheet: every frame on screen at once, none of them hidden behind
 * a next arrow. The tiles are uniform so the sheet reads as a sheet — mixed
 * orientations in a masonry make a ragged wall rather than a set — and any
 * one of them opens whole, uncropped, because a cropped thumbnail is a
 * pointer to a photograph rather than the photograph. */
export default function ContactSheet({ images }: { images: SlideImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const go = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    // The sheet sits over the page; the page underneath should not scroll.
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go]);

  const current = open === null ? null : images[open];

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={img.caption ?? `Open image ${i + 1} of ${images.length}`}
              className="group relative block w-full overflow-hidden rounded-xl border border-beige/15"
            >
              <span className="relative block aspect-square">
                <Image
                  src={img.src}
                  alt={img.caption ?? ""}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  sizes="(min-width: 640px) 280px, 45vw"
                />
              </span>
              {img.caption && (
                <span className="block p-2 text-left text-sm text-beige/70">
                  {img.caption}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? "Photograph"}
          className="fixed inset-0 z-[100] flex flex-col bg-black/92 p-4 sm:p-8"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>
              {(open ?? 0) + 1} of {images.length}
            </span>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="rounded-full bg-white/15 px-3 py-1 text-white hover:bg-white/25"
            >
              ✕
            </button>
          </div>

          {/* Stops the click that closes the overlay from firing when the
              picture itself, or either arrow, is what was pressed. */}
          <div
            className="relative mt-3 flex min-h-0 flex-1 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous"
                className="absolute left-0 z-10 rounded-full bg-white/15 px-3 py-2 text-xl text-white hover:bg-white/25"
              >
                ‹
              </button>
            )}
            {/* contain, not cover: the whole frame, which is the point of
                opening it. */}
            <Image
              src={current.src}
              alt={current.caption ?? ""}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next"
                className="absolute right-0 z-10 rounded-full bg-white/15 px-3 py-2 text-xl text-white hover:bg-white/25"
              >
                ›
              </button>
            )}
          </div>

          {current.caption && (
            <p className="mt-3 text-center text-sm text-white/80">
              {current.caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
