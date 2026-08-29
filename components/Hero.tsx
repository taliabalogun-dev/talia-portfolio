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
      <div className="absolute inset-0 bg-gradient-to-r from-beige/90 via-beige/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-4 sm:min-h-[85vh] sm:px-6">
        <div className="max-w-md sm:max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-ink">
            <span className="rounded-sm bg-accent px-2 py-1">{site.role}</span>
          </p>
          <h1 className="font-display mt-4 text-balance text-5xl uppercase leading-[0.88] tracking-tighter text-ink sm:text-7xl">
            {site.name}
          </h1>
          <p className="font-display mt-4 text-balance text-xl uppercase leading-tight tracking-tight text-ink sm:text-2xl">
            {site.heroStatement}
          </p>
          <p className="mt-4 text-lg text-brown">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-beige transition-opacity hover:opacity-85"
            >
              View my work
            </a>
            <a
              href={site.resumeUrl}
              download
              className="rounded-full border-2 border-ink px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-beige"
            >
              Download résumé
            </a>
          </div>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-semibold text-brown underline underline-offset-4 hover:text-ink"
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
