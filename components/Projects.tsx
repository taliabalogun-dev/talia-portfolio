"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/site";

const GRADIENTS = [
  "from-indigo-500/40 to-purple-500/40",
  "from-amber-500/40 to-rose-500/40",
  "from-emerald-500/40 to-teal-500/40",
  "from-sky-500/40 to-blue-500/40",
  "from-fuchsia-500/40 to-pink-500/40",
  "from-orange-500/40 to-red-500/40",
];

const AUTO_ADVANCE_MS = 6000;

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

  const project = featuredProjects[index];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

      <div className="relative mt-8">
        <Link
          href={`/projects/${project.slug}`}
          className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brown/15 sm:aspect-video"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 640px) 768px, 100vw"
            />
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`}
            />
          )}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-brown/90 p-6 sm:p-8">
            <h3 className="text-xl font-medium text-beige">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-beige/15 px-3 py-1 text-xs text-beige"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="w-fit text-sm font-medium text-beige underline underline-offset-4">
              View project
            </span>
          </div>
        </Link>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous project"
            className="rounded-full border border-brown/30 px-3 py-2 text-sm text-brown hover:border-brown/60"
          >
            ← Prev
          </button>
          <div className="flex gap-2">
            {featuredProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-brown" : "bg-brown/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next project"
            className="rounded-full border border-brown/30 px-3 py-2 text-sm text-brown hover:border-brown/60"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {projects.map((p) => {
          const isActive = p.featured && p.slug === project.slug;
          const keywords = p.tags.slice(0, 2);
          const tileClasses = `flex flex-col gap-2 rounded-2xl border p-4 text-left transition-colors ${
            isActive
              ? "border-brown bg-brown"
              : "border-brown/20 hover:border-brown/40"
          }`;
          const titleClasses = isActive ? "font-medium text-beige" : "font-medium";
          const badgeClasses = isActive
            ? "rounded-full bg-beige/20 px-2 py-0.5 text-xs text-beige"
            : "rounded-full bg-brown/10 px-2 py-0.5 text-xs text-brown/60";

          const content = (
            <>
              <span className={titleClasses}>{p.navLabel}</span>
              <span className="flex flex-wrap gap-1.5">
                {keywords.map((kw) => (
                  <span key={kw} className={badgeClasses}>
                    {kw}
                  </span>
                ))}
              </span>
            </>
          );

          return p.featured ? (
            <button
              key={p.slug}
              onClick={() =>
                goTo(featuredProjects.findIndex((fp) => fp.slug === p.slug))
              }
              className={tileClasses}
            >
              {content}
            </button>
          ) : (
            <Link key={p.slug} href={`/projects/${p.slug}`} className={tileClasses}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
