import { site } from "@/content/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-4 max-w-xl text-brown/70">
        Open to creative strategy and marketing roles — reach out to talk campaigns, collaborations, or opportunities.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-brown px-6 py-3 text-sm font-medium text-beige transition-opacity hover:opacity-85"
        >
          {site.email}
        </a>
        {site.social.github && (
          <a
            href={site.social.github}
            className="rounded-full border border-brown/30 px-6 py-3 text-sm font-medium text-brown transition-colors hover:border-brown/60"
          >
            GitHub
          </a>
        )}
        {site.social.linkedin && (
          <a
            href={site.social.linkedin}
            className="rounded-full border border-brown/30 px-6 py-3 text-sm font-medium text-brown transition-colors hover:border-brown/60"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
