import { about } from "@/content/site";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-6 py-16"
    >
      <h2 className="text-2xl font-semibold tracking-tight">
        {about.heading}
      </h2>
      <div className="mt-6 flex flex-col gap-4 text-black/70 dark:text-white/70">
        {about.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
