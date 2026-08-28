import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
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
      <main className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/#projects"
          className="text-sm text-brown/60 transition-colors hover:text-brown"
        >
          ← Back to projects
        </Link>

        <div className="relative mt-6 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border border-brown/15 bg-beige-card">
          {project.image ? (
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 896px, 100vw"
              priority
            />
          ) : (
            <span className="text-sm uppercase tracking-widest text-brown/40">
              [Project image placeholder]
            </span>
          )}
        </div>

        <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-brown/60">
          <span>{project.role}</span>
          <span>{project.period}</span>
          <span>{project.location}</span>
        </div>

        <p className="mt-6 max-w-2xl text-brown/70">{project.description}</p>
        {project.extendedDescription && (
          <p className="mt-4 max-w-2xl text-brown/70">
            {project.extendedDescription}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brown/10 px-3 py-1 text-xs text-brown/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.campaigns && (
          <>
            <h2 className="mt-12 text-xl font-semibold tracking-tight">
              Campaigns
            </h2>
            <div className="mt-6 columns-1 gap-6 sm:columns-2">
              {project.campaigns.map((campaign, i) => (
                <div
                  key={campaign.name}
                  className="mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-brown/15"
                >
                  <div
                    className={`relative flex items-center justify-center bg-beige-card ${MASONRY_ASPECTS[i % MASONRY_ASPECTS.length]}`}
                  >
                    {campaign.image ? (
                      <Image
                        src={campaign.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 448px, 100vw"
                      />
                    ) : (
                      <span className="text-xs uppercase tracking-widest text-brown/40">
                        [Image placeholder]
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{campaign.name}</h3>
                    <p className="mt-1 text-sm text-brown/70">
                      {campaign.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {project.media && (
          <>
            <h2 className="mt-12 text-xl font-semibold tracking-tight">
              Featured creative media
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {project.media.map((item) => (
                <div key={item.caption} className="flex flex-col gap-2">
                  <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-brown/15 bg-beige-card">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 448px, 100vw"
                      />
                    ) : (
                      <span className="text-xs uppercase tracking-widest text-brown/40">
                        [Image placeholder]
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-brown/70">
                    <span className="text-brown/50">{item.date} — </span>
                    {item.caption}
                  </p>
                  {item.credit && (
                    <p className="text-xs text-brown/50">{item.credit}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
