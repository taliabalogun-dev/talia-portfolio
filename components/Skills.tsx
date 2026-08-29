import { skills } from "@/content/site";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-brown">
              {group.category}
            </h3>
            <ul className="mt-3 flex flex-col gap-2 text-base text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
