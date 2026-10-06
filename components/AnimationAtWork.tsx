import Link from "next/link";
import type { AnimationAtWorkCard } from "@/content/site";

/** A compact text-only reel: where an animation background did work in a role. */
export default function AnimationAtWork({
  items,
  heading,
  description,
}: {
  items: AnimationAtWorkCard[];
  heading: string;
  description?: string;
}) {
  const label = "text-[10px] font-bold uppercase tracking-[0.14em] text-accent";
  return (
    <div className="mt-8 border-t border-beige/15 pt-6 sm:mt-16 sm:pt-10">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      {description && <p className="mt-2 max-w-2xl text-sm opacity-70">{description}</p>}
      <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain px-6 pb-4">
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex w-[72%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-accent/25 bg-teal-deep p-4 text-ink shadow-xl sm:w-[290px]"
          >
            <p className="min-h-[2rem] text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-ink/70">
              {item.org} <span className="text-ink/40">·</span> {item.role}
            </p>
            <h3 className="font-display mt-2 text-3xl uppercase leading-[0.95] tracking-tight text-accent">
              {item.title}
            </h3>

            <p className={`mt-4 ${label}`}>Tasks</p>
            <ul className="mt-1.5 space-y-1.5 text-[13px] leading-snug text-ink/90">
              {item.tasks.map((task) => (
                <li key={task} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>

            <p className={`mt-3 ${label}`}>How animation helped</p>
            <p className="mt-1.5 text-[13px] leading-snug text-ink/90">{item.how}</p>

            <div className="mt-auto pt-4">
              <Link
                href={`/projects/${item.slug}`}
                className="inline-block rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-ink transition-opacity hover:opacity-85"
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
