import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import AdditionalExperience from "@/components/AdditionalExperience";
import { projects } from "@/content/site";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <section className="relative overflow-hidden bg-teal py-16 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(245,218,110,0.22) 1.4px, transparent 1.6px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <h1 className="font-display text-balance text-6xl uppercase leading-[0.9] tracking-tight text-ink sm:text-8xl">
            My Work
          </h1>
          <span className="font-hand mt-4 inline-block max-w-xl -rotate-1 rounded-sm bg-accent px-6 py-4 text-2xl text-hero-ink shadow-lg sm:text-3xl">
            8 roles, 16 experiences, 1 creative storytelling throughline.
          </span>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => {
              const cardSrc = project.cardImage ?? project.image;
              const useContain = !project.cardImage && project.imageFit === "contain";
              return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block rounded-sm border-4 border-white bg-white p-3 pb-6 shadow-2xl transition-transform hover:-translate-y-1"
              >
                <div
                  className={`relative aspect-[4/5] overflow-hidden ${
                    useContain ? "bg-beige" : ""
                  }`}
                >
                  {cardSrc && (
                    <Image
                      src={cardSrc}
                      alt=""
                      fill
                      className={
                        useContain
                          ? "object-contain p-6"
                          : project.imagePosition === "top"
                            ? "object-cover object-top"
                            : "object-cover"
                      }
                      sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 90vw"
                    />
                  )}
                </div>
                <h3 className="font-display mt-3 text-xl uppercase leading-tight tracking-tight text-black">
                  {project.cardTitle ?? project.title}
                </h3>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-[#8a7015]">
                  {project.role}
                </p>
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-hero-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#f7ecc4]">
                  View Role →
                </span>
              </Link>
              );
            })}
          </div>

          <blockquote className="mx-auto mt-16 max-w-xl border-l-4 border-accent/60 pl-5">
            <p className="text-lg italic text-ink">
              &ldquo;I&apos;d gladly hire her again if you don&apos;t beat me to it.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-ink/70">
              — Ricky Horne Jr., UCLA Student Affairs
            </footer>
          </blockquote>
        </div>
      </section>
      <AdditionalExperience />
    </>
  );
}
