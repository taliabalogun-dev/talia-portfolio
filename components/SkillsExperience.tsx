import Link from "next/link";
import { experience, site, skills } from "@/content/site";

export default function SkillsExperience() {
  return (
    <section id="skills" className="bg-beige py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <span className="font-hand block text-xl text-accent">about —</span>
        <p className="mt-1 mb-8 max-w-[60ch] text-sm text-muted">
          Working across industries has made me a creative worldbuilder — my goal is to bring that into entertainment creative strategy.
        </p>
        <div className="-rotate-[0.4deg]">
          <div className="relative rounded-md bg-teal-deep shadow-2xl">
            <span className="absolute -top-6 left-8 -rotate-3">
              <span className="font-hand inline-block rounded-sm bg-accent px-6 py-2.5 text-3xl text-hero-ink shadow-lg">
                the résumé, at a glance
              </span>
            </span>
            <div className="grid gap-10 px-8 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.4fr_1fr]">
              <div id="experience" className="scroll-mt-24">
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
                          {item.role} <span className="font-semibold text-accent">— {item.company}</span>
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
                          className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-hero-ink transition-opacity hover:opacity-85"
                        >
                          View Role →
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 rounded-2xl border border-accent/15 bg-teal-darker p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Contact
                  </h4>
                  <div className="mt-3 flex flex-col gap-2 text-sm text-ink">
                    <a href={`mailto:${site.email}`} className="hover:text-accent">
                      {site.email}
                    </a>
                    <span>{site.location}</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-accent/15 bg-teal-darker p-5">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Skills
                  </h4>
                  <div className="mt-3 flex flex-col gap-4">
                    {skills.map((group) => (
                      <div key={group.category}>
                        <span className="font-hand -rotate-1 inline-block text-lg text-accent">
                          {group.category}
                        </span>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-semibold text-accent"
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
