// Placeholder content — replace bracketed values with your own.
// Sections below map 1:1 to the components in /components.

export const site = {
  name: "Talia Balogun",
  role: "[Your Role — e.g. Product Designer, Full-Stack Engineer]",
  tagline:
    "[One sentence on what you do and who you help. Keep it concrete, not generic.]",
  email: "you@example.com",
  location: "[City, Country]",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "",
  },
  resumeUrl: "/resume/resume.pdf",
};

export const about = {
  heading: "About",
  paragraphs: [
    "[Two to three sentences on your background — what you've built, what problems you're drawn to, and the kind of work you're looking for next.]",
    "[Optional second paragraph — a specific detail that makes you memorable: a niche you specialize in, a project you're proud of, or how you work.]",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "[Project One]",
    description:
      "[One or two sentences: the problem, your approach, and the measurable result. Numbers help — e.g. 'cut load time by 40%'.]",
    tags: ["Next.js", "TypeScript"],
    link: "",
    repo: "",
  },
  {
    title: "[Project Two]",
    description:
      "[Same structure — problem, approach, result. Keep it scannable.]",
    tags: ["React", "Node.js"],
    link: "",
    repo: "",
  },
  {
    title: "[Project Three]",
    description:
      "[Same structure — problem, approach, result. Keep it scannable.]",
    tags: ["Design", "Figma"],
    link: "",
    repo: "",
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  { category: "Frameworks", items: ["Next.js", "React", "Node.js"] },
  { category: "Tools", items: ["Git", "Figma", "Docker"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "[Job Title]",
    company: "[Company Name]",
    period: "[2023 — Present]",
    summary: "[One line on scope and a key outcome.]",
  },
  {
    role: "[Previous Job Title]",
    company: "[Previous Company]",
    period: "[2021 — 2023]",
    summary: "[One line on scope and a key outcome.]",
  },
];
