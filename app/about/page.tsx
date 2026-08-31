import Link from "next/link";
import Nav from "@/components/Nav";
import EnlargeableImage from "@/components/EnlargeableImage";
import { bio, site } from "@/content/site";

export const metadata = {
  title: `${bio.heading} — ${site.name}`,
  description: bio.paragraphs[0],
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <div className="bg-sky">
        <main className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/#top"
            className="text-base text-navy/70 transition-colors hover:text-navy"
          >
            ← Back to home
          </Link>

          <div className="mt-10 -rotate-[0.4deg]">
            <div className="relative rounded-md bg-sky-deep shadow-2xl">
              <span className="absolute -top-6 left-8 -rotate-3">
                <span className="font-hand inline-block rounded-sm bg-accent px-6 py-2.5 text-3xl text-hero-ink shadow-lg">
                  more about me
                </span>
              </span>
              <svg
                className="pointer-events-none absolute -top-10 right-8 hidden w-12 opacity-90 sm:block"
                viewBox="0 0 40 90"
                fill="none"
              >
                <path
                  d="M20 5 C32 5 32 20 32 26 L32 68 C32 78 24 84 16 84 C8 84 2 78 2 68 L2 30 C2 24 6 20 11 20 C16 20 19 24 19 30 L19 62"
                  stroke="#ffffff"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col-reverse gap-8 px-8 py-12 sm:flex-row sm:items-start sm:gap-10 sm:px-10 sm:py-14">
                <div className="flex-1">
                  <h1 className="font-display text-3xl uppercase tracking-tight text-navy sm:text-4xl">
                    {bio.heading}
                  </h1>
                  <div className="mt-6 flex flex-col gap-4 text-lg text-navy/80">
                    {bio.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="flex w-full shrink-0 flex-col gap-4 sm:w-72">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border-4 border-sky-darker/50">
                    <EnlargeableImage
                      src={site.aboutImage}
                      alt={site.name}
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
