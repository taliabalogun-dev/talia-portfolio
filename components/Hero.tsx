import { site } from "@/content/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-24 sm:py-32"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-black/50 dark:text-white/50">
        {site.role}
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {site.name}
      </h1>
      <p className="max-w-2xl text-lg text-black/70 dark:text-white/70">
        {site.tagline}
      </p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
        >
          View my work
        </a>
        <a
          href={site.resumeUrl}
          download
          className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-colors hover:border-black/40 dark:border-white/20 dark:hover:border-white/40"
        >
          Download résumé
        </a>
      </div>
    </section>
  );
}
