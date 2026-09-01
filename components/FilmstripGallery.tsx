"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { SlideImage } from "@/content/site";

export default function FilmstripGallery({ images }: { images: SlideImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const goTo = useCallback(
    (i: number) => setOpenIndex(((i % images.length) + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goTo(openIndex + 1);
      if (e.key === "ArrowLeft") goTo(openIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, goTo]);

  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="flex w-full gap-0 overflow-x-auto rounded-xl border border-beige/15">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={img.caption ? `Enlarge: ${img.caption}` : "Enlarge image"}
            className="relative h-64 flex-1 shrink-0 basis-40 cursor-zoom-in sm:h-80 sm:basis-56"
          >
            {img.kind === "video" ? (
              <video
                src={img.src}
                poster={img.poster}
                muted
                loop
                playsInline
                autoPlay={img.autoplay}
                preload="metadata"
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={img.src}
                alt={img.caption ?? ""}
                fill
                className="object-cover"
                sizes="224px"
              />
            )}
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 hover:text-white sm:right-8 sm:top-8"
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(openIndex! - 1);
              }}
              aria-label="Previous"
              className="absolute left-2 text-4xl text-white/70 hover:text-white sm:left-6"
            >
              ‹
            </button>
          )}

          <div
            className="relative flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {current.kind === "video" ? (
              <video
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] max-w-full"
              />
            ) : (
              <Image
                src={current.src}
                alt={current.caption ?? ""}
                width={1600}
                height={1600}
                className="max-h-[85vh] w-auto max-w-full object-contain"
                sizes="100vw"
              />
            )}
            {current.caption && (
              <p className="mt-3 text-center text-sm text-white/70">{current.caption}</p>
            )}
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(openIndex! + 1);
              }}
              aria-label="Next"
              className="absolute right-2 text-4xl text-white/70 hover:text-white sm:right-6"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
