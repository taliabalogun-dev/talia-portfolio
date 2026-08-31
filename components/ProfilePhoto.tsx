"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfilePhoto({ src }: { src: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Enlarge profile photo"
        className="relative h-14 w-14 shrink-0 cursor-zoom-in overflow-hidden rounded-full border-2 border-accent lg:h-24 lg:w-24"
      >
        <Image src={src} alt="" fill className="object-cover" sizes="96px" />
      </button>

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
          <div className="relative h-[80vh] w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <Image src={src} alt="" fill className="object-contain" sizes="90vw" />
          </div>
        </div>
      )}
    </>
  );
}
