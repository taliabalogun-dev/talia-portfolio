import Image from "next/image";
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 sm:min-h-[85vh]">
        <div className="max-w-md sm:max-w-lg">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">
            {site.role}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-white/90">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-80"
            >
              View my work
            </a>
            <a
              href={site.resumeUrl}
              download
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/80"
            >
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
