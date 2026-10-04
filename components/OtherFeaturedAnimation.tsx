import Link from "next/link";
import CardSlideshow from "@/components/CardSlideshow";
import EnlargeableVideo from "@/components/EnlargeableVideo";
import type { FeaturedAnimation } from "@/content/site";

export default function OtherFeaturedAnimation({
  items,
  heading = "Other Featured Animation",
  description,
  compact = false,
  aspect = "video",
  action,
}: {
  items: FeaturedAnimation[];
  heading?: string;
  description?: string;
  /** Smaller cards - used for dense reels like the Co Curate commissions list. */
  compact?: boolean;
  /** "poster" gives portrait cards for film and TV posters; the default is 16:9 for video. */
  aspect?: "video" | "poster";
  /** A yellow pill link shown at the right of the heading. */
  action?: { label: string; href: string };
}) {
  return (
    <div className="mt-16 border-t border-beige/15 pt-10">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
        {action && (
          <Link
            href={action.href}
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-85"
          >
            {action.label}
          </Link>
        )}
      </div>
      {description && (
        <p className="mt-2 max-w-2xl text-sm opacity-70">{description}</p>
      )}
      <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
        {items.map((item) => (
          <div
            key={item.src}
            className={`shrink-0 snap-start overflow-hidden rounded-2xl border border-beige/10 bg-white shadow-xl ${
              compact ? "w-[62%] sm:w-[240px]" : "w-[85%] sm:w-[380px]"
            }`}
          >
            {item.slides && item.slides.length > 0 ? (
              <CardSlideshow item={item} compact={compact} />
            ) : (
              <>
            <div
              className={`relative w-full overflow-hidden bg-black ${
                aspect === "poster" ? "aspect-[3/4]" : "aspect-video"
              }`}
            >
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
                  className={`h-full w-full object-cover ${
                    item.position === "top" ? "object-top" : ""
                  }`}
                />
              )}
              {item.date && (
                <span
                  className={`pointer-events-none absolute left-2 top-2 rounded-full bg-black/60 font-semibold text-white ${
                    compact ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]"
                  }`}
                >
                  {item.date}
                </span>
              )}
              <span
                className={`pointer-events-none absolute right-2.5 top-2.5 rounded-full font-semibold text-white ${
                  aspect === "poster"
                    ? "bg-teal px-4 py-2 text-sm shadow-lg ring-1 ring-white/25"
                    : compact
                      ? "bg-black/60 px-2 py-0.5 text-[10px]"
                      : "bg-black/60 px-2.5 py-1 text-[11px]"
                }`}
              >
                {item.category}
              </span>
            </div>
            <div className={compact ? "p-3" : "p-4"}>
              <h3
                className={`font-bold text-paper-ink ${compact ? "text-sm" : "text-lg"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-paper-ink/70 ${compact ? "mt-0.5 text-xs" : "mt-1 text-sm"}`}
              >
                {item.description}
              </p>
              {item.roleLabel ? (
                <div
                  className={`font-cocurate mt-3 inline-block rounded-full bg-cocurate-red font-semibold tracking-wide text-white ${
                    compact ? "px-3 py-1 text-[10px]" : "px-4 py-1.5 text-xs"
                  }`}
                >
                  {item.roleLabel}
                </div>
              ) : (
                item.skills.length > 0 && (
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
                )
              )}
              {item.href && (
                <Link
                  href={item.href}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-hero-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-85"
                >
                  {item.hrefLabel ?? "See Full Project →"}
                </Link>
              )}
            </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
