import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import AnimationAtWork from "@/components/AnimationAtWork";
import FolderTabs from "@/components/FolderTabs";
import ProjectCarousel from "@/components/ProjectCarousel";
import OtherFeaturedAnimation from "@/components/OtherFeaturedAnimation";
import {
  narrativeAnimationReel,
  experimentalAnimationReel,
  storyboardReel,
  inProgressAnimationReel,
  characterDesignReel,
  conceptArtReel,
  animationAtWork,
  animationCommissionsReel,
  projects,
  site,
} from "@/content/site";

// Animation-led roles: Co Curate, the CTRL 4C short, and the MUTHA promo film.
const carouselSlugs = ["co-curate", "ctrl-4c-campaign", "live-nation-mutha"];
const carouselProjects = carouselSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function AnimationPortfolioPage() {
  return (
    <>
      <Nav />
      <section className="relative overflow-hidden bg-teal py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-64 sm:h-72 md:h-auto md:aspect-[2000/501]"
          style={{
            maskImage: "linear-gradient(to bottom, black 25%, transparent 72%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 25%, transparent 72%)",
          }}
        >
          <Image
            src="/images/animation-portfolio/banner.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/5" />
        </div>
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

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="min-w-0 md:max-w-xl lg:max-w-2xl">
              <h1 className="font-display text-balance text-6xl uppercase leading-[0.9] tracking-tight text-ink sm:text-8xl">
                Animation Portfolio
              </h1>
              <p className="mt-4 text-base text-ink/85 sm:text-lg">
                Narrative animation work built on 2D techniques, staged inside
                environments and props modeled in 3D space. As a photographer, I
                often fold photo collage into the frame too - the process below
                spans finished shorts, storyboards, character design, and
                concept art.
              </p>
              <div className="mt-5 flex flex-nowrap items-center gap-2 sm:mt-6 sm:gap-3">
                <a
                  href={site.social.animationInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-xs font-medium text-accent-ink transition-opacity hover:opacity-85 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Follow on Instagram
                </a>
                {site.social.animationYoutube ? (
                  <a
                    href={site.social.animationYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block whitespace-nowrap rounded-full bg-accent px-4 py-2.5 text-xs font-medium text-accent-ink transition-opacity hover:opacity-85 sm:px-6 sm:py-3 sm:text-sm"
                  >
                    Follow on YouTube
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center gap-1.5 whitespace-nowrap rounded-full bg-accent/60 px-3.5 py-2.5 text-xs font-medium text-accent-ink sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                  >
                    Follow on YouTube
                    <span className="rounded-full bg-accent-ink/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                      Soon
                    </span>
                  </span>
                )}
              </div>
            </div>
            <div className="order-first shrink-0 md:order-last">
              <div className="relative h-44 w-44 overflow-hidden rounded-full shadow-2xl ring-4 ring-ink/90 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/images/animation-portfolio/portrait.jpg"
                  alt="Illustrated self-portrait of Talia holding a tablet and stylus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 224px"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </div>
          </div>

          <OtherFeaturedAnimation
            items={narrativeAnimationReel}
            heading="Narrative Animation"
          />
          <FolderTabs
            folders={[
              {
                label: "Concept Art",
                content: <OtherFeaturedAnimation items={conceptArtReel} embedded />,
              },
              {
                label: "Character Design",
                content: <OtherFeaturedAnimation items={characterDesignReel} embedded />,
              },
            ]}
          />
          <FolderTabs
            folders={[
              {
                label: "Storyboards / Animatics",
                content: <OtherFeaturedAnimation items={storyboardReel} embedded tileRatio="16/9" />,
              },
              {
                label: "In-Progress Animation",
                content: <OtherFeaturedAnimation items={inProgressAnimationReel} embedded tileRatio="16/9" />,
              },
            ]}
          />
          <OtherFeaturedAnimation
            items={experimentalAnimationReel}
            heading="Experimental Animation"
            autoplayVideos
          />
          <AnimationAtWork
            items={animationAtWork}
            heading="Animation at Work"
            description="Where an animation background shows up in marketing, direction and production roles."
          />

          <div className="mt-16 border-t border-beige/15 pt-10">
            <ProjectCarousel
              projects={carouselProjects}
              startSlug="co-curate"
              size="small"
            />
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
                className="rotate-1 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-teal-deep"
              >
                Download résumé
              </a>
              <Link
                href="/"
                className="-rotate-1 rounded-full bg-hero-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-85"
              >
                Go to home
              </Link>
            </div>
          </div>

          <OtherFeaturedAnimation
            items={animationCommissionsReel}
            heading="Animation Commissions"
            description="Animation-based work I delivered for clients."
          />
        </div>
      </section>
    </>
  );
}
