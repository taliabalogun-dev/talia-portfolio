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
      {/* Pale yellow over the photograph rather than near-black.
          Explicit stops: solid across the column the words occupy, then gone
          by two-thirds. A gradient still at 85% in the middle of the frame
          washes the subject out and turns the picture into a texture.

          It fades to white/0, not hero/0 or transparent: fading to hero/0
          interpolates the yellow toward black as alpha drops, laying a grey
          smear across the photograph. Fading to white/0 interpolates toward
          white instead, so the fade brightens rather than muddies. */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero from-30% via-hero/70 via-48% to-white/0 to-70%" />
      {/* Eases the hard cut from the pale hero into the dark section below. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-beige sm:h-40" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-4 sm:min-h-[85vh] sm:px-6">
        <div className="max-w-md sm:max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em]">
            <span className="rounded-sm bg-paper px-2 py-1 text-hero-ink">{site.role}</span>
          </p>
          <h1 className="font-display mt-4 text-balance text-5xl uppercase leading-[0.88] tracking-tighter text-hero-ink sm:text-7xl">
            {site.name}
          </h1>
          <p className="font-display mt-4 text-balance text-xl uppercase leading-tight tracking-tight text-hero-ink sm:text-2xl">
            {site.heroStatement}
          </p>
          <p className="mt-4 text-xl text-hero-muted">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-hero-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-hero transition-opacity hover:opacity-85"
            >
              View my work
            </a>
            <a
              href={site.resumeUrl}
              download
              className="rounded-full border-2 border-hero-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-hero-ink transition-colors hover:bg-hero-ink hover:text-hero"
            >
              Download résumé
            </a>
          </div>
          <Link
            href="/about"
            className="mt-4 inline-block text-base font-semibold text-hero-muted underline underline-offset-4 hover:text-hero-ink"
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
