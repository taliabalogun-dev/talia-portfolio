import Image from "next/image";
import Link from "next/link";
import { about, site } from "@/content/site";

export default function AboutBanner() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-ink/10 bg-beige px-6 py-8">
      {/* Mobile-only left-edge fade background. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[55%] opacity-40 lg:hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, #000 5%, transparent 60%)",
          maskImage: "linear-gradient(to right, #000 5%, transparent 60%)",
        }}
      >
        <Image
          src="/images/about-header-mobile.png"
          alt=""
          fill
          className="object-cover object-left"
          sizes="55vw"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl items-start gap-6">
        <div className="relative hidden shrink-0 lg:-mb-8 lg:block">
          <Image
            src="/images/about-header-desktop.png"
            alt=""
            width={320}
            height={367}
            className="h-auto w-80"
          />
        </div>
        <div className="pl-[42%] lg:pl-0">
          <h2 className="font-display text-5xl uppercase tracking-tight text-ink sm:text-6xl">
            {site.name}
          </h2>
          <span className="mt-3 inline-block -rotate-2">
            <span className="inline-block rounded-sm bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-hero-ink shadow-lg">
              {site.role}
            </span>
          </span>
          <div className="mt-4 flex max-w-3xl flex-col gap-2 text-base text-muted lg:text-sm">
            <p className="lg:hidden">{about.shortParagraph}</p>
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="hidden lg:block">
                {paragraph}
              </p>
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
