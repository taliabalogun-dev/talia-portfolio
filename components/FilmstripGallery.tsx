import Image from "next/image";
import type { SlideImage } from "@/content/site";

export default function FilmstripGallery({ images }: { images: SlideImage[] }) {
  return (
    <div className="flex w-full gap-0 overflow-x-auto rounded-xl border border-brown/15">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative h-64 w-40 flex-none sm:h-80 sm:w-56"
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
        </div>
      ))}
    </div>
  );
}
