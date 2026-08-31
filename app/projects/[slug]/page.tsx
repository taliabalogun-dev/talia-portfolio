import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import SlideGallery from "@/components/SlideGallery";
import FilmstripGallery from "@/components/FilmstripGallery";
import EnlargeableImage from "@/components/EnlargeableImage";
import RoleNav from "@/components/RoleNav";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const MASONRY_ASPECTS = [
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-video",
];

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav />
      <div className="bg-beige">
        <main className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/#projects"
            className="text-base text-muted transition-colors hover:text-ink"
          >
            ← Back to projects
          </Link>

          <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
            <div className="flex-1">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {project.title}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brown/15 px-3 py-1 text-sm text-brown"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-base text-muted">
                <span>{project.role}</span>
                <span>{project.period}</span>
                <span>{project.location}</span>
              </div>

              {project.focus && (
                <div className="mt-6">
                  <h2 className="text-sm font-medium uppercase tracking-wide text-muted">
                    {project.focus.heading}
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.focus.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-brown/15 px-3 py-1 text-sm text-brown"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <p className="mt-6 text-lg text-muted">{project.description}</p>
              {project.extendedDescription && (
                <p className="mt-4 text-lg text-muted">
                  {project.extendedDescription}
                </p>
              )}
            </div>

            {project.image && (
              <div
                className={`relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-2xl border border-brown/15 sm:w-80 ${project.imageFit === "contain" ? "bg-beige" : ""}`}
              >
                <EnlargeableImage
                  src={project.image}
                  className={
                    project.imageFit === "contain"
                      ? "object-contain p-6"
                      : project.imagePosition === "top"
                        ? "object-cover object-top"
                        : "object-cover"
                  }
                  sizes="(min-width: 640px) 320px, 100vw"
                  priority
                />
              </div>
            )}
          </div>
        </main>
      </div>

      <div className="bg-ink text-beige">
        <div className="mx-auto max-w-5xl px-6 py-16">
          {project.slides ? (
            <div className="flex flex-col gap-12">
              {project.slides.map((slide) => (
                <section
                  key={slide.title}
                  className="border-t border-beige/15 pt-10 first:border-t-0 first:pt-0"
                >
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="mt-1 text-base text-beige/70">{slide.subtitle}</p>
                  )}
                  {(() => {
                    const hasImages = !!slide.images && slide.images.length > 0;
                    const hasSections = slide.sections.length > 0;
                    const gallery = hasImages && (
                      slide.layout === "slideshow" ? (
                        <SlideGallery images={slide.images!} />
                      ) : slide.layout === "filmstrip" ? (
                        <FilmstripGallery images={slide.images!} />
                      ) : (
                      <div
                        className={
                          slide.images!.length > 1 ||
                          slide.images![0]?.aspect !== "video"
                            ? "grid grid-cols-2 items-start gap-3 sm:grid-cols-3"
                            : "grid grid-cols-1"
                        }
                      >
                        {slide.images!.map((img) => (
                          <figure
                            key={img.src}
                            className="overflow-hidden rounded-xl border border-beige/15"
                          >
                            <div
                              className={`relative w-full ${img.aspect === "video" ? "aspect-video" : "aspect-[9/16]"}`}
                            >
                              {img.kind === "video" ? (
                                <video
                                  src={img.src}
                                  poster={img.poster}
                                  controls
                                  playsInline
                                  autoPlay={img.autoplay}
                                  muted={img.autoplay}
                                  loop={img.autoplay}
                                  preload={img.autoplay ? "auto" : "metadata"}
                                  className="absolute inset-0 h-full w-full object-cover"
                                />
                              ) : (
                                <EnlargeableImage
                                  src={img.src}
                                  className={img.position === "top" ? "object-cover object-top" : "object-cover"}
                                  sizes="(min-width: 640px) 340px, 45vw"
                                />
                              )}
                            </div>
                            {img.caption && (
                              <figcaption className="p-2 text-sm text-beige/70">
                                {img.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                      )
                    );
                    const sectionsBlock = hasSections && (
                      <div className="flex flex-col gap-5">
                        {slide.sections.map((section) => (
                          <div key={section.heading}>
                            <h3 className="text-sm font-medium uppercase tracking-wide text-beige/60">
                              {section.heading}
                            </h3>
                            {section.style === "pills" ? (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {section.items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full bg-beige/10 px-3 py-1 text-sm text-beige/90"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <div className="mt-2 flex flex-col gap-2 text-base text-beige/90">
                                {section.items.map((item) => (
                                  <p key={item}>{item}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    );

                    if (hasImages && hasSections) {
                      return (
                        <div className="mt-6 grid gap-8 sm:grid-cols-2">
                          {gallery}
                          {sectionsBlock}
                        </div>
                      );
                    }
                    return <div className="mt-6">{gallery || sectionsBlock}</div>;
                  })()}
                </section>
              ))}
            </div>
          ) : (
            project.campaigns && (
              <>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Campaigns
                </h2>
                <div className="mt-6 columns-1 gap-6 sm:columns-2">
                  {project.campaigns.map((campaign, i) => (
                    <div
                      key={campaign.name}
                      className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-beige/15"
                    >
                      <div
                        className={`relative flex items-center justify-center bg-beige/10 ${MASONRY_ASPECTS[i % MASONRY_ASPECTS.length]}`}
                      >
                        {campaign.image ? (
                          <EnlargeableImage
                            src={campaign.image}
                            className="object-cover"
                            sizes="(min-width: 640px) 448px, 100vw"
                          />
                        ) : (
                          <span className="text-xs uppercase tracking-widest text-beige/40">
                            [Image placeholder]
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{campaign.name}</h3>
                        <p className="mt-1 text-base text-beige/90">
                          {campaign.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )
          )}

          {(project.viewFullProject || project.extraLinks) && (
            <div className="mt-12 flex flex-wrap items-center gap-4">
              {project.viewFullProject &&
                (project.viewFullProject.href ? (
                  <a
                    href={project.viewFullProject.href}
                    className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-85"
                  >
                    View full project
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-block cursor-not-allowed rounded-full bg-beige/15 px-6 py-3 text-sm font-medium text-beige/50"
                  >
                    View full project
                  </span>
                ))}
              {project.extraLinks?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-block rounded-full border-2 border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="mt-16 border-t border-beige/15 pt-10">
            <h2 className="text-xl font-semibold tracking-tight">
              More Roles
            </h2>
            <div className="mt-6">
              <RoleNav activeSlug={project.slug} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
