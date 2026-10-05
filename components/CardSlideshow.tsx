"use client";

import { useState } from "react";
import EnlargeableImage from "@/components/EnlargeableImage";
import EnlargeableVideo from "@/components/EnlargeableVideo";
import type { FeaturedAnimation } from "@/content/site";

/** A reel card holding several pieces as one slideshow: the picture, its own title and
 * description, and Prev / Next underneath. Shown whole, since these are drawings. */
export default function CardSlideshow({
  item,
  compact,
}: {
  item: FeaturedAnimation;
  compact: boolean;
}) {
  const slides = item.slides ?? [];
  const [index, setIndex] = useState(0);
  if (slides.length === 0) return null;
  const go = (n: number) => setIndex(((n % slides.length) + slides.length) % slides.length);
  const current = slides[index];
  const allVideo = slides.every((sl) => sl.kind === "video");
  const bubble = `pointer-events-none absolute top-2 rounded-full bg-black/60 font-semibold text-white ${
    compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
  }`;
  const nav =
    "rounded-full border border-paper-ink/25 px-3 py-1 text-xs font-medium text-paper-ink transition-colors hover:border-paper-ink/60";

  return (
    <>
      <div
        className={`relative w-full overflow-hidden bg-paper ${
          allVideo ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        {current.kind === "video" ? (
          <EnlargeableVideo
            key={current.src}
            src={current.src}
            poster={current.poster}
            autoplay={current.autoplay}
            className="h-full w-full object-cover"
          />
        ) : (
          <EnlargeableImage
            src={current.src}
            alt={current.title}
            className="object-contain"
            sizes="(min-width: 640px) 380px, 85vw"
            onPrev={slides.length > 1 ? () => go(index - 1) : undefined}
            onNext={slides.length > 1 ? () => go(index + 1) : undefined}
            counter={slides.length > 1 ? `${index + 1} / ${slides.length}` : undefined}
          />
        )}
        {item.date && <span className={`${bubble} left-2`}>{item.date}</span>}
        <span className={`${bubble} right-2`}>{item.category}</span>
      </div>
      <div className={compact ? "p-3" : "p-4"}>
        <h3 className={`font-bold text-paper-ink ${compact ? "text-sm" : "text-lg"}`}>
          {current.title}
        </h3>
        <p className={`text-paper-ink/70 ${compact ? "mt-0.5 text-xs" : "mt-1 text-sm"}`}>
          {current.description}
        </p>
        {slides.length > 1 && (
          <div className="mt-3 flex items-center justify-between">
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous" className={nav}>
              ← Prev
            </button>
            <span className="text-xs text-paper-ink/60">
              {index + 1} / {slides.length}
            </span>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next" className={nav}>
              Next →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
