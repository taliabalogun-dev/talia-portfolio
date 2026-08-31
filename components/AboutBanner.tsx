import Link from "next/link";
import ProfilePhoto from "@/components/ProfilePhoto";
import { about, site } from "@/content/site";

export default function AboutBanner() {
  return (
    <section id="about" className="border-b border-ink/10 bg-beige px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4">
          {site.aboutImage && <ProfilePhoto src={site.aboutImage} />}
          <h2 className="font-display text-5xl uppercase tracking-tight text-ink sm:text-6xl">
            {site.name}
          </h2>
        </div>
        <span className="mt-3 inline-block -rotate-2">
          <span className="inline-block rounded-sm bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-hero-ink shadow-lg">
            {site.role}
          </span>
        </span>
        <div className="mt-4 flex max-w-3xl flex-col gap-2 text-base text-muted">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <Link
          href="/about"
          className="font-hand -rotate-1 mt-3 inline-block text-2xl text-accent hover:text-ink"
        >
          More about me →
        </Link>
      </div>
    </section>
  );
}
