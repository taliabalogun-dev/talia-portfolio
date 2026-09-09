"use client";

import { useState } from "react";
import Image from "next/image";

export default function EnlargeableImage({
  src,
  alt = "",
  className = "",
  sizes,
  priority,
  roles,
  results,
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
          <div
            className="relative h-[75vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
          </div>
          {roles && roles.length > 0 && (
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
          {results && results.length > 0 && (
            <div
              className="flex flex-wrap justify-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {results.map((result) => (
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
      )}
    </>
  );
}
