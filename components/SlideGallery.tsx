"use client";

import { useRef, useState } from "react";
import EnlargeableImage from "@/components/EnlargeableImage";
import type { SlideImage } from "@/content/site";
import type { PillTheme } from "@/content/pillTheme";

const SWIPE_THRESHOLD = 40;

export default function SlideGallery({
  images,
  theme,
}: {
  images: SlideImage[];
  theme?: PillTheme;
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => {
    setIndex(((i % images.length) + images.length) % images.length);
  };

  const current = images[index];

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (delta > SWIPE_THRESHOLD) goTo(index - 1);
    else if (delta < -SWIPE_THRESHOLD) goTo(index + 1);
  }

  return (
    <div>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative aspect-video w-full touch-pan-y select-none overflow-hidden rounded-xl border border-beige/15 bg-beige/5"
      >
        {current.kind === "video" ? (
          <video
            key={current.src}
            src={current.src}
            poster={current.poster}
            controls
            playsInline
            autoPlay={current.autoplay}
            muted={current.autoplay}
            loop={current.autoplay}
            preload={current.autoplay ? "auto" : "metadata"}
            className="h-full w-full object-contain"
          />
        ) : (
          <EnlargeableImage
            src={current.src}
            alt={current.caption ?? ""}
            className="object-cover"
            sizes="(min-width: 640px) 640px, 100vw"
          />
        )}
      </div>
      {current.caption && (
        <p className="mt-2 text-sm text-beige/70">{current.caption}</p>
      )}
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
          className="rounded-full border border-beige/30 px-3 py-1.5 text-sm text-beige transition-colors hover:border-beige/60"
        >
          ← Prev
        </button>
        <span className="text-sm text-beige/60">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next"
          className="rounded-full border border-beige/30 px-3 py-1.5 text-sm text-beige transition-colors hover:border-beige/60"
        >
          Next →
        </button>
      </div>
      {current.results && current.results.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {current.results.map((result) => (
            <span
              key={result}
              className="rounded-full px-2.5 py-1 text-xs font-medium leading-snug"
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
  );
}
