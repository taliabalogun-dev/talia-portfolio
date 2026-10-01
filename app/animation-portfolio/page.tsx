import Link from "next/link";
import Nav from "@/components/Nav";
import OtherFeaturedAnimation from "@/components/OtherFeaturedAnimation";
import {
  featuredAnimationReel,
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

          <h1 className="font-display mt-8 text-balance text-6xl uppercase leading-[0.9] tracking-tight text-ink sm:text-8xl">
            Animation Portfolio
          </h1>
          <p className="mt-4 max-w-2xl text-base text-ink/85 sm:text-lg">
            Narrative animation work built on 2D techniques, staged inside
            environments and props modeled in 3D space. As a photographer, I
            often fold photo collage into the frame too - the process below
            spans finished shorts, storyboards, character design, and
            concept art.
          </p>

          <OtherFeaturedAnimation
            items={featuredAnimationReel}
            heading="Narrative Animation"
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
