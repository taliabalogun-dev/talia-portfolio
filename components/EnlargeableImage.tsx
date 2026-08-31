"use client";

import { useState } from "react";
import Image from "next/image";

export default function EnlargeableImage({
  src,
  alt = "",
  className = "",
  sizes,
  priority,
}: {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
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
          <div
            className="relative h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  );
}
