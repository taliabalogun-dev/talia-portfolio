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
  const label = "text-[11px] font-bold uppercase tracking-[0.14em] text-accent";
  return (
    <div className="mt-16 border-t border-beige/15 pt-10">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      {description && <p className="mt-2 max-w-2xl text-sm opacity-70">{description}</p>}
      <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4">
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-accent/25 bg-teal-deep p-6 text-ink shadow-xl sm:w-[380px]"
          >
            <p className="min-h-[2.4rem] text-xs font-semibold uppercase leading-snug tracking-[0.14em] text-ink/70">
              {item.org} <span className="text-ink/40">·</span> {item.role}
            </p>
            <h3 className="font-display mt-3 text-4xl uppercase leading-[0.95] tracking-tight text-accent">
              {item.title}
            </h3>

            <p className={`mt-6 ${label}`}>Tasks</p>
            <ul className="mt-2 space-y-2 text-[15px] leading-snug text-ink/90">
              {item.tasks.map((task) => (
                <li key={task} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <p className={`mt-5 ${label}`}>How animation helped</p>
            <p className="mt-2 text-[15px] leading-snug text-ink/90">{item.how}</p>

            <div className="mt-auto pt-6">
              <Link
                href={`/projects/${item.slug}`}
                className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-85"
              >
                View role →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
