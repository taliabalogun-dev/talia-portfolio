import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import OtherFeaturedAnimation from "@/components/OtherFeaturedAnimation";
import {
  narrativeAnimationReel,
  experimentalAnimationReel,
  storyboardReel,
  characterDesignReel,
  conceptArtReel,
} from "@/content/site";

export default function AnimationPortfolioPage() {
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
          <OtherFeaturedAnimation
            items={experimentalAnimationReel}
            heading="Experimental Animation"
          />
          <OtherFeaturedAnimation
            items={storyboardReel}
            heading="Storyboards / Animatics"
          />
          <OtherFeaturedAnimation
            items={characterDesignReel}
            heading="Character Design"
          />
          <OtherFeaturedAnimation
            items={conceptArtReel}
            heading="Concept Art"
          />
        </div>
      </section>
    </>
  );
}
