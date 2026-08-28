import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import { bio, site } from "@/content/site";

export const metadata = {
  title: `${bio.heading} — ${site.name}`,
  description: bio.paragraphs[0],
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/#top"
          className="text-sm text-brown/60 transition-colors hover:text-brown"
        >
          ← Back to home
        </Link>

        <div className="mt-8 flex flex-col-reverse gap-10 sm:flex-row sm:items-start sm:gap-12">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {bio.heading}
            </h1>
            <div className="mt-6 flex flex-col gap-4 text-brown/70">
              {bio.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-4 sm:w-72">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src={site.aboutImage}
                alt={site.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about-emmys.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
