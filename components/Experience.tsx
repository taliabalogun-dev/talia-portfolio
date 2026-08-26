import { experience } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-6 flex flex-col gap-6">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="flex flex-col gap-1 border-l-2 border-black/10 pl-4 dark:border-white/10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {item.role} · {item.company}
              </h3>
              <span className="text-sm text-black/50 dark:text-white/50">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70">
              {item.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
