import Image from "next/image";
import Link from "next/link";
import { about, site } from "@/content/site";

export default function AboutBanner() {
  return (
    <section id="about" className="border-b border-ink/10 bg-beige px-6 py-8">
      <div className="mx-auto flex max-w-5xl gap-6">
        <div className="relative h-14 w-14 shrink-0 self-start overflow-hidden rounded-full border-2 border-accent lg:-mb-8 lg:h-auto lg:w-80 lg:self-stretch lg:overflow-visible lg:rounded-none lg:border-0">
          <Image
            src="/images/about-collage-cutout-diamond.png"
            alt=""
            fill
            className="scale-[1.45] origin-[35%_25%] object-cover lg:scale-100 lg:origin-center lg:object-contain lg:object-bottom"
            sizes="(min-width: 1024px) 320px, 56px"
          />
        </div>
        <div>
          <h2 className="font-display text-5xl uppercase tracking-tight text-ink sm:text-6xl">
            {site.name}
          </h2>
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
      </div>
    </section>
  );
}
