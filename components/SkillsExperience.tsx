import Link from "next/link";
import { additionalExperience, experience, site, skills } from "@/content/site";

export default function SkillsExperience() {
  return (
    <section className="overflow-x-hidden bg-beige pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <span className="font-hand block text-xl text-brown lg:text-3xl">about -</span>
        <p className="mt-1 mb-8 max-w-[60ch] text-sm text-muted">
          Working across industries has made me a creative worldbuilder - my goal is to bring that into entertainment creative strategy.
        </p>
        <div className="-rotate-[0.4deg]">
          <div className="relative rounded-md bg-teal-deep shadow-2xl">
            <span className="absolute -top-6 left-8 -rotate-3">
              <span className="font-hand inline-block rounded-sm bg-accent px-6 py-2.5 text-3xl text-hero-ink shadow-lg">
                the résumé, at a glance
              </span>
            </span>
            <svg
              className="pointer-events-none absolute -top-10 right-8 hidden w-12 opacity-90 sm:block"
              viewBox="0 0 40 90"
              fill="none"
            >
              <path
                d="M20 5 C32 5 32 20 32 26 L32 68 C32 78 24 84 16 84 C8 84 2 78 2 68 L2 30 C2 24 6 20 11 20 C16 20 19 24 19 30 L19 62"
                stroke="#ffffff"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="grid gap-10 px-8 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.4fr_1fr]">
              <div id="experience" className="min-w-0 scroll-mt-24">
                <h3 className="font-display border-b-2 border-dashed border-ink/15 pb-2.5 text-2xl uppercase tracking-wide text-ink">
                  Experience
                </h3>
                <div className="mt-1 flex flex-col">
                  {experience.map((item) => (
                    <div
                      key={`${item.company}-${item.role}`}
                      className="border-b border-ink/10 py-4 first:pt-0 last:border-0"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <span className="text-base font-bold text-ink">
                          {item.role} <span className="font-semibold text-brown">- {item.company}</span>
                        </span>
                        <span className="whitespace-nowrap text-xs uppercase tracking-wide text-muted">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted">
                        {item.summary}
                      </p>
                      {item.slug && (
                        <Link
                          href={`/projects/${item.slug}`}
                          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-darker px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink transition-opacity hover:opacity-80"
                        >
                          View Role →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* The rest of the record, in the shortest notation that still
                    says something: what the role was, who it was for, and when.
                    Written out in full it would be longer than the eight roles
                    above it, which would make the résumé card read as a list of
                    everything rather than a list of the work. It stays in full
                    on My Work. Where a role has a page behind it the line is
                    the way in, so nothing is lost to the shortening. */}
                <div className="mt-8 rounded-2xl border border-accent/15 bg-teal-darker p-5">
                  <h4 className="font-display text-base uppercase tracking-wide text-ink/80">
                    Additional Experience
                  </h4>
                  <ul className="mt-2 flex flex-col">
                    {additionalExperience.map((item) => {
                      const line = (
                        <span className="flex items-baseline justify-between gap-x-4">
                          <span className="min-w-0 truncate text-sm text-ink/90">
                            {item.role}
                            <span className="text-brown"> - {item.company}</span>
                          </span>
                          <span className="shrink-0 whitespace-nowrap text-xs uppercase tracking-wide text-muted">
                            {item.period}
                          </span>
                        </span>
                      );
                      return (
                        <li key={`${item.company}-${item.role}`} className="py-1.5">
                          {item.slug ? (
                            <Link
                              href={`/projects/${item.slug}`}
                              className="block transition-opacity hover:opacity-70"
                            >
                              {line}
                            </Link>
                          ) : (
                            line
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href="/work"
                    className="mt-3 inline-block text-xs text-muted underline underline-offset-4 hover:text-brown"
                  >
                    See all roles →
                  </Link>
                </div>
              </div>

              <div className="min-w-0">
                <div className="mb-5 rounded-2xl border border-accent/15 bg-teal-darker p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Contact
                  </h4>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-ink">
                    <a href={`mailto:${site.email}`} className="hover:text-brown">
                      {site.email}
                    </a>
                    <span>{site.location}</span>
                  </div>
                </div>

                <div id="skills" className="scroll-mt-24 rounded-2xl border border-accent/15 bg-teal-darker p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Skills
                  </h4>
                  <div className="mt-3 flex flex-col gap-4">
                    {skills.map((group) => (
                      <div key={group.category}>
                        <span className="font-hand -rotate-1 inline-block text-lg text-brown">
                          {group.category}
                        </span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-ink"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
