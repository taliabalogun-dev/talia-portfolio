import Nav from "@/components/Nav";
import RecommendationLetterButton from "@/components/RecommendationLetterButton";
import { projects, site } from "@/content/site";

export const metadata = {
  title: `Letters of Recommendation - ${site.name}`,
};

const lettersProjects = projects.filter((p) => p.recommendationLetters);

export default function LettersPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-5xl uppercase tracking-tight text-ink sm:text-6xl">
          Letters of Recommendation
        </h1>
        <p className="mt-3 max-w-xl text-lg text-muted">
          Recommendation letters from supervisors and mentors across my roles.
        </p>
        <div className="mt-10 flex flex-col gap-6">
          {lettersProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl border border-accent/15 bg-teal-darker p-6"
            >
              <h2 className="font-display text-xl uppercase tracking-tight text-ink">
                {project.navLabel}
              </h2>
              <p className="mt-1 text-sm text-muted">{project.role}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.recommendationLetters!.map((letter) => (
                  <RecommendationLetterButton
                    key={letter.label}
                    label={letter.label}
                    href={letter.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
