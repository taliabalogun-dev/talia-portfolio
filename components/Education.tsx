import { education } from "@/content/site";

export default function Education() {
  return (
    <section className="bg-beige pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="-rotate-[0.4deg]">
          <div className="relative rounded-md bg-teal-deep shadow-2xl">
            <span className="absolute -top-6 left-8 -rotate-3">
              <span className="font-hand inline-block rounded-sm bg-accent px-6 py-2.5 text-3xl text-hero-ink shadow-lg">
                education
              </span>
            </span>
            <div className="px-8 py-12 sm:px-10 sm:py-14">
              <h3 className="font-display text-2xl uppercase tracking-wide text-ink">
                Education
              </h3>
              <div className="mt-1 flex flex-col sm:flex-row sm:gap-10">
                {education.map((item) => (
                  <div
                    key={item.school}
                    className="flex-1 border-b border-ink/10 py-4 first:pt-4 last:border-b-0 sm:border-b-0 sm:border-l-2 sm:border-ink/10 sm:py-4 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
                  >
                    <span className="text-base font-bold text-ink">{item.school}</span>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-muted/70">
                      {item.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
