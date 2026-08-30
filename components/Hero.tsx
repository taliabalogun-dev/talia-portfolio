import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[70vh] overflow-hidden sm:min-h-[85vh]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-top"
      />
      {/* Black over the photograph, same fade logic as before: fades to its
          own 0-alpha rather than white/transparent, so the hue never drifts
          as it thins out. */}
      <div className="absolute inset-0 bg-gradient-to-r from-beige from-30% via-beige/70 via-48% to-beige/0 to-70%" />
      {/* Eases the hard cut into the dark section below. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-beige sm:h-40" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-4 sm:min-h-[85vh] sm:px-6">
        <div className="max-w-md sm:max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em]">
            <span className="rounded-sm bg-paper px-2 py-1 text-hero-ink">{site.role}</span>
          </p>
          <h1 className="font-display mt-4 text-balance text-5xl uppercase leading-[0.88] tracking-tighter text-ink sm:text-7xl">
            {site.name}
          </h1>
          <p className="font-display mt-4 text-balance text-xl uppercase leading-tight tracking-tight text-ink sm:text-2xl">
            {site.heroStatement}
          </p>
          <p className="mt-4 text-xl text-muted">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent-ink transition-opacity hover:opacity-85"
            >
              View my work
            </a>
            <a
              href={site.resumeUrl}
              download
              className="rounded-full border-2 border-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-accent-ink"
            >
              Download résumé
            </a>
          </div>
          <Link
            href="/about"
            className="mt-4 inline-block text-base font-semibold text-muted underline underline-offset-4 hover:text-ink"
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
