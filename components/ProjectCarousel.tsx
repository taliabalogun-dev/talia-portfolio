"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/site";

const GRADIENTS = [
  "from-indigo-500/40 to-purple-500/40",
  "from-amber-500/40 to-rose-500/40",
  "from-emerald-500/40 to-teal-500/40",
  "from-sky-500/40 to-blue-500/40",
  "from-fuchsia-500/40 to-pink-500/40",
  "from-orange-500/40 to-red-500/40",
];

const AUTO_ADVANCE_MS = 6000;
const SWIPE_THRESHOLD = 40;

// White paper frame with a dark yellow role line, staged on a teal backdrop.
const CARD_STYLE = { card: "bg-white border-white", role: "text-[#8a7015]" };

const SIZES = {
  default: {
    containerHeight: "h-[560px] sm:h-[620px]",
    maxWidth: "max-w-xl",
    cardWidth: "w-96",
    sideOffset: 170,
    frontY: 20,
    sideY: 60,
    farY: 90,
    titleSize: "text-2xl",
    roleSize: "text-sm",
    buttonClass: "mt-3 px-4 py-2 text-xs",
    imageSizes: "384px",
  },
  small: {
    containerHeight: "h-[320px] sm:h-[360px]",
    maxWidth: "max-w-xs sm:max-w-sm",
    cardWidth: "w-44 sm:w-52",
    sideOffset: 90,
    frontY: 10,
    sideY: 32,
    farY: 48,
    titleSize: "text-sm",
    roleSize: "text-[11px]",
    buttonClass: "mt-2 px-3 py-1.5 text-[10px]",
    imageSizes: "208px",
  },
} as const;

export default function ProjectCarousel({
  projects,
  startSlug,
  activeSlug,
  size = "default",
  onIndexChange,
}: {
  projects: Project[];
  startSlug?: string;
  /** External slug to jump to (e.g. a RoleNav click) — changes here move the carousel. */
  activeSlug?: string;
  size?: keyof typeof SIZES;
  onIndexChange?: (slug: string) => void;
}) {
  const n = projects.length;
  const startIndex = Math.max(
    0,
    projects.findIndex((p) => p.slug === startSlug),
  );
  const [index, setIndex] = useState(startIndex);
  const [syncedSlug, setSyncedSlug] = useState(activeSlug);
  const cfg = SIZES[size];

  // Adjust state during render in response to a prop change (React's
  // recommended alternative to syncing props in an effect).
  if (activeSlug !== syncedSlug) {
    setSyncedSlug(activeSlug);
    if (activeSlug) {
      const i = projects.findIndex((p) => p.slug === activeSlug);
      if (i >= 0) setIndex(i);
    }
  }

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % n) + n) % n);
    },
    [n],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [n]);

  useEffect(() => {
    onIndexChange?.(projects[index].slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) {
      setIndex((i) => ((i - 1) % n + n) % n);
    } else if (deltaX < -SWIPE_THRESHOLD) {
      setIndex((i) => (i + 1) % n);
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full">
      <div
        className={`relative mx-auto touch-pan-y ${cfg.containerHeight} ${cfg.maxWidth}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, i) => {
          const offset = ((i - index) % n + n) % n;
          let transform = "";
          let zIndex = 1;
          let opacity = "1";
          let scale = 1;
          if (offset === 0) {
            transform = `translate(-50%, ${cfg.frontY}px) rotate(0deg)`;
            zIndex = 10;
          } else if (offset === 1) {
            transform = `translate(calc(-50% + ${cfg.sideOffset}px), ${cfg.sideY}px) rotate(8deg)`;
            zIndex = 5;
            scale = 0.88;
          } else if (offset === n - 1) {
            transform = `translate(calc(-50% - ${cfg.sideOffset}px), ${cfg.sideY}px) rotate(-8deg)`;
            zIndex = 5;
            scale = 0.88;
          } else {
            transform = `translate(-50%, ${cfg.farY}px) rotate(0deg)`;
            zIndex = 1;
            scale = 0.7;
            opacity = "0";
          }
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`absolute left-1/2 top-0 rounded-sm border-4 p-3 pb-7 shadow-2xl transition-transform duration-500 ease-out ${cfg.cardWidth} ${CARD_STYLE.card}`}
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
                    sizes={cfg.imageSizes}
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]}`}
                  />
                )}
              </div>
              <h3 className={`font-display mt-3 uppercase tracking-tight text-black ${cfg.titleSize}`}>
                {project.cardTitle ?? project.title}
              </h3>
              <p className={`mt-0.5 font-bold uppercase tracking-wide ${cfg.roleSize} ${CARD_STYLE.role}`}>
                {project.role}
              </p>
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full bg-hero-ink font-bold uppercase tracking-wide text-[#f7ecc4] ${cfg.buttonClass}`}>
                View Role →
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {projects.map((_, i) => (
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
  );
}
