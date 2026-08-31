import Link from "next/link";
import Nav from "@/components/Nav";
import EnlargeableImage from "@/components/EnlargeableImage";
import ProjectCarousel from "@/components/ProjectCarousel";
import { bio, projects, site, skills } from "@/content/site";

export const metadata = {
  title: `${bio.heading} - ${site.name}`,
  description: bio.paragraphs[0],
};

const carouselSlugs = ["kugali-iwaju", "fast-ucla-fashion-show", "ucla-campus-campaigns"];
const carouselProjects = carouselSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function AboutPage() {
  return (
    <>
      <Nav />
      <div className="bg-sky">
        <main className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/#top"
            className="text-base text-navy/70 transition-colors hover:text-navy"
          >
            ← Back to home
          </Link>

          <div className="mt-10 -rotate-[0.4deg]">
            <div className="relative rounded-md bg-sky-deep shadow-2xl">
              <span className="absolute -top-6 left-8 -rotate-3">
                <span className="font-hand inline-block rounded-sm bg-accent px-6 py-2.5 text-3xl text-hero-ink shadow-lg">
                  the full story
                </span>
              </span>
              <div className="flex flex-col-reverse gap-8 px-8 py-12 sm:flex-row sm:items-start sm:gap-10 sm:px-10 sm:py-14">
                <div className="flex-1">
                  <h1 className="font-display text-3xl uppercase tracking-tight text-navy sm:text-4xl">
                    {bio.heading}
                  </h1>
                  <div className="mt-6 flex flex-col gap-4 text-lg text-navy/80">
                    {bio.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="relative flex w-full shrink-0 flex-col gap-6 sm:w-72">
                  <svg
                    className="pointer-events-none absolute -top-7 right-6 z-10 hidden w-12 opacity-90 sm:block"
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
                  <div className="rounded-sm border-4 border-white bg-white p-3 pb-5 shadow-xl">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <EnlargeableImage
                        src={site.aboutImage}
                        alt={site.name}
                        className="object-cover"
                        priority
                      />
                    </div>
                    <p className="mt-3 text-center text-sm leading-snug text-hero-ink">
                      <span className="block font-bold">
                        University of California, Los Angeles, USA
                      </span>
                      <span className="block">Cheltenham Ladies&apos;, Cheltenham, UK</span>
                    </p>
                  </div>

                  <div className="hidden rounded-md bg-sky-darker/40 p-5 sm:block">
                    <h2 className="font-display text-lg uppercase tracking-tight text-navy">
                      Skills
                    </h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {skills.map((group) => (
                        <div key={group.category}>
                          <span className="font-hand -rotate-1 inline-block text-base text-navy/80">
                            {group.category}
                          </span>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-navy/20 bg-sky-deep/70 px-2.5 py-1 text-[11px] font-semibold text-navy"
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

          <div className="mt-14">
            <ProjectCarousel
              projects={carouselProjects}
              startSlug="kugali-iwaju"
              size="small"
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work"
              className="-rotate-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-hero-ink transition-opacity hover:opacity-85"
            >
              View all roles
            </Link>
            <a
              href={site.resumeUrl}
              download
              className="rotate-1 rounded-full border-2 border-navy px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-navy hover:text-sky"
            >
              Download résumé
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
