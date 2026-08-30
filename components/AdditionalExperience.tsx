import { additionalExperience } from "@/content/site";

export default function AdditionalExperience() {
  return (
    <section id="additional-experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-semibold tracking-tight">
        Additional Experience
      </h2>
      <div className="mt-6 flex flex-col gap-4">
        {additionalExperience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="flex flex-col gap-0.5 border-l-2 border-brown/30 pl-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-base font-medium">
                {item.role} · {item.company}
              </p>
              <span className="text-sm text-muted">{item.period}</span>
            </div>
            <p className="text-sm text-muted">{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
