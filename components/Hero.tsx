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

          It fades to hero/0, not to transparent: `transparent` is rgba(0,0,0,0),
          so fading to it interpolates through black and lays a grey smear
          across the middle of the photograph. */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero from-30% via-hero/70 via-48% to-hero/0 to-70%" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-4 sm:min-h-[85vh] sm:px-6">
        <div className="max-w-md sm:max-w-xl">
          {/* The badge inverts: on a pale ground a pale chip disappears. */}
          <p className="text-xs font-bold uppercase tracking-[0.16em]">
            <span className="rounded-sm bg-hero-ink px-2 py-1 text-hero">{site.role}</span>
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
