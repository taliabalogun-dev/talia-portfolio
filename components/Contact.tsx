import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-display text-4xl uppercase tracking-tight sm:text-5xl">Contact</h2>
      <p className="mt-4 max-w-xl text-lg text-muted">
        Open to creative strategy and marketing roles - reach out to talk campaigns, collaborations, or opportunities.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-85"
        >
          {site.email}
        </a>
        {site.social.github && (
          <a
            href={site.social.github}
            className="rounded-full border-2 border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-ink"
          >
            GitHub
          </a>
        )}
        {site.social.linkedin && (
          <a
            href={site.social.linkedin}
            className="rounded-full border-2 border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-ink"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
