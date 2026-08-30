"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, site } from "@/content/site";
import RoleNav from "@/components/RoleNav";

const GRADIENTS = [
  "from-indigo-500/40 to-purple-500/40",
  "from-amber-500/40 to-rose-500/40",
  "from-emerald-500/40 to-teal-500/40",
  "from-sky-500/40 to-blue-500/40",
  "from-fuchsia-500/40 to-pink-500/40",
  "from-orange-500/40 to-red-500/40",
];

const AUTO_ADVANCE_MS = 6000;

// White paper frame with a dark yellow role line, staged on a teal backdrop.
const CARD_STYLE = { card: "bg-white border-white", role: "text-[#8a7015]" };

const featuredProjects = projects.filter((p) => p.featured);

const START_INDEX = Math.max(
  0,
  featuredProjects.findIndex((p) => p.slug === "kugali-iwaju"),
);

export default function Projects() {
  const [index, setIndex] = useState(START_INDEX);

  const goTo = useCallback((i: number) => {
    setIndex(
      ((i % featuredProjects.length) + featuredProjects.length) %
        featuredProjects.length,
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % featuredProjects.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index]);

  const n = featuredProjects.length;

  return (
    <section id="projects" className="relative overflow-hidden bg-teal py-16 sm:py-20">
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
      <svg
        className="pointer-events-none absolute right-[6vw] top-16 hidden w-14 opacity-90 sm:block"
        viewBox="0 0 40 90"
        fill="none"
      >
        <path
          d="M20 5 C32 5 32 20 32 26 L32 68 C32 78 24 84 16 84 C8 84 2 78 2 68 L2 30 C2 24 6 20 11 20 C16 20 19 24 19 30 L19 62"
          stroke="#d8d2c6"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md shrink-0 lg:-mt-16 lg:self-start">
            <span className="inline-block -rotate-2">
              <span className="inline-block rounded-sm bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-hero-ink shadow-lg">
                {site.role}
              </span>
            </span>
            <div className="mt-5 inline-block -rotate-1">
              <h2 className="font-display inline-block whitespace-nowrap border-4 border-hero-ink bg-paper px-6 py-4 text-4xl uppercase leading-tight tracking-tight text-hero-ink shadow-xl sm:text-8xl">
                My<br className="hidden sm:block" /> Work
              </h2>
            </div>
            <p className="font-hand mt-6 -rotate-1 text-2xl text-accent">
              {site.heroStatement}
            </p>
            <p className="mt-5 max-w-sm text-lg text-ink/85">{site.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
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

          <div className="relative w-full lg:flex-1">
            <div className="relative mx-auto h-[560px] max-w-xl sm:h-[620px]">
              {featuredProjects.map((project, i) => {
                const offset = ((i - index) % n + n) % n;
                let transform = "";
                let zIndex = 1;
                let opacity = "1";
                let scale = 1;
                if (offset === 0) {
                  transform = "translate(-50%, 20px) rotate(0deg)";
                  zIndex = 10;
                } else if (offset === 1) {
                  transform = "translate(calc(-50% + 170px), 60px) rotate(8deg)";
                  zIndex = 5;
                  scale = 0.88;
                } else if (offset === n - 1) {
                  transform = "translate(calc(-50% - 170px), 60px) rotate(-8deg)";
                  zIndex = 5;
                  scale = 0.88;
                } else {
                  transform = "translate(-50%, 90px) rotate(0deg)";
                  zIndex = 1;
                  scale = 0.7;
                  opacity = "0";
                }
                return (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className={`absolute left-1/2 top-0 w-96 rounded-sm border-4 p-3 pb-7 shadow-2xl transition-transform duration-500 ease-out ${CARD_STYLE.card}`}
                    style={{
                      transform: `${transform} scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                    onClick={(e) => {
                      if (offset !== 0) {
                        e.preventDefault();
                        goTo(i);
                      }
                    }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt=""
                          fill
                          className={project.imagePosition === "top" ? "object-cover object-top" : "object-cover"}
                          sizes="384px"
                        />
                      ) : (
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}`}
                        />
                      )}
                    </div>
                    <h3 className="font-display mt-3 text-2xl uppercase tracking-tight text-black">
                      {project.cardTitle ?? project.title}
                    </h3>
                    <p className={`mt-0.5 text-sm font-bold uppercase tracking-wide ${CARD_STYLE.role}`}>
                      {project.role}
                    </p>
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-hero-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#f7ecc4]">
                      View Role →
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-accent" : "bg-ink/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div id="roles" className="mt-14 scroll-mt-24">
          <RoleNav
            activeSlug={featuredProjects[index].slug}
            onFeaturedClick={(slug) =>
              goTo(featuredProjects.findIndex((fp) => fp.slug === slug))
            }
          />
        </div>
      </div>
    </section>
  );
}
