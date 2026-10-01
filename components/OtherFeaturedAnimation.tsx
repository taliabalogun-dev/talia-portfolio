import Link from "next/link";
import EnlargeableVideo from "@/components/EnlargeableVideo";
import type { FeaturedAnimation } from "@/content/site";

export default function OtherFeaturedAnimation({
  items,
  heading = "Other Featured Animation",
  description,
}: {
  items: FeaturedAnimation[];
  heading?: string;
  description?: string;
}) {
  return (
    <div className="mt-16 border-t border-beige/15 pt-10">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm opacity-70">{description}</p>
      )}
      <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
        {items.map((item) => (
          <div
            key={item.src}
            className="w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-beige/10 bg-white shadow-xl sm:w-[380px]"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              {item.kind === "video" ? (
                <EnlargeableVideo
                  src={item.src}
                  poster={item.poster}
                  password={item.password}
                  className="h-full w-full object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              )}
              <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white">
                {item.date}
              </span>
              <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white">
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-paper-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-paper-ink/70">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-paper-ink/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-hero-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-85"
                >
                  See Full Project →
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
