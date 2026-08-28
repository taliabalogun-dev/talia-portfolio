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

export type SlideImage = {
  src: string;
  caption?: string;
};

export type SlideSection = {
  heading: string;
  items: string[];
  /** "pills" for short badge-style items (roles, results); "list" for full-sentence items. */
  style: "pills" | "list";
};

export type Slide = {
  title: string;
  subtitle?: string;
  images?: SlideImage[];
  sections: SlideSection[];
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
  /** Slide-by-slide case study breakdown shown instead of the campaigns grid. */
  slides?: Slide[];
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
    image: "/images/campaigns/fast-slide-cover.jpg",
    slides: [
      {
        title: "Iconaclub",
        subtitle:
          "Associate Creative Director (via FAST) for brand drop — June 2025",
        images: [{ src: "/images/campaigns/fast-slide-cover.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: ["Producer", "Editor", "Campaign Strategy"],
          },
        ],
      },
      {
        title: "Iconaclub Streetwear Collection Drop",
        images: [{ src: "/images/campaigns/fast-slide-overview.jpg" }],
        sections: [
          {
            heading: "Objective",
            style: "list",
            items: [
              "Build awareness within UCLA's student community, generate pre-launch interest, and convert engagement into sales.",
            ],
          },
          {
            heading: "Process",
            style: "list",
            items: [
              "Proposed a strategic student collaboration. Developed the campaign's visual direction and coordinated production across photography and short-form video, alongside a student-led social and promotional-code strategy.",
            ],
          },
          {
            heading: "Outcome",
            style: "list",
            items: [
              "Delivered a cohesive suite of campaign photography, social assets, promotional video, and behind-the-scenes content across Iconaclub and FAST channels.",
            ],
          },
          {
            heading: "Result",
            style: "pills",
            items: [
              "100% collection sell-through",
              "80% of sales via student promo codes",
            ],
          },
        ],
      },
      {
        title: "The Post",
        images: [{ src: "/images/campaigns/fast-slide-post.jpg" }],
        sections: [
          {
            heading: "Concept",
            style: "list",
            items: [
              "Created an editorial visual language combining streetwear, motorsport, and youth culture, using the car to frame and reinforce the collection.",
            ],
          },
          {
            heading: "Execution",
            style: "list",
            items: [
              "Directed posing, composition, and product visibility, then selected and edited the final campaign imagery.",
            ],
          },
          {
            heading: "Performance",
            style: "pills",
            items: ["1.6K+ likes", "141 shares", "25 comments"],
          },
        ],
      },
      {
        title: "Posting / Marketing Strategy",
        subtitle: "Marketing → Sales",
        sections: [
          {
            heading: "Strategy",
            style: "list",
            items: [
              "1. Build awareness — launched collaborative Iconaclub × FAST photography and video content to reach both brand and student audiences.",
              "2. Activate students — mobilised FAST's student network through ambassador promotion and trackable student discount codes.",
              "3. Drive conversion — connected social engagement directly to purchase through promotional codes and drop-focused calls to action.",
            ],
          },
          {
            heading: "Result",
            style: "pills",
            items: [
              "80% of sales via student promo codes",
              "100% collection sell-through — sold out",
            ],
          },
        ],
      },
      {
        title: "Teaser / Promo Video",
        subtitle: "Creative Director",
        images: [{ src: "/images/campaigns/fast-slide-teaser.jpg" }],
        sections: [
          {
            heading: "Concept",
            style: "list",
            items: [
              "Created a short-form teaser that translated the campaign's automotive, streetwear-led visual identity into motion and built anticipation around the collection drop.",
            ],
          },
          {
            heading: "Execution",
            style: "pills",
            items: [
              "Directed talent blocking and movement",
              "Developed shot progression around the hero car",
              "Produced and coordinated the shoot",
              "Edited short-form vertical content",
              "Optimised pacing and framing for social",
            ],
          },
          {
            heading: "Performance",
            style: "pills",
            items: ["3.1K+ likes", "130+ shares"],
          },
        ],
      },
      {
        title: "Creative Direction & Production",
        images: [{ src: "/images/campaigns/fast-slide-roles.jpg" }],
        sections: [
          {
            heading: "Creative Direction",
            style: "pills",
            items: [
              "Campaign concept + visual research",
              "Creative treatment / moodboard",
              "Stakeholder presentation deck",
              "Styling direction",
              "Talent posing + blocking",
              "Photography direction",
              "Image selection + editing",
              "Brand consistency",
            ],
          },
          {
            heading: "Production",
            style: "pills",
            items: [
              "Stakeholder communication",
              "Shoot planning + scheduling",
              "Budget distribution",
              "Location scouting",
              "Location permissions",
              "Equipment + prop coordination",
              "Talent + crew casting",
              "Production logistics",
              "On-set coordination",
            ],
          },
        ],
      },
      {
        title: "My Edited Selects",
        images: [
          { src: "/images/campaigns/fast-slide-edited-1.jpg" },
          { src: "/images/campaigns/fast-slide-edited-2.jpg" },
          { src: "/images/campaigns/fast-slide-edited-3.jpg" },
        ],
        sections: [],
      },
      {
        title: "Annual Fashion Show Production",
        sections: [
          {
            heading: "Overview",
            style: "list",
            items: [
              "Co-led planning and creative execution of FAST's annual fashion show, overseeing all on-site photo and video coverage from concept through final delivery.",
            ],
          },
        ],
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
    image: "/images/campaigns/refine-slide-promo.jpg",
    slides: [
      {
        title: "Refine LA",
        subtitle:
          "Project Lead & Creative Director for multi-channel zine launch campaign — March 2025",
        images: [{ src: "/images/campaigns/refine-slide-cover.jpg" }],
        sections: [
          {
            heading: "Campaign Sections",
            style: "pills",
            items: ["Promo Film", "Cover Campaign", "Community Interviews"],
          },
        ],
      },
      {
        title: "Refine LA Zine — “What Does LA Mean To You?”",
        images: [{ src: "/images/campaigns/refine-slide-overview.jpg" }],
        sections: [
          {
            heading: "Product",
            style: "list",
            items: [
              "A fashion and culture zine exploring Los Angeles through its communities.",
            ],
          },
          {
            heading: "Objective",
            style: "list",
            items: [
              "Build awareness within target communities (POC & Gen Z), generate pre-launch interest, and convert engagement into sales.",
            ],
          },
          {
            heading: "Strategy",
            style: "list",
            items: [
              "Led an integrated launch campaign spanning video, photography, community interviews, social content, and on-campus activation.",
            ],
          },
          {
            heading: "Result",
            style: "pills",
            items: [
              "170 pre-orders",
              "80 launch-day purchases",
              "110 attendees",
              "80% of stock sold",
            ],
          },
        ],
      },
      {
        title: "Promo Film",
        images: [{ src: "/images/campaigns/refine-slide-promo.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: [
              "Creative Direction",
              "Production",
              "Finance",
              "Co-Directing",
              "Cinematography",
              "Casting",
              "Editing & Colour",
            ],
          },
          {
            heading: "Concept",
            style: "list",
            items: [
              "Narrative launch film following three characters on their journey through LA before connecting on the metro — discovering Refine LA.",
            ],
          },
          {
            heading: "KPI Tracking",
            style: "pills",
            items: ["6K+ views", "+50% vs. account average", "+10% like performance"],
          },
        ],
      },
      {
        title: "Zine Cover Shoot",
        images: [{ src: "/images/campaigns/refine-slide-coveshoot.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: [
              "Creative Director",
              "Photographer",
              "Production",
              "Graphic Editor",
            ],
          },
          {
            heading: "Approach",
            style: "list",
            items: [
              "Developed the visual identity and produced the editorial cover shoot from concept through final assets.",
            ],
          },
          {
            heading: "Campaign Output",
            style: "pills",
            items: [
              "Front + back cover",
              "Editorial photography",
              "Social launch assets",
            ],
          },
          {
            heading: "KPI Tracking",
            style: "pills",
            items: ["2K+ cumulative likes", "3K profile views"],
          },
        ],
      },
      {
        title: "Cover Shoot — Edited Selects",
        images: [{ src: "/images/campaigns/refine-slide-edited.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: ["Creative Director", "Photographer", "Editor", "Producer"],
          },
          {
            heading: "KPI Tracking",
            style: "pills",
            items: [
              "2K+ cumulative likes",
              "3K+ profile visits",
              "~30% traffic from Explore page",
            ],
          },
        ],
      },
      {
        title: "Community Interviews",
        images: [{ src: "/images/campaigns/refine-slide-interviews.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: ["Creative Director", "Production", "Graphic Editing"],
          },
          {
            heading: "Approach",
            style: "list",
            items: [
              "Interviewed LA communities around the question “What does LA mean to you?”, turning their responses into social content and printed campaign material.",
              "Combined digital storytelling with QR-enabled campus promotion to move audiences from conversation → content → purchase.",
            ],
          },
          {
            heading: "KPI Tracking",
            style: "pills",
            items: [
              "20K+ interview views",
              "2K+ engagement",
              "140 QR scans",
              "110 launch attendees",
            ],
          },
        ],
      },
      {
        title: "Posting / Marketing Strategy",
        subtitle: "Marketing → Sales",
        sections: [
          {
            heading: "Strategy",
            style: "list",
            items: [
              "1. Build a story — introduced Refine LA through narrative video and editorial photography, establishing a distinct visual identity around LA culture.",
              "2. Activate community — turned “What does LA mean to you?” into community-led interviews, social content, and QR-enabled campus promotion.",
              "3. Convert interest — connected digital content to pre-orders and launch-day purchasing through direct calls-to-action and physical activation.",
            ],
          },
          {
            heading: "Result",
            style: "pills",
            items: [
              "20K+ interview views",
              "140 QR scans",
              "170 pre-orders",
              "110 launch attendees",
              "80% of stock sold",
            ],
          },
        ],
      },
      {
        title: "‘Decomposition’ Fashion Show",
        sections: [
          {
            heading: "Overview",
            style: "list",
            items: [
              "Edited and animated an abstract promotional video for the ‘Decomposition’ fashion show.",
            ],
          },
        ],
      },
      {
        title: "‘Lost and Found’ Fashion Show",
        sections: [
          {
            heading: "Overview",
            style: "list",
            items: [
              "Designed and shot event graphics and media coverage for the ‘Lost and Found’ fashion show.",
            ],
          },
        ],
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
    image: "/images/campaigns/ctrl4c-slide-cover.jpg",
    slides: [
      {
        title: "Animated IP Launch Campaign",
        images: [{ src: "/images/campaigns/ctrl4c-slide-cover.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: [
              "Creative Director",
              "Campaign Strategist",
              "Social Media Manager",
              "Designer",
            ],
          },
        ],
      },
      {
        title: "Ctrl 4C Film Release Campaign",
        images: [{ src: "/images/campaigns/ctrl4c-slide-profile.jpg" }],
        sections: [
          {
            heading: "Objective",
            style: "list",
            items: [
              "Reposition my account from freelance illustration to an animation-focused platform while building an audience for future films.",
            ],
          },
          {
            heading: "Process",
            style: "list",
            items: [
              "Developed a multi-stage campaign using process videos, character reveals, cast spotlights, teasers, and screening promotion.",
            ],
          },
          {
            heading: "Outcome",
            style: "list",
            items: [
              "Expanded audience reach while establishing a recognizable identity for the film and my animation brand.",
            ],
          },
          {
            heading: "Result",
            style: "pills",
            items: [
              "+400 followers",
              "20K+ views",
              "2 interview invitations",
              "AFRIFF recognition",
            ],
          },
        ],
      },
      {
        title: "Video Content for Engagement",
        subtitle: "The process creates curiosity about the product.",
        images: [
          { src: "/images/campaigns/ctrl4c-slide-video-1.jpg" },
          { src: "/images/campaigns/ctrl4c-slide-video-2.jpg" },
          { src: "/images/campaigns/ctrl4c-slide-video-3.jpg" },
        ],
        sections: [
          {
            heading: "Premise",
            style: "list",
            items: [
              "Behind-the-scenes videos transformed the animation process into short-form content that encouraged curiosity and repeat engagement.",
            ],
          },
          {
            heading: "Responsibilities",
            style: "pills",
            items: [
              "Creative direction",
              "Caption strategy",
              "Content production",
              "Video editing",
              "Publishing schedule",
            ],
          },
          {
            heading: "KPI Tracking / Results",
            style: "pills",
            items: [
              "20K+ cumulative video views",
              "3 high-performing process videos",
              "Consistent audience growth",
              "Increased profile discovery",
            ],
          },
        ],
      },
      {
        title: "Cast & Talent Highlight",
        subtitle: "The process creates curiosity about the product.",
        images: [{ src: "/images/campaigns/ctrl4c-slide-cast.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: [
              "Designer & illustrator",
              "Campaign strategist",
              "Content creator",
              "Copywriter",
            ],
          },
          {
            heading: "Strategy",
            style: "list",
            items: [
              "Turn character design, voice acting, and production roles into shareable content that expands the film's narrative beyond the screen.",
            ],
          },
          {
            heading: "KPI Tracking / Results",
            style: "pills",
            items: [
              "100+ post interactions",
              "Strong comment engagement",
              "Higher content shares and saves",
              "Expanded community participation",
            ],
          },
        ],
      },
      {
        title: "Screening Post",
        subtitle: "Converting online engagement into in-person attendance.",
        images: [
          { src: "/images/campaigns/ctrl4c-slide-flyer.jpg" },
          { src: "/images/campaigns/ctrl4c-slide-analytics.jpg" },
        ],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: [
              "Graphic designer x illustrator",
              "Caption & concept ideation",
              "Campaign strategist",
            ],
          },
          {
            heading: "Responsibilities",
            style: "pills",
            items: [
              "Promotional design",
              "Strategic partnerships with UCLA TFT",
              "Cross-posting with lifestyle account",
              "Event-based content scheduling",
            ],
          },
          {
            heading: "KPI Tracking / Results",
            style: "pills",
            items: [
              "9.5K+ impressions",
              "3.1K+ accounts reached",
              "52 profile visits",
              "40%+ discovery through feed recommendations",
            ],
          },
        ],
      },
      {
        title: "Pre-Screening Teaser Slideshow",
        subtitle:
          "Character reveals for generated anticipation without revealing key story moments.",
        images: [{ src: "/images/campaigns/ctrl4c-slide-slideshow.jpg" }],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: [
              "Video creator",
              "Post creator",
              "Captioning & concept ideation",
              "Campaign strategy",
            ],
          },
          {
            heading: "Responsibilities",
            style: "list",
            items: [
              "Introduce characters, themes, and visual motifs while preserving the narrative experience.",
            ],
          },
          {
            heading: "KPI Tracking / Results",
            style: "pills",
            items: [
              "2.4K+ views",
              "Strong audience retention",
              "Increased comment activity",
              "Improved engagement with future posts",
            ],
          },
        ],
      },
      {
        title: "Other Posts",
        images: [
          {
            src: "/images/campaigns/ctrl4c-slide-casting.jpg",
            caption: "Casting Call",
          },
          {
            src: "/images/campaigns/ctrl4c-slide-lineup.jpg",
            caption: "Character Lineup",
          },
          {
            src: "/images/campaigns/ctrl4c-intro-teaser.jpg",
            caption: "Intro / Teaser",
          },
          {
            src: "/images/campaigns/ctrl4c-slide-keyframe.jpg",
            caption: "Keyframe Transitions",
          },
        ],
        sections: [
          {
            heading: "Role",
            style: "pills",
            items: [
              "Graphic designer x illustrator",
              "Caption & concept ideation",
              "Campaign strategist",
            ],
          },
          {
            heading: "Effect",
            style: "list",
            items: [
              "Casting Call → Community participation",
              "Character Lineup → World-building",
              "Intro/Teaser → Brand recognition",
              "Keyframe Transitions → Showcase animation quality",
            ],
          },
        ],
      },
      {
        title: "Posting / Marketing Strategy",
        subtitle: "Art account → Animation Studio",
        sections: [
          {
            heading: "Strategy",
            style: "list",
            items: [
              "1. Rebrand the platform — transitioned from freelance illustration commissions to an account centered on original animated storytelling.",
              "2. Build an audience — used process videos, interviews, character reveals, and event promotion to create an engaged community around the film.",
              "3. Establish industry visibility — leveraged social media as a professional networking tool rather than simply a distribution platform.",
            ],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "+400 followers",
              "20K+ video views",
              "2 industry interviews",
              "AFRIFF networking opportunity",
              "Multiple festival submissions",
              "Foundation for future IP launches",
            ],
          },
        ],
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
