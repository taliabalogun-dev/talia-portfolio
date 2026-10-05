import Link from "next/link";
import Nav from "@/components/Nav";
import SkillIcon from "@/components/SkillIcon";
import { site, skillDetails, skills } from "@/content/site";

export const metadata = {
  title: `Skills - ${site.name}`,
  description:
    "Creative strategy, content and social, production and logistics, and the tools behind the work.",
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <section className="relative overflow-hidden bg-teal py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(245,218,110,0.22) 1.4px, transparent 1.6px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Link
            href="/"
            className="text-base text-ink/70 transition-colors hover:text-ink"
          >
            ← Back to home
          </Link>

          <h1 className="font-display mt-8 text-balance text-6xl uppercase leading-[0.9] tracking-tight text-ink sm:text-8xl">
            Skills
          </h1>
          <span className="mt-4 inline-block max-w-full -rotate-1 rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-hero-ink shadow-lg sm:px-5 sm:py-3 sm:text-lg">
            What I bring to a production, and where each skill was earned.
          </span>

          {/* The Skills box from the home page, stretched wide: one column per category. */}
          <div className="mt-12 rounded-2xl border border-accent/15 bg-teal-darker p-5 sm:p-7 lg:p-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Skills
            </h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {skills.map((group) => (
                <div key={group.category}>
                  <a
                    href={`#${slugify(group.category)}`}
                    className="-rotate-1 inline-block text-lg font-semibold text-brown transition-colors hover:text-accent"
                  >
                    {group.category}
                  </a>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <a
                        key={item}
                        href={`#${slugify(item)}`}
                        className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-ink transition-colors hover:bg-accent/25"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* One box per category: context first, then a card per skill with its sub-skills. */}
          <div className="mt-10 flex flex-col gap-8">
            {skillDetails.map((group) => (
              <section
                key={group.category}
                id={slugify(group.category)}
                className="scroll-mt-28 rounded-2xl border border-accent/15 bg-teal-deep p-5 sm:p-7 lg:p-8"
              >
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-accent/70 text-accent">
                      <SkillIcon name={group.category} className="h-7 w-7" />
                    </span>
                    <h2 className="-rotate-1 inline-block text-2xl font-bold text-brown sm:text-3xl">
                      {group.category}
                    </h2>
                  </div>
                  <p className="mt-3 text-base text-ink/85 sm:text-lg">{group.context}</p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <article
                      key={skill.name}
                      id={slugify(skill.name)}
                      className="flex scroll-mt-28 flex-col rounded-xl border border-accent/20 bg-teal-darker p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 text-accent">
                          <SkillIcon name={skill.name} className="h-5 w-5" />
                        </span>
                        <h3 className="pt-1.5 text-base font-bold leading-snug text-ink">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-ink/80">{skill.blurb}</p>
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {skill.subskills.map((sub) => (
                          <li
                            key={sub}
                            className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-ink"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-auto pt-4 text-xs text-ink/70">
                        <span className="font-semibold uppercase tracking-widest text-muted">
                          Seen in
                        </span>{" "}
                        {skill.seenIn.map((place, i) => (
                          <span key={place.label}>
                            {i > 0 && ", "}
                            {place.slug ? (
                              <Link
                                href={`/projects/${place.slug}`}
                                className="text-accent transition-colors hover:text-ink"
                              >
                                {place.label}
                              </Link>
                            ) : (
                              <span className="text-ink/85">{place.label}</span>
                            )}
                          </span>
                        ))}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
