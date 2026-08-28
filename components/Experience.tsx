import { additionalExperience, experience } from "@/content/site";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-6 flex flex-col gap-6">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="flex flex-col gap-1 border-l-2 border-brown/15 pl-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {item.role} · {item.company}
              </h3>
              <span className="text-sm text-brown/50">{item.period}</span>
            </div>
            <p className="text-sm text-brown/70">{item.summary}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-12 text-sm font-medium uppercase tracking-wide text-brown/50">
        Additional Experience
      </h3>
      <div className="mt-6 flex flex-col gap-4">
        {additionalExperience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="flex flex-col gap-0.5 border-l-2 border-brown/15 pl-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-sm font-medium">
                {item.role} · {item.company}
              </p>
              <span className="text-xs text-brown/50">{item.period}</span>
            </div>
            <p className="text-xs text-brown/60">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
