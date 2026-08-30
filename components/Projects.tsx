"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/site";
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

// White paper frame with a dark yellow role line, staged on a black backdrop.
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
    <section id="projects" className="bg-beige py-16 text-beige sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-balance text-7xl uppercase leading-[0.9] tracking-tight text-white sm:text-9xl">
          My Work
        </h2>
        <p className="mt-3 max-w-md text-xl font-bold text-white">
          Eight roles, one creative throughline.
        </p>

        <div className="relative mx-auto mt-16 h-[560px] max-w-xl p-8 sm:h-[620px]">
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-40 w-96 -translate-x-1/2 -translate-y-1/3 rounded-full bg-white/25 blur-3xl" />
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
                i === index ? "bg-accent" : "bg-white/25"
              }`}
            />
          ))}
        </div>

        <div className="mt-14">
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
