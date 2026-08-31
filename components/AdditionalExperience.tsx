import Link from "next/link";
import { additionalExperience } from "@/content/site";

export default function AdditionalExperience() {
  return (
    <section id="additional-experience" className="bg-beige px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">
          Additional Experience
        </h2>
        <div className="mt-6 rounded-2xl border border-accent/15 bg-teal-darker p-6">
          <div className="flex flex-col divide-y divide-ink/10">
            {additionalExperience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="flex flex-col gap-0.5 py-4 first:pt-0 last:pb-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="text-base font-medium text-brown">
                    {item.role} · {item.company}
                  </p>
                  <span className="text-sm text-muted">{item.period}</span>
                </div>
                <p className="text-sm text-muted">{item.summary}</p>
                {item.slug && (
                  <Link
                    href={`/projects/${item.slug}`}
                    className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-teal-deep px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-ink transition-opacity hover:opacity-80"
                  >
                    View Role →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
