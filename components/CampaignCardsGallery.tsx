"use client";

import { useState } from "react";
import Image from "next/image";
import type { SlideImage } from "@/content/site";

const RESULT_PILL_CLASS =
  "rounded-full bg-beige/10 px-2 py-0.5 text-[11px] font-medium leading-snug text-beige/90";

export default function CampaignCardsGallery({ images }: { images: SlideImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {images.map((img, i) => (
          <div key={img.src} className="flex flex-col">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={img.caption ? `Enlarge: ${img.caption}` : "Enlarge image"}
              className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-lg border border-beige/15 bg-white/5"
            >
              <Image
                src={img.src}
                alt={img.caption ?? ""}
                fill
                className="object-contain p-1.5"
                sizes="(min-width: 640px) 23vw, 45vw"
              />
            </button>
            {img.title && (
              <p className="mt-2 text-sm font-bold leading-snug text-beige">
                {img.title}
              </p>
            )}
            {img.results && img.results.length > 0 && (
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {img.results.slice(0, 2).map((result) => (
                  <span key={result} className={RESULT_PILL_CLASS}>
                    {result}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 text-3xl leading-none text-white/80 hover:text-white sm:right-8 sm:top-8"
          >
            ×
          </button>
          <div
            className="relative flex max-h-full max-w-full flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.caption ?? ""}
              width={1600}
              height={1600}
              className="max-h-[85vh] w-auto max-w-full object-contain"
              sizes="100vw"
            />
            {current.caption && (
              <p className="mt-3 text-center text-sm text-white/70">{current.caption}</p>
            )}
            {current.results && current.results.length > 0 && (
              <div
                className="mt-4 flex flex-wrap justify-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                {current.results.map((result) => (
                  <span
                    key={result}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
                  >
                    {result}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
