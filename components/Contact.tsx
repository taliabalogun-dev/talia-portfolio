import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-4 max-w-xl text-black/70 dark:text-white/70">
        Open to creative strategy and marketing roles — reach out to talk campaigns, collaborations, or opportunities.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
        >
          {site.email}
        </a>
        {site.social.github && (
          <a
            href={site.social.github}
            className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-colors hover:border-black/40 dark:border-white/20 dark:hover:border-white/40"
          >
            GitHub
          </a>
        )}
        {site.social.linkedin && (
          <a
            href={site.social.linkedin}
            className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition-colors hover:border-black/40 dark:border-white/20 dark:hover:border-white/40"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
