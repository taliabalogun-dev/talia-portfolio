import { about } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-paper-ink">
          {about.heading}
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-lg text-paper-ink/75">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
