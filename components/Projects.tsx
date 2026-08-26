import { projects } from "@/content/site";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col gap-3 rounded-2xl border border-black/10 p-6 dark:border-white/10"
          >
            <h3 className="font-medium">{project.title}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/60 dark:bg-white/10 dark:text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <div className="pt-1 text-sm font-medium">
                <a
                  href={project.link}
                  className="underline underline-offset-4 hover:opacity-70"
                >
                  View project
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
