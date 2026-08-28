export const site = {
  name: "Talia Balogun",
  role: "Creative Marketing & Campaign Strategy",
  tagline:
    "I direct creative strategy and campaign output for entertainment, fashion, and institutional brands.",
  email: "talia.balogun@gmail.com",
  location: "Los Angeles, CA",
  social: {
    github: "",
    linkedin: "https://linkedin.com/in/talia-balogun-326690228",
    twitter: "",
  },
  resumeUrl: "/resume/resume.pdf",
  aboutImage: "/images/about-profile.jpg",
};

export const about = {
  heading: "About",
  paragraphs: [
    "Creative marketing and campaign strategist with 3+ years directing creative decisions inside entertainment, fashion, and institutional campaigns across the US, UK, and Nigeria — from audience research and pitch positioning through hands-on creative direction of photo, video, and campaign output.",
    "Direct experience spans pitch strategy work on Disney's Iwájú, brand partnership management with Nike and other major partners, and directing full creative teams across print, photography, and video for live campaigns. Based in Los Angeles, working toward moving from campaign-level creative direction into entertainment marketing strategy and development.",
  ],
};

export const bio = {
  heading: "More About Me",
  paragraphs: [
    "I'm a creative marketing and campaign strategist based in Los Angeles, working at the intersection of entertainment, fashion, and culture. My path started in Lagos — early production and PR roles at Golden Effects Pictures, Bap Production, and alongside fashion designer Lisa Folawiyo — before secondary school at Cheltenham Ladies' College in the UK and a B.A. in Film & Television at UCLA, with an Animation concentration and a minor in Entrepreneurship.",
    "That mix shows up in how I work: I move comfortably between big-picture positioning and on-the-ground execution. At Kugali Media, the studio behind Disney's Iwájú, I supported pitch strategy and awards-season promotion across the slate. At FAST@UCLA I directed all creative media output — print, photography, video — for a student-run fashion brand with real paid partnerships, including Nike, Icona Club, and Demonia. Live Nation brought me on to direct the promotional film and live visuals for Mutha Festival in Brooklyn, and at UCLA Student Affairs I ran multi-platform campaign strategy for an audience of 2M+.",
    "Alongside client work, I'm writing, directing, and producing CTRL 4C, an original animated short set in a Lagos salon, with a festival strategy targeting Sundance, GLAS Animation, and AFRIFF. I also founded Co Curate, an independent creative studio built around a managed curator roster, with an initial go-to-market focus on entertainment and animation-adjacent marketing.",
    "Long term, I'm working toward moving from campaign-level creative direction into entertainment marketing strategy and development — staying close to the creative work while shaping the positioning and business decisions around it.",
  ],
};

export type Campaign = {
  name: string;
  description: string;
  image?: string;
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
  /** Hero image for the carousel slide and subpage header. */
  image?: string;
  /** Pinterest-style campaign cards shown on the subpage. */
  campaigns?: Campaign[];
};

export const projects: Project[] = [
  {
    slug: "kugali-iwaju",
    navLabel: "Kugali Media",
    title: "Marketing & Strategy Intern — Kugali Media",
    description:
      "Supported marketing and pitch strategy for a global animation studio behind Disney's Iwájú, building producer-facing pitch decks and leading positioning research across the studio's slate.",
    extendedDescription:
      "Reviewed 50+ scripts and comics weekly and managed marketing operations through HubSpot, providing research-backed notes that informed brand positioning across the release pipeline.",
    tags: ["Pitch Strategy", "Audience Research", "Brand Positioning"],
    role: "Marketing & Strategy Intern",
    period: "Sept 2024 — June 2025",
    location: "UK / Hybrid",
    featured: true,
    image: "/images/campaigns/kugali-iwaju-poster.jpg",
    campaigns: [
      {
        name: "Iwájú, Jollof Wars & Razorman — Pitch Strategy",
        description:
          "Built producer-facing pitch decks and led streaming and studio partnership research for Jollof Wars (Next Narrative Africa Fund) and Razorman (in development with Newmation and Alta Global Media), alongside pitch strategy work on Disney's Iwájú.",
        image: "/images/campaigns/kugali-iwaju-poster.jpg",
      },
      {
        name: "Emmys & NAACP Image Awards Support",
        description:
          "Supported festival and awards-season promotion and on-the-ground coverage for Disney's Iwájú, including the Emmys and NAACP Image Awards, gathering industry intelligence to inform brand positioning.",
        image: "/images/campaigns/kugali-emmys.jpg",
      },
    ],
  },
  {
    slug: "live-nation-mutha",
    navLabel: "Live Nation",
    title: "Creative Director (Contract) — Live Nation",
    description:
      "Commissioned to direct and produce the official promotional film and live concert projection content for Mutha Festival, translating brand vision and cultural positioning into a cohesive visual direction.",
    extendedDescription:
      "Served as the central point of coordination between creative, production, and promotional teams from planning through same-day execution, managing asset delivery and approvals across tight event deadlines.",
    tags: ["Campaign Direction", "Brand Partnerships", "Video"],
    role: "Creative Director (Contract)",
    period: "March 2025 — June 2025",
    location: "NYC / Hybrid",
    featured: true,
    image: "/images/campaigns/live-nation-concert-photo.jpg",
    campaigns: [
      {
        name: "‘This Is MUTHA’ — Promo Film",
        description:
          "Directed and produced the official promotional film for Mutha Festival, translating brand vision and cultural positioning into a cohesive visual direction across digital and live touchpoints.",
        image: "/images/campaigns/live-nation-promo.jpg",
      },
      {
        name: "‘This Is MUTHA’ — Live Concert Visuals",
        description:
          "Produced live concert projection content, maintaining brand and creative consistency across the festival's digital and live touchpoints through final delivery.",
        image: "/images/campaigns/live-nation-visuals-process.jpg",
      },
    ],
  },
  {
    slug: "fast-ucla-fashion-show",
    navLabel: "FAST@UCLA",
    title: "Director of Creative Media — FAST@UCLA",
    description:
      "Directed all creative media production — print, photography, video, and media releases — across editorial, digital, and live-event initiatives for FAST, a UCLA student-run fashion and culture brand.",
    extendedDescription:
      "Oversaw a full team of photographers, videographers, and designers on every shoot and release, setting creative direction and final sign-off on all visual output for FAST's annual fashion show and publication.",
    tags: ["Brand Partnerships", "Event Marketing", "Creative Direction"],
    role: "Director of Creative Media",
    period: "Oct 2024 — June 2026",
    location: "Los Angeles, CA",
    featured: true,
    image: "/images/campaigns/fast-silver-screen.jpg",
    campaigns: [
      {
        name: "Nike × Icona Club × Demonia Fashion Drop",
        description:
          "Served as key creative point of contact for brand partners including Nike, Icona Club, and Demonia, developing creative briefs and directing partner-facing photo and video content.",
        image: "/images/campaigns/fast-iconaclub-car.jpg",
      },
      {
        name: "Annual Fashion Show Production",
        description:
          "Co-led planning and creative execution of FAST's annual fashion show, overseeing all on-site photo and video coverage from concept through final delivery.",
        image: "/images/campaigns/fast-runway-2.jpg",
      },
    ],
  },
  {
    slug: "ucla-campus-campaigns",
    navLabel: "UCLA Student Affairs",
    title: "Multi-Platform Campus Campaigns — UCLA Student Affairs",
    description:
      "Directed creative and campaign strategy for multi-platform institutional content across Instagram, TikTok, Facebook, and X, translating campus priorities into brand-consistent direction for an audience of 2M+.",
    extendedDescription:
      "Built and maintained campaign trackers and performance reporting, using engagement data to inform creative decisions, and coordinated cross-departmental campaigns for large-scale institutional events including commencement.",
    tags: ["TikTok", "Instagram", "Social Strategy"],
    role: "Media Marketing Coordinator",
    period: "June 2023 — Sept 2025",
    location: "Los Angeles, CA",
    featured: false,
    image: "/images/campaigns/ucla-pinoy-halohalo.jpg",
    campaigns: [
      {
        name: "Commencement & Campus Event Coverage",
        description:
          "Coordinated cross-departmental campaigns and stakeholder communication for large-scale institutional events, including commencement, capturing and editing on-site content in real time.",
      },
      {
        name: "@uclahousing Social Campaign",
        description:
          "Produced social-first content and campaign concepts for UCLA Housing's Instagram and TikTok presence.",
        image: "/images/campaigns/ucla-pinoy-flyer.jpg",
      },
    ],
  },
  {
    slug: "refine-la-zine",
    navLabel: "Refine LA",
    title: "Multi-Platform Product Campaigns — Refine LA",
    description:
      "Directed editorial cover shoots and magazine promotion videos as creative lead for a sustainability-focused fashion and circular retail organization, managing concept through execution.",
    extendedDescription:
      "Coordinated multi-platform marketing campaigns and event promotion — including initiatives sponsored by Poshmark and Eyewear — and defined the visual language keeping creative output consistent across live events, digital promotion, and editorial materials.",
    tags: ["Content Direction", "Photography", "Video"],
    role: "Marketing Coordinator, Creative & Strategy",
    period: "Sept 2023 — June 2025",
    location: "Los Angeles, CA",
    featured: false,
    image: "/images/campaigns/refine-amphitheater.jpg",
    campaigns: [
      {
        name: "‘What Does LA Mean To You’ Zine",
        description:
          "Directed and shot the promo video and cover shoot for a zine campaign exploring identity and place.",
        image: "/images/campaigns/refine-zine-promo-still.jpg",
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
    title: "Writer, Producer & Director — CTRL 4C",
    description:
      "Writing, directing, and producing an original animated short — a sci-fi comedy set in a Lagos salon — following a character who accidentally time-travels through a hair-tech invention into a frozen '90s sitcom world.",
    extendedDescription:
      "Ran a multi-stage social campaign repositioning my account from freelance illustration to an animation-focused platform — process videos, character reveals, cast spotlights, teasers, and screening promotion — while managing the film's production timeline, budget, and festival strategy targeting Sundance, GLAS Animation, Manchester Animation Festival, Carmel International, Film Africa London, and AFRIFF. Result: +400 followers, 20K+ views, 2 industry interview invitations, and AFRIFF networking recognition.",
    tags: ["Festival Strategy", "Key Art & Campaign", "Production Direction"],
    role: "Writer, Producer & Director",
    period: "2025 — Present",
    location: "Los Angeles, CA",
    featured: true,
    image: "/images/campaigns/ctrl4c-crown.jpg",
    campaigns: [
      {
        name: "Key Art & Campaign Concept",
        description:
          "Designed the film's key art and campaign concept boards, establishing the visual identity used across every touchpoint.",
        image: "/images/campaigns/ctrl4c-crown.jpg",
      },
      {
        name: "Character Design — Teni & Imole",
        description:
          "Designed the film's lead characters, developing the visual language later reused across casting and world-building posts.",
        image: "/images/campaigns/ctrl4c-characters.jpg",
      },
      {
        name: "Casting Call",
        description:
          "Recruited seven voice actors through a public casting call post, sparking early community participation.",
        image: "/images/campaigns/ctrl4c-casting-call.jpg",
      },
      {
        name: "Character Lineup Reveal",
        description:
          "Revealed the film's character lineup to build world-building anticipation ahead of release.",
        image: "/images/campaigns/ctrl4c-character-lineup.jpg",
      },
      {
        name: "Intro / Teaser",
        description:
          "Released an introductory teaser to build brand recognition ahead of the premiere.",
        image: "/images/campaigns/ctrl4c-intro-teaser.jpg",
      },
      {
        name: "Keyframe Transitions",
        description:
          "Shared keyframe transition clips to showcase animation quality and process craft.",
        image: "/images/campaigns/ctrl4c-keyframe.jpg",
      },
      {
        name: "Pre-Screening Teaser Slideshow",
        description:
          "A 13-slide carousel introducing characters and visual motifs without spoiling the story — 2.4K+ views with strong audience retention.",
        image: "/images/campaigns/ctrl4c-prescreening-slideshow.jpg",
      },
      {
        name: "Cast & Talent Highlight",
        description:
          "Spotlighted the voice cast and crew to expand the film's story beyond the screen, driving 100+ post interactions.",
        image: "/images/campaigns/ctrl4c-cast-talent.jpg",
      },
      {
        name: "Video Content for Engagement",
        description:
          "Turned behind-the-scenes animation process work into short-form video, generating 20K+ cumulative views across three high-performing posts.",
        image: "/images/campaigns/ctrl4c-video-content.jpg",
      },
      {
        name: "Screening Post",
        description:
          "Converted online engagement into in-person attendance for the UCLA TFT premiere — 9.5K+ impressions and 3.1K+ accounts reached.",
        image: "/images/campaigns/ctrl4c-screening-post.jpg",
      },
      {
        name: "Premiere Screening",
        description:
          "The film's premiere screening, converting a year of campaign work into a full house.",
        image: "/images/campaigns/ctrl4c-screening.jpg",
      },
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
    role: "Director of Creative Media",
    company: "FAST@UCLA",
    period: "Oct 2024 — June 2026",
    summary:
      "Directed all creative media production — print, photography, video, and media releases — across editorial, digital, and live-event initiatives, serving as key creative contact for brand partners including Nike, Icona Club, and Demonia.",
  },
  {
    role: "Creative Director (Contract)",
    company: "Live Nation",
    period: "Mar 2025 — June 2025",
    summary:
      "Directed creative strategy and produced the official promotional film and live concert projection content for Mutha Festival, translating brand vision into a cohesive visual direction across digital and live touchpoints.",
  },
  {
    role: "Marketing & Strategy Intern",
    company: "Kugali Media",
    period: "Sept 2024 — June 2025",
    summary:
      "Supported marketing and pitch strategy on Disney's Iwájú, built producer-facing pitch decks for Jollof Wars and Razorman, and reviewed 50+ scripts weekly to inform brand positioning.",
  },
  {
    role: "Media Marketing Coordinator",
    company: "UCLA Student Affairs",
    period: "June 2023 — Sept 2025",
    summary:
      "Directed creative and campaign strategy for multi-platform institutional content across Instagram, TikTok, Facebook, and X, translating campus priorities into brand-consistent direction for an audience of 2M+.",
  },
];

export const additionalExperience: ExperienceItem[] = [
  {
    role: "Marketing Coordinator, Creative & Strategy",
    company: "Refine LA",
    period: "Sept 2023 — June 2025",
    summary:
      "Directed editorial cover shoots and magazine promotion videos as creative lead for a sustainability-focused fashion and circular retail organization.",
  },
  {
    role: "Marketing Strategy Intern",
    company: "FCMB Group",
    period: "Apr 2026 — June 2026",
    summary:
      "Led campaign research and a three-part growth strategy for Flexx, FCMB's youth banking product, spanning gamification, campus creator funding, and a phased KPI roadmap.",
  },
  {
    role: "Founder",
    company: "Co Curate",
    period: "July 2026 — Present",
    summary:
      "Building an independent creative studio with a managed curator roster, an IP origination model, and an initial go-to-market focus on entertainment and animation-adjacent marketing.",
  },
  {
    role: "Writer, Producer & Director",
    company: "CTRL 4C",
    period: "2025 — Present",
    summary:
      "Writing, directing, and producing an original animated short end-to-end, including a festival distribution and positioning strategy targeting Sundance and GLAS Animation.",
  },
  {
    role: "Marketing Director",
    company: "Black Film and Theatre Initiative",
    period: "Sept 2025 — June 2026",
    summary:
      "Directed promotional strategy and creative materials for the organization's festivals, workshops, and short-film fundraising initiatives.",
  },
  {
    role: "Writers Room Coordinator",
    company: "Bap Production",
    period: "Jun — Sept 2023",
    summary:
      "Reviewed scripts and treatments supporting story development for Netflix-commissioned and in-house film/TV projects, including sequel development for Bling Lagosians 2.",
  },
  {
    role: "Production Assistant",
    company: "Golden Effects Pictures Ltd",
    period: "Apr 2020 — May 2021",
    summary:
      "Provided administrative and production support during pre-production at a Lagos-based production company.",
  },
  {
    role: "PR Event Coordinator",
    company: "Jewel by Lisa",
    period: "Oct — Nov 2020",
    summary:
      "Supported fashion designer Lisa Folawiyo ahead of Lagos and London Fashion Week, managing models and runway shows.",
  },
];
