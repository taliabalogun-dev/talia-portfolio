"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, site } from "@/content/site";
import RoleNav from "@/components/RoleNav";
import ProjectCarousel from "@/components/ProjectCarousel";

const featuredProjects = projects.filter((p) => p.featured);

const mobilePreviewSlugs = ["kugali-iwaju", "fast-ucla-fashion-show", "live-nation-mutha"];
const mobilePreviewProjects = mobilePreviewSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState("kugali-iwaju");

  return (
    <section id="projects" className="relative overflow-hidden bg-teal pt-8 pb-16 sm:py-20">
      {/* Halftone texture, faded toward the carousel side. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,218,110,0.22) 1.4px, transparent 1.6px)",
          backgroundSize: "15px 15px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 78% 30%, #000 0%, transparent 72%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 78% 30%, #000 0%, transparent 72%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-md shrink-0 text-center lg:mt-[calc(2rem+1cm)] lg:self-start lg:text-left">
            <div className="inline-block -rotate-1">
              <h2 className="font-display inline-block whitespace-nowrap border-4 border-hero-ink bg-paper px-8 py-6 text-5xl uppercase leading-[0.95] tracking-tight text-hero-ink shadow-xl sm:text-7xl">
                My Work
              </h2>
            </div>
            <p className="font-hand mt-3 -rotate-1 text-2xl text-accent sm:mt-6 lg:text-4xl">
              {site.heroStatement}
            </p>
            <p className="mx-auto mt-2 hidden max-w-sm text-lg text-ink/85 sm:mt-5 lg:mx-0 lg:block lg:max-w-md lg:text-2xl">{site.tagline}</p>
            <div className="mt-3 hidden flex-wrap items-center justify-center gap-4 sm:mt-6 lg:flex lg:justify-start">
              <Link
                href="/work"
                className="-rotate-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-hero-ink transition-opacity hover:opacity-85"
              >
                View all roles
              </Link>
              <a
                href={site.resumeUrl}
                download
                className="rotate-1 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-hero-ink"
              >
                Download résumé
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:flex-1">
            <ProjectCarousel
              projects={featuredProjects}
              startSlug="kugali-iwaju"
              activeSlug={activeSlug}
              onIndexChange={setActiveSlug}
            />
          </div>

          {/* PREVIEW ONLY — smaller mobile-only carousel, not wired to RoleNav. */}
          <div className="lg:hidden">
            <ProjectCarousel
              projects={mobilePreviewProjects}
              startSlug="kugali-iwaju"
              size="medium"
            />
          </div>

        </div>

        <div id="roles" className="mt-14 scroll-mt-24">
          <RoleNav activeSlug={activeSlug} onFeaturedClick={setActiveSlug} />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:hidden">
          <Link
            href="/work"
            className="-rotate-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-hero-ink transition-opacity hover:opacity-85"
          >
            View all roles
          </Link>
          <a
            href={site.resumeUrl}
            download
            className="rotate-1 rounded-full border-2 border-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-hero-ink"
          >
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
