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

export type MediaItem = {
  date: string;
  caption: string;
  credit?: string;
};

export type Campaign = {
  name: string;
  description: string;
};

export type Project = {
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  extendedDescription?: string;
  tags: string[];
  role: string;
  period: string;
  location: string;
  /** Whether this appears as a large slide in the rotating showcase. Non-featured projects still appear in the nav bar, linking straight to their subpage. */
  featured: boolean;
  /** Pinterest-style campaign cards shown on the subpage. */
  campaigns?: Campaign[];
  /** Legacy flat media gallery — only CTRL 4C still uses this. */
  media?: MediaItem[];
};

export const projects: Project[] = [
  {
    slug: "kugali-iwaju",
    navLabel: "Kugali Media",
    title: "Marketing & Story Intern — Kugali Media",
    description:
      "Developed creative concepts and pitch materials for a global animation studio, researching audiences, competitors, and cultural trends across 50+ scripts and comics weekly.",
    extendedDescription:
      "Tracked campaign performance for team and partner reporting, and coordinated asset requests, approvals, and publishing timelines with internal teams and external partners.",
    tags: ["Creative Strategy", "Audience Research", "Pitch Development"],
    role: "Marketing & Story Intern",
    period: "June 2024 — June 2025",
    location: "UK / Hybrid",
    featured: true,
    campaigns: [
      {
        name: "Disney's Iwájú — Pitch & Concept Development",
        description:
          "Contributed to creative concept and pitch development for Disney's Iwájú, translating research into producer-facing recommendations.",
      },
      {
        name: "Emmys & NAACP Image Awards Support",
        description:
          "Supported marketing initiatives and event coordination around the Emmys and NAACP Image Awards.",
      },
    ],
  },
  {
    slug: "live-nation-mutha",
    navLabel: "Live Nation",
    title: "Contracted Creative Director — Live Nation",
    description:
      "Directed creative content and live event visuals for Live Nation as a contracted creative marketing director, managing brand consistency across digital and live touchpoints under tight deadlines.",
    extendedDescription:
      "Served as the central point of coordination between creative, production, and promotional teams from planning through same-day execution, tracking feedback and revisions through final delivery.",
    tags: ["Campaign Direction", "Brand Partnerships", "Video"],
    role: "Contracted Creative Marketing Director",
    period: "March 2025 — June 2025",
    location: "NYC / Hybrid",
    featured: true,
    campaigns: [
      {
        name: "‘This Is MUTHA’ — Promo Film",
        description:
          "Directed and produced the official promo film for MUTHA Festival, a Brooklyn event celebrating queer, Black, and femme artists.",
      },
      {
        name: "‘This Is MUTHA’ — Live Concert Visuals",
        description:
          "Produced live concert projection visuals, maintaining brand and creative consistency across the festival's digital and live touchpoints.",
      },
    ],
  },
  {
    slug: "fast-ucla-fashion-show",
    navLabel: "FAST@UCLA",
    title: "Editorial Director & Creative Director — FAST@UCLA",
    description:
      "Directed creative concepts and briefs across print, digital, and live events for a student-led fashion organization, presenting directly to brand partners.",
    extendedDescription:
      "Acted as project manager across editorial, digital, and live-event workstreams, coordinating with photographers, designers, writers, and media contributors to keep teams aligned on approvals.",
    tags: ["Brand Partnerships", "Event Marketing", "Creative Direction"],
    role: "Editorial Director & Creative Director",
    period: "Oct 2024 — June 2026",
    location: "Los Angeles, CA",
    featured: true,
    campaigns: [
      {
        name: "Nike × Icona Club × Demonia Fashion Drop",
        description:
          "Coordinated brand partnerships and vendor logistics supporting a sold-out fashion drop through student-led promotion.",
      },
      {
        name: "Annual Fashion Show Production",
        description:
          "Ran production meetings — scheduling, agendas, and follow-ups — for FAST's annual fashion show.",
      },
    ],
  },
  {
    slug: "ucla-campus-campaigns",
    navLabel: "UCLA Student Affairs",
    title: "Multi-Platform Campus Campaigns — UCLA Student Affairs",
    description:
      "Produced social-first campaigns across Instagram, TikTok, Facebook, and X for UCLA's primary institutional accounts, reaching an audience of 2M+ and serving a student body of 45,000+.",
    extendedDescription:
      "Collaborated with campus partners across Student Affairs — including the Center for Accessible Education, the Dean's Office, Housing & Hospitality, and UCLA Athletics.",
    tags: ["TikTok", "Instagram", "Social Strategy"],
    role: "Marketing & Media Coordinator",
    period: "June 2023 — Sept 2025",
    location: "Los Angeles, CA",
    featured: false,
    campaigns: [
      {
        name: "Commencement & Campus Event Coverage",
        description:
          "Covered large-scale campus events — including commencements and university-wide programs — attended by tens of thousands.",
      },
      {
        name: "@uclahousing Social Campaign",
        description:
          "Produced social-first content and campaign concepts for UCLA Housing's Instagram and TikTok presence.",
      },
    ],
  },
  {
    slug: "refine-la-zine",
    navLabel: "Refine LA",
    title: "Multi-Platform Product Campaigns — Refine LA",
    description:
      "Coordinated campaign promotion and content across events for a sustainability-focused fashion and circular retail organization, including initiatives sponsored by Poshmark and Evewear.",
    extendedDescription:
      "Coordinated on-site coverage for fashion shows, flea markets, and community activations — handling photography, video capture, and post-event content rollout to extend each event's reach.",
    tags: ["Content Direction", "Photography", "Video"],
    role: "Marketing Coordinator",
    period: "Sept 2023 — June 2025",
    location: "Los Angeles, CA",
    featured: false,
    campaigns: [
      {
        name: "‘What Does LA Mean To You’ Zine",
        description:
          "Directed and shot the promo video and cover shoot for a zine campaign exploring identity and place.",
      },
      {
        name: "‘Decomposition’ Fashion Show",
        description:
          "Edited and animated an abstract promotional video for the ‘Decomposition’ fashion show.",
      },
      {
        name: "‘Lost and Found’ Fashion Show",
        description:
          "Designed and shot event graphics and media coverage for the ‘Lost and Found’ fashion show.",
      },
    ],
  },
  {
    slug: "ctrl-4c-campaign",
    navLabel: "CTRL 4C",
    title: "CTRL 4C — Animated Short Film Marketing Campaign",
    description:
      "Led concept-to-launch marketing for an original animated short, building the campaign, key art, and promotional strategy alongside the film itself.",
    extendedDescription:
      "The film follows a rushed Lagos woman who tests a revolutionary hair-styling machine and is accidentally launched through time to the origin of her hairstyle.",
    tags: ["Campaign Development", "Film Marketing", "Concept to Launch"],
    role: "Creator & Campaign Lead",
    period: "2026",
    location: "Los Angeles, CA",
    featured: true,
    media: [
      { date: "2026", caption: "Key art & campaign concept boards" },
      { date: "2026", caption: "Character design — Teni & Imole" },
    ],
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
