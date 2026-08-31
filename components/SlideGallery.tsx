"use client";

import { useState } from "react";
import EnlargeableImage from "@/components/EnlargeableImage";
import type { SlideImage } from "@/content/site";

export default function SlideGallery({ images }: { images: SlideImage[] }) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    setIndex(((i % images.length) + images.length) % images.length);
  };

  const current = images[index];

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-beige/15 bg-beige/5">
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
            className="object-contain"
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
    </div>
  );
}
