"use client";

import { useCallback, useEffect, useState } from "react";
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

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {projects.map((p) =>
          p.featured ? (
            <button
              key={p.slug}
              onClick={() =>
                goTo(featuredProjects.findIndex((fp) => fp.slug === p.slug))
              }
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-colors ${
                p.slug === project.slug
                  ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                  : "border-black/15 text-black/60 hover:border-black/30 dark:border-white/15 dark:text-white/60 dark:hover:border-white/30"
              }`}
            >
              {p.navLabel}
            </button>
          ) : (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-black/15 px-4 py-2 text-sm text-black/60 transition-colors hover:border-black/30 dark:border-white/15 dark:text-white/60 dark:hover:border-white/30"
            >
              {p.navLabel}
            </Link>
          ),
        )}
      </div>

      <div className="relative mt-8">
        <Link
          href={`/projects/${project.slug}`}
          className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 sm:aspect-video dark:border-white/10"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]}`}
          />
          <div className="absolute inset-0 bg-black/[6%]" />

          <div className="relative flex h-full flex-col justify-end gap-3 p-6 text-white sm:p-8">
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className="text-white/85">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="w-fit text-sm font-medium text-white underline underline-offset-4">
              View project
            </span>
          </div>
        </Link>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous project"
            className="rounded-full border border-black/20 px-3 py-2 text-sm hover:border-black/40 dark:border-white/20 dark:hover:border-white/40"
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
                  i === index
                    ? "bg-black dark:bg-white"
                    : "bg-black/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next project"
            className="rounded-full border border-black/20 px-3 py-2 text-sm hover:border-black/40 dark:border-white/20 dark:hover:border-white/40"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
}
