import Link from "next/link";
import type { AnimationAtWorkCard } from "@/content/site";

/** A text-only reel, the same card size as the image slideshows: where an animation background did work in a role. */
export default function AnimationAtWork({
  items,
  heading,
  description,
}: {
  items: AnimationAtWorkCard[];
  heading: string;
  description?: string;
}) {
  const label = "text-[11px] font-bold uppercase tracking-wide text-paper-ink/50";
  return (
    <div className="mt-16 border-t border-beige/15 pt-10">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      {description && <p className="mt-2 max-w-2xl text-sm opacity-70">{description}</p>}
      <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-beige/10 bg-white p-5 shadow-xl sm:w-[380px]"
          >
            <p className={label}>{item.org}</p>
            <p className="mt-0.5 text-xs text-paper-ink/70">{item.role}</p>
            <h3 className="mt-3 text-lg font-bold text-paper-ink">{item.title}</h3>

            <p className={`mt-4 ${label}`}>Animation-adjacent tasks</p>
            <ul className="mt-1.5 space-y-1.5 text-sm text-paper-ink/80">
              {item.tasks.map((task) => (
                <li key={task} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <p className={`mt-4 ${label}`}>How animation helped</p>
            <p className="mt-1.5 text-sm text-paper-ink/80">{item.how}</p>

            <div className="mt-auto pt-5">
              <Link
                href={`/projects/${item.slug}`}
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-hero-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-85"
              >
                View Role →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
