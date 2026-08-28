"use client";

import { useState } from "react";
import Image from "next/image";
import type { SlideImage } from "@/content/site";

export default function SlideGallery({ images }: { images: SlideImage[] }) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    setIndex(((i % images.length) + images.length) % images.length);
  };

  const current = images[index];

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-brown/15 bg-beige-card">
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
          <Image
            src={current.src}
            alt={current.caption ?? ""}
            fill
            className="object-contain"
            sizes="(min-width: 640px) 640px, 100vw"
          />
        )}
      </div>
      {current.caption && (
        <p className="mt-2 text-xs text-brown/60">{current.caption}</p>
      )}
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
          className="rounded-full border border-brown/30 px-3 py-1.5 text-xs text-brown transition-colors hover:border-brown/60"
        >
          ← Prev
        </button>
        <span className="text-xs text-brown/50">
          {index + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next"
          className="rounded-full border border-brown/30 px-3 py-1.5 text-xs text-brown transition-colors hover:border-brown/60"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
