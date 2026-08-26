export const site = {
  name: "Talia Balogun",
  role: "Creative Strategist — Paid Social & Creator Content",
  tagline:
    "I turn audience insight and cultural research into creator-facing campaigns and hooks for animation, entertainment, fashion, and live-event brands across the US, UK, and Nigeria.",
  email: "talia.balogun@gmail.com",
  location: "Los Angeles, CA",
  social: {
    github: "",
    linkedin: "https://linkedin.com/in/talia-balogun-326690228",
    twitter: "",
  },
  resumeUrl: "/resume/resume.pdf",
};

export const about = {
  heading: "About",
  paragraphs: [
    "Creative marketer specialising in storytelling, art direction, and content production. I develop campaigns across film, fashion, and culture — combining design, photography, motion, and community-led strategy to turn audience insight into creator-facing briefs, hooks, and concepts.",
    "UK citizen with hands-on marketing experience across US and UK teams — from Disney's Iwájú at Kugali Media to Live Nation's MUTHA Festival and campaigns reaching 2M+ across UCLA's institutional accounts. Based in Los Angeles, currently open to creative strategy and marketing roles.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "‘This Is MUTHA’ Festival Campaign — Live Nation",
    description:
      "Directed and produced the official promo film and live concert projection visuals for MUTHA Festival, a Brooklyn event celebrating queer, Black, and femme artists. Managed asset delivery and brand consistency across digital and live touchpoints under tight deadlines.",
    tags: ["Campaign Direction", "Brand Partnerships", "Video"],
    link: "https://animationbytalia.univer.se/home-lwdxt-pvnfu/home-lwdxt-xbjny-rsala",
  },
  {
    title: "Kugali Media × Disney's Iwájú — Pitch & Market Research",
    description:
      "Built marketing materials and pitch presentations for a global animation studio, researching audiences, competitors, and cultural trends across 50+ scripts and comics weekly to inform producer-facing recommendations.",
    tags: ["Creative Strategy", "Audience Research", "Pitch Development"],
    link: "https://animationbytalia.univer.se/home-lwdxt-pvnfu/home-lwdxt-xbjny",
  },
  {
    title: "‘What Does LA Mean To You’ Zine Campaign — Refine LA",
    description:
      "Directed and shot the promo video and cover shoot for a zine campaign, plus event graphics and coverage for sustainability-focused fashion shows sponsored by Poshmark and Evewear.",
    tags: ["Content Direction", "Photography", "Video"],
    link: "https://animationbytalia.univer.se/home-lwdxt-pvnfu/home-lwdxt-xbjny-qinaz",
  },
  {
    title: "Multi-Platform Campus Campaigns — UCLA Student Affairs",
    description:
      "Produced social-first campaigns across Instagram, TikTok, Facebook, and X for UCLA's primary institutional accounts, reaching an audience of 2M+ and serving a student body of 45,000+.",
    tags: ["TikTok", "Instagram", "Social Strategy"],
    link: "https://animationbytalia.univer.se/home-lwdxt-pvnfu/home-lwdxt-xbjny-ihfbh",
  },
  {
    title: "Nike × Icona Club × Demonia Fashion Show — FAST@UCLA",
    description:
      "Coordinated brand partnerships and vendor logistics supporting a sold-out fashion drop through student-led promotion, and ran production meetings for the organization's annual fashion show.",
    tags: ["Brand Partnerships", "Event Marketing", "Creative Direction"],
    link: "https://animationbytalia.univer.se/home-lwdxt-pvnfu/home-lwdxt-xbjny-otvmg",
  },
  {
    title: "CTRL 4C — Animated Short Film Marketing Campaign",
    description:
      "Led concept-to-launch marketing for an original animated short, building the campaign, key art, and promotional strategy alongside the film itself.",
    tags: ["Campaign Development", "Film Marketing", "Concept to Launch"],
    link: "https://animationbytalia.univer.se/home-lwdxt/home-lwdxt-xbjny-vjeiz",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Creative Strategy",
    items: [
      "Creator Briefs & Concept Development",
      "Hooks, Angles & Script Writing",
      "Audience & Cultural Insight",
      "Cross-Market Brand Voice Adaptation",
    ],
  },
  {
    category: "Content & Social",
    items: [
      "TikTok, Instagram & Multi-Platform Content",
      "Social-First Campaign Ideation",
      "Visual & Video Direction",
    ],
  },
  {
    category: "Tools",
    items: [
      "Adobe Creative Suite",
      "Canva",
      "Social Media Publishing & Analytics",
      "Notion & Asana",
    ],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Editorial Director & Creative Director",
    company: "FAST@UCLA",
    period: "Oct 2024 — June 2026",
    summary:
      "Directed creative concepts and briefs across print, digital, and live events for a student-led fashion organization, presenting directly to brand partners including Nike, Icona Club, and Demonia.",
  },
  {
    role: "Creative Director",
    company: "Live Nation",
    period: "Mar 2025 — June 2025",
    summary:
      "Directed the promo film and campaign for MUTHA Festival in Brooklyn, adapting brand voice across digital and live formats under tight turnarounds.",
  },
  {
    role: "Marketing Coordinator",
    company: "Kugali Media",
    period: "Sept 2024 — June 2025",
    summary:
      "Developed creative concepts and pitch materials for a global animation studio, including work on Disney's Iwájú, and researched audiences and market trends weekly.",
  },
  {
    role: "Marketing Coordinator",
    company: "UCLA Student Affairs",
    period: "June 2023 — Sept 2025",
    summary:
      "Created social-first campaigns across Instagram, TikTok, Facebook, and X reaching an audience of 2M+ for UCLA's institutional accounts.",
  },
  {
    role: "Marketing Coordinator",
    company: "Refine LA",
    period: "Sept 2023 — June 2025",
    summary:
      "Directed editorial shoots and creative concepts as creative lead, aligning visual output with brand strategy across live events and digital promotion.",
  },
];
