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
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/25 to-transparent" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 sm:min-h-[85vh]">
        <div className="max-w-md sm:max-w-lg">
          <p className="text-sm font-medium uppercase tracking-widest text-black/60">
            {site.role}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-black/75">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              View my work
            </a>
            <a
              href={site.resumeUrl}
              download
              className="rounded-full border border-black/30 px-6 py-3 text-sm font-medium text-black transition-colors hover:border-black/60"
            >
              Download résumé
            </a>
          </div>
          <Link
            href="/about"
            className="mt-4 inline-block text-sm font-medium text-black/70 underline underline-offset-4 hover:text-black"
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
