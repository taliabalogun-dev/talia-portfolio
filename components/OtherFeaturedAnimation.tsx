import Link from "next/link";
import CardSlideshow from "@/components/CardSlideshow";
import EnlargeableVideo from "@/components/EnlargeableVideo";
import VideoLockButton from "@/components/VideoLockButton";
import type { FeaturedAnimation } from "@/content/site";

export default function OtherFeaturedAnimation({
  items,
  heading = "Other Featured Animation",
  description,
  compact = false,
  aspect = "video",
  action,
  embedded = false,
  tileRatio = "4/3",
  purpleButtons = false,
  autoplayVideos = false,
  folderSize = false,
  cocurateLink,
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
  /** Renders just the card strip (no heading or divider), to sit inside a folder panel. */
  embedded?: boolean;
  /** Embedded only: the picture shape every tile in the row shares. */
  tileRatio?: "4/3" | "16/9";
  /** Make the project/role link buttons purple instead of the default dark. */
  purpleButtons?: boolean;
  /** Videos play automatically, muted and looping, while on screen. Password-protected films stay click-to-play. */
  autoplayVideos?: boolean;
  /** Size the tiles exactly like the ones inside the folder panels (Concept Art etc.), 4:3 pictures included. */
  folderSize?: boolean;
  /** A red Co Curate button that sits right beside the heading and opens the given address in a new tab. */
  cocurateLink?: { label: string; href: string };
}) {
  return (
    <div className={embedded ? "" : "mt-8 border-t border-beige/15 pt-6 sm:mt-16 sm:pt-10"}>
      {!embedded && (
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
            <h2 className={`font-semibold tracking-tight ${cocurateLink ? "text-base sm:text-xl" : "text-xl"}`}>{heading}</h2>
            {cocurateLink && (
              <a
                href={cocurateLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-cocurate group inline-flex flex-col items-start leading-none"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] opacity-70">see more on</span>
                <span className="mt-0.5 text-lg font-bold tracking-wide text-[#e0563a] underline-offset-4 transition-opacity group-hover:underline sm:text-xl">
                  {cocurateLink.label}
                </span>
              </a>
            )}
          </div>
          {action && (
            <Link
              href={action.href}
              className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-85"
            >
              {action.label}
            </Link>
          )}
        </div>
      )}
      {!embedded && description && (
        <p className="mt-2 max-w-2xl text-sm opacity-70">{description}</p>
      )}
      <div
        className={`flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-4 ${
          embedded ? "-mx-5 px-5" : "-mx-6 mt-6 px-6"
        }`}
      >
        {items.map((item) => (
          <div
            key={item.src}
            className={`shrink-0 snap-start overflow-hidden rounded-2xl border border-beige/10 bg-white shadow-xl ${
              compact ? "w-[62%] sm:w-[240px]" : folderSize ? "w-[75%] sm:w-[380px]" : "w-[85%] sm:w-[380px]"
            }`}
          >
            {item.slides && item.slides.length > 0 ? (
              <CardSlideshow item={item} compact={compact} uniform={embedded || folderSize} ratio={tileRatio} />
            ) : (
              <>
            <div
              className={`relative w-full overflow-hidden bg-black ${
                aspect === "poster" ? "aspect-[3/4]" : embedded && tileRatio === "4/3" ? "aspect-[4/3]" : "aspect-video"
              }`}
            >
              {item.kind === "video" ? (
                <EnlargeableVideo
                  src={item.src}
                  poster={item.poster}
                  password={item.password}
                  autoplay={autoplayVideos && !item.password}
                  tint={item.tint}
                  externalLock
                  className="h-full w-full object-cover"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.title}
                  className={`h-full w-full object-cover ${
                    item.position === "top" ? "object-top" : item.position === "bottom" ? "object-bottom" : ""
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
              <div className="absolute right-1.5 top-1.5 z-10 flex items-center gap-2">
              {item.password && item.kind === "video" && (
                <VideoLockButton src={item.src} password={item.password} />
              )}
              <span
                className={`pointer-events-none rounded-full ${
                  aspect === "poster"
                    ? "bg-teal px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/25"
                    : compact
                      ? "rotate-2 bg-[var(--tag-bg,#f5da6e)] px-2.5 py-0.5 text-[11px] font-extrabold text-[var(--tag-ink,#151210)] shadow-md ring-2 ring-white/80"
                      : "rotate-2 bg-[var(--tag-bg,#f5da6e)] px-3 py-1 text-sm font-extrabold text-[var(--tag-ink,#151210)] shadow-md ring-2 ring-white/80"
                }`}
              >
                {item.category}
              </span>
              </div>
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
                  className={`mt-4 inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-85 ${
                    purpleButtons ? "bg-[#8f82e8]" : "bg-hero-ink"
                  }`}
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
