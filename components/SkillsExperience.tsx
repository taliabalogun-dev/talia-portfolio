import { experience, site, skills } from "@/content/site";

export default function SkillsExperience() {
  return (
    <section id="skills" className="bg-beige py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="-rotate-[0.4deg]">
          <div className="relative rounded-md bg-[#1c1815] shadow-2xl">
            <span className="absolute -top-4 left-8 -rotate-3">
              <span className="font-hand inline-block rounded-sm bg-accent px-4 py-1.5 text-lg text-hero-ink shadow-lg">
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
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-5 rounded-2xl border border-ink/10 bg-ink/[0.04] p-5">
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

                <div className="rounded-2xl border border-ink/10 bg-ink/[0.04] p-5">
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
