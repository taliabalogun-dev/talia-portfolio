import { site } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-purple-500/40" />
      <div className="absolute inset-0 bg-black/[6%]" />

      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="max-w-md sm:max-w-lg">
          <p className="text-sm font-medium uppercase tracking-widest text-white/70">
            {site.role}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-white/80">{site.tagline}</p>
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
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/70"
            >
              Download résumé
            </a>
          </div>
        </div>
        <span className="absolute bottom-0 right-6 text-xs uppercase tracking-widest text-white/40">
          [Hero image placeholder]
        </span>
      </div>
    </section>
  );
}
