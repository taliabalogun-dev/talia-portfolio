export const site = {
  name: "Talia Balogun",
  role: "Creative Marketing & Campaign Strategy",
  heroStatement: "Creative products need creative strategy.",
  tagline:
    "Campaign strategy & outputs for entertainment, fashion and institutional brands.",
  email: "talia.balogun@gmail.com",
  location: "Los Angeles, CA",
  social: {
    github: "",
    linkedin: "https://linkedin.com/in/talia-balogun-326690228",
    twitter: "",
  },
  resumeUrl: "/resume/resume.pdf",
  aboutImage: "/images/about-graduation-v2.png",
};

export const about = {
  heading: "About",
  paragraphs: [
    "Creative marketing and campaign strategist with 3+ years directing creative decisions - from pitch strategy on Disney's Iwájú to brand partnerships with Nike, directing full creative teams across print, photography, and video. Based in Los Angeles, moving toward entertainment marketing strategy and development.",
  ],
  /** Trimmed version shown on the phone-view home banner, where space is tight. */
  shortParagraph:
    "Creative marketing and campaign strategist with 3+ years directing creative decisions - from Disney's Iwájú to Nike. Based in LA, moving toward entertainment marketing strategy.",
};

export const education: { school: string; detail: string; location: string }[] = [
  {
    school: "UCLA",
    detail: "B.A. Film & Television - Animation concentration, Entrepreneurship minor",
    location: "Los Angeles, CA",
  },
  {
    school: "Cheltenham Ladies' College",
    detail: "Secondary education",
    location: "Cheltenham, UK",
  },
];

export const bio = {
  heading: "More About Me",
  paragraphs: [
    "I'm a creative marketing and campaign strategist based in Los Angeles, working at the intersection of entertainment, fashion, and culture. My path started in Lagos - early production and PR roles at Golden Effects Pictures, Bap Production, and alongside fashion designer Lisa Folawiyo - before secondary school at Cheltenham Ladies' College in the UK and a B.A. in Film & Television at UCLA, with an Animation concentration and a minor in Entrepreneurship.",
    "At FAST@UCLA I directed all creative media output, print, photography, and video, for a student-run fashion brand with real paid partnerships including Nike, Icona Club, and Demonia. At Refine LA I led editorial cover shoots and campaign work for a sustainability-focused fashion organization. Both are a direct homage to Jewel by Lisa. Working with Lisa Folawiyo through Lagos and London Fashion Week was the first space where I learned to adapt film production skills to fashion and brand creative media.",
    "Alongside client work, I'm writing, directing, and producing CTRL 4C, an original animated short set in a Lagos salon, with a festival strategy targeting Sundance, GLAS Animation, and AFRIFF. I also founded Co Curate, an independent creative studio built around a managed curator roster, starting in entertainment and animation-adjacent marketing.",
    "Long term, I'm moving from campaign-level creative direction into entertainment marketing strategy and development. Staying close to the work while shaping the positioning and business decisions around it.",
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
  /** Bold title shown above the caption. Only used by "cards" layout slides. */
  title?: string;
  /** Defaults to "portrait" (phone-screenshot shaped). Use "video" for landscape stills. */
  aspect?: "portrait" | "video";
  /** Defaults to "image". Set to "video" to render an HTML5 <video> - src should point at an mp4. */
  kind?: "image" | "video";
  /** Poster frame for video items. */
  poster?: string;
  /** Video only: autoplay muted + loop, hero-style. */
  autoplay?: boolean;
  /** Defaults to "center". Use "top" to keep the top of the image visible when object-cover crops it. */
  position?: "center" | "top";
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
  /** Defaults to "grid". "slideshow" renders a single-image carousel with Prev/Next. "filmstrip" shows every image at once, edge-to-edge, in a horizontally scrollable strip. "cards" shows small uncropped thumbnails with a caption underneath (desktop only) - wraps to a 2-column grid on mobile, scrolls horizontally on desktop. */
  layout?: "grid" | "slideshow" | "filmstrip" | "cards";
};

export type Project = {
  slug: string;
  navLabel: string;
  title: string;
  /** Overrides `title` on the homepage carousel card only; subpage and nav still use `title`. */
  cardTitle?: string;
  description: string;
  extendedDescription?: string;
  tags: string[];
  role: string;
  period: string;
  location: string;
  /** Short pill list of focus areas or partners, shown right under the role/date line on the subpage. */
  focus?: { heading: string; items: string[] };
  /** Whether this appears as a large slide in the rotating showcase. Non-featured projects still appear in the nav bar, linking straight to their subpage. */
  featured: boolean;
  /** Hero image for the carousel slide and subpage header. */
  image?: string;
  /** Overrides `image` on the My Work carousel and the /work polaroid grid only; the subpage header still uses `image`. */
  cardImage?: string;
  /** Defaults to "cover". Use "contain" for circular logo marks so the full circle stays visible in the portrait hero box instead of being cropped. */
  imageFit?: "cover" | "contain";
  /** Defaults to "center". Use "top" to keep the top of the image (e.g. a poster's logo/title) visible when object-cover crops it. */
  imagePosition?: "center" | "top";
  /** Pinterest-style campaign cards shown on the subpage. */
  campaigns?: Campaign[];
  /** Slide-by-slide case study breakdown shown instead of the campaigns grid. */
  slides?: Slide[];
  /** Shows a "View full project" button at the end of the page. Leave the href unset to render it disabled (no link yet). */
  viewFullProject?: { href?: string };
  /** Extra outbound link buttons shown next to "View full project" (e.g. a portfolio site, a film link). */
  extraLinks?: { label: string; href: string }[];
  /** Pull-quote(s) shown under the hero description on the subpage. Name and role render in accent color, org in muted. */
  quotes?: { text: string; name: string; role?: string; org: string }[];
};

export const projects: Project[] = [
  {
    slug: "kugali-iwaju",
    navLabel: "Kugali Media",
    title: "Marketing & Story Intern - Kugali Media",
    description:
      "Reviewed storyboards/scripts and comics against production deadlines, tracking status and flagging gaps across the release pipeline. Coordinated asset requests, approvals, and publishing timelines with internal teams and external partners via HubSpot.",
    extendedDescription:
      "Built marketing materials and pitch presentations, researching audiences, competitors, and entertainment markets to inform campaign strategy. Supported marketing initiatives and event coordination around the Emmys and NAACP Image Awards, and tracked campaign performance for team and partner reporting.",
    tags: ["Pitch Strategy", "Audience Research", "Brand Positioning"],
    role: "Marketing & Story Intern",
    period: "June 2024 - June 2025",
    location: "UK / Hybrid",
    focus: {
      heading: "Focus",
      items: [
        "Story & Script Review",
        "Pitch Presentations",
        "Audience Research",
        "Campaign Reporting",
      ],
    },
    featured: true,
    image: "/images/campaigns/kugali-iwaju-poster.jpg",
    imagePosition: "top",
    quotes: [
      {
        text: "A quick-to-learn, passionate worker, with a knack for keen observation and attention to detail, as well as creative thinking.",
        name: "Matthew Corry",
        role: "Chief Marketing Officer",
        org: "Kugali Media",
      },
    ],
    slides: [
      {
        title: "The Emmys",
        subtitle: "Daytime Emmy Awards - Iwájú, Disney × Kugali - IP Strategy & Field Marketing",
        layout: "filmstrip",
        images: [
          {
            src: "/images/campaigns/kugali-emmys-statuette.jpg",
            caption: "The statuette, stage left before the ceremony",
          },
          {
            src: "/images/campaigns/kugali-emmys-stage.jpg",
            caption: "Iwájú on screen during the ceremony",
          },
          {
            src: "/images/campaigns/kugali-emmys-carpet.jpg",
            caption: "The Kugali team on the NATAS carpet",
          },
        ],
        sections: [],
      },
      {
        title: "Featured Campaigns",
        layout: "cards",
        images: [
          {
            src: "/images/campaigns/kugali-campaign-emmys-strategy-v2.png",
            title: "Emmys Social Strategy",
            caption:
              "IP & festival releases research & strategy, as well as live day-of social media campaign - active posting",
          },
          {
            src: "/images/campaigns/kugali-campaign-competing-ip-strategy.png",
            title: "Competing IP Strategy",
            caption: "Comparing international animation studios' GTM strategies",
          },
          {
            src: "/images/campaigns/kugali-campaign-jollof-wars-pitch.png",
            title: "IP / Pitch Strategy for Jollof Wars",
            caption: "Internal marketing strategy and positioning slides",
          },
          {
            src: "/images/campaigns/kugali-campaign-razorman-pitch.png",
            title: "Pitch Strategy for Razorman",
            caption: "Producer-facing pitch research & slides",
          },
        ],
        sections: [],
      },
      {
        title: "Featured Creative Media",
        subtitle: "Design Strategy",
        layout: "slideshow",
        images: [
          { src: "/images/campaigns/kugali-design-strategy-shirts.png" },
          { src: "/images/campaigns/kugali-design-strategy-guide.jpg" },
          { src: "/images/campaigns/kugali-design-strategy-card-mockup.png" },
          { src: "/images/campaigns/kugali-design-strategy-title-art.jpg" },
        ],
        sections: [],
      },
    ],
  },
  {
    slug: "live-nation-mutha",
    navLabel: "Live Nation",
    title: "‘This Is MUTHA’ Festival Promotion - Live Nation",
    description:
      "Commissioned to direct and produce the official promotional film and live concert projection visuals for MUTHA Festival, a Brooklyn-based event celebrating queer, Black, and femme artists through music and performance.",
    extendedDescription:
      "Managed creative asset delivery, versions, and approvals across teams and vendors, coordinating production schedules to meet tight event deadlines. Maintained brand and creative consistency across the festival's digital and live touchpoints, tracking feedback and revisions through final delivery. Served as the central point of coordination between creative, production, and promotional teams from planning through same-day execution.",
    tags: ["Campaign Direction", "Brand Partnerships", "Video"],
    role: "Contracted Creative Marketing Director",
    period: "March 2025 - June 2025",
    location: "NYC / Hybrid",
    featured: true,
    image: "/images/campaigns/livenation-mutha-poster.jpg",
    quotes: [
      {
        text: "She has an incredible eye for detail and a sharp instinct for storytelling, which allowed her to translate complex ideas into something visually compelling and emotionally resonant.",
        name: "Soukee Van Orden",
        role: "Director of Strategic Partnerships and Operations",
        org: "CURATED by Live Nation",
      },
    ],
    slides: [
      {
        title: "Featured Creative Media",
        subtitle: "Contracted Creative Marketing Director - March 2025 - June 2025",
        images: [
          {
            src: "/videos/livenation-mutha-promo-film.mp4",
            kind: "video",
            aspect: "video",
            autoplay: true,
            poster: "/images/campaigns/livenation-mutha-promo-poster.jpg",
            caption: "‘MUTHA’ concert promo video - May 2025",
          },
        ],
        sections: [],
      },
      {
        title: "Featured Campaign",
        images: [
          { src: "/images/campaigns/livenation-featured-campaign.jpg", aspect: "video" },
        ],
        sections: [],
      },
      {
        title: "Production Stills",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/livenation-production-still-01.jpg" },
          { src: "/images/campaigns/livenation-production-still-02.jpg" },
          { src: "/images/campaigns/livenation-production-still-03.jpg" },
        ],
        sections: [],
      },
    ],
  },
  {
    slug: "fast-ucla-fashion-show",
    navLabel: "FAST@UCLA",
    title: "Director of Creative Media - FAST@UCLA",
    cardTitle: "Nike x FAST Campaigns",
    description:
      "Acted as project manager across editorial, digital, and live-event workstreams, maintaining campaign timelines and deadlines across concurrent initiatives. Coordinated with photographers, designers, writers, and media contributors to track deliverables and keep teams aligned on approvals.",
    extendedDescription:
      "Coordinated brand partnerships and vendor logistics with Nike, Icona Club, and Demonia, supporting a sold-out fashion drop through student-led promotion. Organized and ran production meetings - scheduling, agendas, and follow-ups - for FAST's annual fashion show, and reviewed results after each initiative to close gaps for future planning.",
    tags: ["Brand Partnerships", "Event Marketing", "Creative Direction"],
    role: "Director of Creative Media",
    period: "Oct 2024 - June 2026",
    location: "Los Angeles, CA",
    focus: {
      heading: "Focus",
      items: [
        "Editorial Project Management",
        "Brand Partnerships",
        "Live-Event Production",
        "Vendor & Team Coordination",
      ],
    },
    featured: true,
    image: "/images/campaigns/fast-billboard-hero.jpg",
    slides: [
      {
        title: "Nike Collab",
        subtitle:
          "Nike partners with FAST's media teams each term to brief and produce targeted student campaigns.",
        layout: "slideshow",
        images: [
          { src: "/images/campaigns/fast-nike-powered-by.jpg" },
          { src: "/images/campaigns/fast-nike-better-to-be-fast.jpg" },
          { src: "/images/campaigns/fast-nike-editorial-kick.jpg" },
          { src: "/images/campaigns/fast-nike-group-sneakers.jpg" },
          { src: "/images/campaigns/fast-nike-shoe-closeup.jpg" },
        ],
        sections: [
          {
            heading: "My Role - Director of Creative Media",
            style: "list",
            items: [
              "Facilitated team creative coordination across the collab's three deliverables.",
            ],
          },
          {
            heading: "Deliverables",
            style: "pills",
            items: [
              "'Running Back' Member-Acquisition Campaign",
              "'It's Better to Be Fast' Editorial Photoshoot",
              "'It's Better to Be Fast' Promo Video Shoot",
            ],
          },
          {
            heading: "Other FAST Brand Partners",
            style: "pills",
            items: ["Icona Club", "Demonia"],
          },
        ],
      },
      {
        title: "Featured Campaign",
        layout: "slideshow",
        images: [
          { src: "/images/campaigns/fast-campaign-title.jpg" },
          { src: "/images/campaigns/fast-campaign-overview.jpg" },
          { src: "/images/campaigns/fast-campaign-the-post.jpg" },
          { src: "/images/campaigns/fast-campaign-teaser-video.jpg" },
          { src: "/images/campaigns/fast-campaign-creative-production.jpg" },
          { src: "/images/campaigns/fast-campaign-edited-selects.jpg" },
          { src: "/images/campaigns/fast-campaign-marketing-strategy.jpg" },
        ],
        sections: [],
      },
      {
        /* The finished work: editorial frames and the magazine they ran in. */
        title: "Featured Creative Media",
        subtitle: "Director of Creative Media - Oct 2024 - June 2026",
        layout: "filmstrip",
        images: [
          // The six that lead it.
          { src: "/images/campaigns/fast-runway-01.jpg" },
          { src: "/images/campaigns/fast-editorial-car-03.jpg" },
          { src: "/images/campaigns/fast-editorial-negatives.jpg" },
          { src: "/images/campaigns/fast-storefront-billboard.jpg", aspect: "video" },
          { src: "/images/campaigns/fast-editorial-movement-01.jpg" },
          // The rest, in their existing order.
          { src: "/images/campaigns/fast-editorial-car-01.jpg" },
          { src: "/images/campaigns/fast-editorial-movement-02.jpg" },
          { src: "/images/campaigns/fast-editorial-street-01.jpg" },
          { src: "/images/campaigns/fast-editorial-rooftop-01.jpg" },
          { src: "/images/campaigns/fast-editorial-garden-01.jpg" },
          { src: "/images/campaigns/fast-magazine-cover.jpg" },
        ],
        sections: [],
      },
      {
        /* The room rather than the result: the shoots being made and the
         * people who turned up for them. */
        title: "Gallery",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/fast-editorial-car-02.jpg" },
          { src: "/images/campaigns/fast-auditorium.jpg", aspect: "video" },
          { src: "/images/campaigns/fast-group-01.jpg" },
          { src: "/images/campaigns/fast-bts-studio-01.jpg" },
        ],
        sections: [],
      },
    ],
  },
  {
    slug: "ucla-campus-campaigns",
    navLabel: "UCLA Student Affairs",
    title: "Marketing & Media Coordinator - UCLA Student Affairs",
    description:
      "Produced and supported multi-platform media campaigns across Instagram, TikTok, Facebook, and Twitter for UCLA's primary institutional accounts, including @ucla, @uclahousing, and @lamabruin, collectively reaching millions of followers and serving a student body of 45,000+ undergraduate and graduate students.",
    extendedDescription:
      "Focused on photography, graphic design, and content planning to communicate the UCLA student experience at scale, regularly covering large-scale campus events - including commencements and university-wide programs - attended by tens of thousands of students, families, and community members. Collaborated with multiple campus partners across Student Affairs, including the Center for Accessible Education, the Dean's Office, Housing & Hospitality, and UCLA Athletics, helping coordinate consistent, accessible, and brand-aligned communications across departments.",
    tags: ["TikTok", "Instagram", "Social Strategy"],
    role: "Marketing & Media Coordinator",
    period: "Aug 2023 - June 2025",
    location: "Los Angeles, CA",
    focus: {
      heading: "Campus Partners",
      items: [
        "Center for Accessible Education",
        "Dean's Office",
        "Housing & Hospitality",
        "UCLA Athletics",
      ],
    },
    featured: false,
    image: "/images/campaigns/ucla-were-hiring-overhead.jpg",
    quotes: [
      {
        text: "Talia crafted media that powerfully reflected and amplified the UCLA student experience better than we could have done without her.",
        name: "Ricky Horne Jr.",
        role: "Assistant Director of Communications",
        org: "UCLA Student Affairs",
      },
    ],
    slides: [
      {
        title: "Featured Campaign",
        layout: "slideshow",
        images: [
          { src: "/images/campaigns/ucla-campaign-title.jpg" },
          { src: "/images/campaigns/ucla-campaign-event.jpg" },
          { src: "/images/campaigns/ucla-campaign-the-post.jpg" },
          { src: "/images/campaigns/ucla-campaign-edited-selects.jpg" },
          { src: "/images/campaigns/ucla-campaign-marketing-strategy.jpg" },
        ],
        sections: [],
      },
      {
        title: "Featured Creative Media",
        subtitle: "Marketing & Media Coordinator - Aug 2023 - June 2025",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/ucla-bike-night.jpg" },
          { src: "/images/campaigns/ucla-dasani-tent.jpg" },
          { src: "/images/campaigns/ucla-event-room.jpg" },
          { src: "/images/campaigns/ucla-speaker-mic.jpg" },
          { src: "/images/campaigns/ucla-flower-stand.jpg" },
          { src: "/images/campaigns/ucla-community-member.jpg" },
          { src: "/images/campaigns/ucla-zombie-poster.jpg" },
          { src: "/images/campaigns/ucla-frankenstein-poster.jpg" },
          { src: "/images/campaigns/ucla-dracula-poster.jpg" },
          { src: "/images/campaigns/ucla-group-hangout.jpg" },
        ],
        sections: [],
      },
      {
        title: "Gallery",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/ucla-group-selfie.jpg" },
          { src: "/images/campaigns/ucla-bts-office.jpg" },
          { src: "/images/campaigns/ucla-group-lawn.jpg" },
        ],
        sections: [],
      },
    ],
  },
  {
    slug: "refine-la-zine",
    navLabel: "Refine LA",
    title: "Marketing Coordinator - Refine LA",
    description:
      "Worked as a marketing coordinator supporting event documentation, campaign promotion, and content coordination for a sustainability-focused fashion and circular retail organization.",
    extendedDescription:
      "Coordinated on-site coverage for fashion shows, flea markets, and community activations, including initiatives sponsored by Poshmark and Evewear - handling photography, video capture, and post-event content rollout to extend each event's reach.",
    tags: ["Event Coverage", "Photography", "Video"],
    role: "Marketing Coordinator",
    period: "Sept 2023 - June 2025",
    location: "Los Angeles, CA",
    focus: {
      heading: "Focus",
      items: ["Event Documentation", "Campaign Promotion", "Content Coordination"],
    },
    featured: false,
    image: "/images/campaigns/refine-logo.png",
    imageFit: "contain",
    cardImage: "/images/campaigns/refine-fashion-show-runway.jpg",
    quotes: [
      {
        text: "It was Talia who proposed creating an animated video depicting the life cycle of a garment, completing it a full week ahead of schedule.",
        name: "Yuuki Hayashi",
        role: "Marketing Team",
        org: "Refine LA",
      },
    ],
    slides: [
      {
        title: "Featured Campaign",
        layout: "slideshow",
        images: [
          { src: "/images/campaigns/refine-campaign-title.jpg" },
          { src: "/images/campaigns/refine-cover-shoot-collage.jpg" },
          { src: "/images/campaigns/refine-campaign-posting-strategy.jpg" },
          { src: "/images/campaigns/refine-campaign-promo-video.jpg" },
          { src: "/images/campaigns/refine-campaign-zinecover-covershoot.jpg" },
          { src: "/images/campaigns/refine-campaign-interviews.jpg" },
          { src: "/images/campaigns/refine-campaign-overview.jpg" },
        ],
        sections: [],
      },
      {
        title: "‘Lost and Found’ Fashion Show - Event Coverage",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/refine-group-subway.jpg" },
          { src: "/images/campaigns/refine-portrait-patterned.jpg" },
          { src: "/images/campaigns/refine-bts-hands.jpg" },
          { src: "/images/campaigns/refine-night-walk.jpg" },
          { src: "/images/campaigns/refine-night-lights.jpg" },
        ],
        sections: [],
      },
      {
        title: "Zine Launch - Event Coverage",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/refine-picnic-group.jpg" },
          { src: "/images/campaigns/refine-indoor-group.jpg" },
        ],
        sections: [],
      },
      {
        title: "Featured Creative Media",
        subtitle: "Marketing Coordinator - Sept 2023 - June 2025",
        images: [
          {
            src: "/videos/refine-promo-film.mp4",
            kind: "video",
            aspect: "video",
            poster: "/images/campaigns/refine-promo-film-poster.jpg",
            caption:
              "‘What does LA mean to you’ zine promotion video - Directed and shot by me - Feb 2025",
          },
          {
            src: "/videos/refine-decomposition-promo.mp4",
            kind: "video",
            aspect: "video",
            poster: "/images/campaigns/refine-decomposition-promo-poster.jpg",
            caption:
              "‘Decomposition’ fashion show abstract promotion video - Edited & animated by me - March 2025",
          },
          {
            src: "/images/campaigns/refine-zine-cover.jpg",
            caption:
              "‘Lost and found’ fashion show event graphic & media coverage - Designed and shot by me - March 2024",
          },
        ],
        sections: [],
      },
    ],
  },
  {
    slug: "bap-productions",
    navLabel: "BAP Productions",
    title: "Writers Room & Story Development Intern - BAP Productions",
    description:
      "Contributed to story development and concept creation for Netflix-commissioned and BAP-produced projects. Wrote treatments and assisted in developing sequel narratives, including Bling Lagosians 2.",
    extendedDescription:
      "Participated in the writers' room, supporting script development, story structure, and creative ideation, and served as Script Supervisor / Writers' Room Lead, overseeing narrative continuity and development workflows. Collaborated across writing, casting, costume, and budgeting teams for upcoming releases including Man of God and Island Spice, gaining hands-on experience in pre-production, creative pitching, and cross-department collaboration within a professional production environment.",
    tags: ["Story Development", "Writers Room", "Pre-Production"],
    role: "Writers Room & Story Development Intern",
    period: "June 2023 - Sept 2023",
    location: "Lagos, Nigeria",
    featured: false,
    image: "/images/campaigns/bap-logo.png",
    imageFit: "contain",
    cardImage: "/images/campaigns/bap-house-of-gaa-poster.jpg",
    slides: [
      {
        title: "Featured Creative Media",
        images: [
          {
            src: "/images/campaigns/bap-house-of-gaa-poster.jpg",
            caption: "'House of Ga'a' (Netflix) - Production Assistant - 2023",
          },
          {
            src: "/images/campaigns/bap-bling-lagosians-2-poster.jpg",
            caption: "'The Bling Lagosians 2' - Contributing Writer - 2027",
          },
        ],
        sections: [],
      },
      {
        title: "Gallery",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/bap-onset-night.jpg" },
          { src: "/images/campaigns/bap-writers-room.jpg" },
          { src: "/images/campaigns/bap-bts-monitor.jpg" },
          { src: "/images/campaigns/bap-office-meeting.jpg" },
          { src: "/images/campaigns/bap-office-photo.jpg" },
          { src: "/images/campaigns/bap-terra-kulture.jpg" },
          { src: "/images/campaigns/bap-onset-lighting.jpg" },
        ],
        sections: [],
      },
    ],
  },
  {
    slug: "golden-effects-pictures",
    navLabel: "Golden Effects Pictures",
    title: "Production / Creative Intern - Golden Effects Pictures",
    description:
      "Supported story development and pre-production across film and media projects. Assisted with production coordination, including on-set support and creative problem-solving.",
    extendedDescription:
      "Contributed to visual and narrative development, working closely with directors and production teams, and gained hands-on experience in professional Nigerian film production workflows, from planning through execution - building skills in creative development, production logistics, and team coordination within a collaborative, fast-paced environment.",
    tags: ["Pre-Production", "On-Set Support", "Creative Development"],
    role: "Production / Creative Intern",
    period: "Apr 2020 - May 2020",
    location: "Lagos, Nigeria",
    featured: false,
    image: "/images/campaigns/golden-effects-logo.png",
    imageFit: "contain",
    cardImage: "/images/campaigns/golden-effects-swallow-poster.jpg",
    slides: [
      {
        title: "Featured Creative Media",
        images: [
          {
            src: "/images/campaigns/golden-effects-swallow-poster.jpg",
            caption: "'Swallow' (Netflix) - Production Assistant - Oct 2026",
          },
        ],
        sections: [],
      },
    ],
  },
  {
    slug: "ctrl-4c-campaign",
    navLabel: "CTRL 4C",
    title: "Writer, Producer & Director - CTRL 4C",
    description:
      "Writing, directing, and producing an original animated short - a sci-fi comedy set in a Lagos salon - following a character who accidentally time-travels through a hair-tech invention into a frozen '90s sitcom world.",
    extendedDescription:
      "Ran a multi-stage social campaign repositioning my account from freelance illustration to an animation-focused platform - process videos, character reveals, cast spotlights, teasers, and screening promotion - while managing the film's production timeline, budget, and festival strategy targeting Sundance, GLAS Animation, Manchester Animation Festival, Carmel International, Film Africa London, and AFRIFF. Result: +400 followers, 20K+ views, 2 industry interview invitations, and AFRIFF networking recognition.",
    tags: ["Festival Strategy", "Key Art & Campaign", "Production Direction"],
    role: "Writer, Producer & Director",
    period: "2025 - Present",
    location: "Los Angeles, CA",
    focus: {
      heading: "Role",
      items: [
        "Creative Director",
        "Campaign Strategist",
        "Social Media Manager",
        "Designer",
      ],
    },
    featured: false,
    image: "/images/campaigns/ctrl4c-slide-cover.jpg",
    slides: [
      {
        title: "Featured Campaign",
        layout: "slideshow",
        images: [
          { src: "/images/campaigns/ctrl4c-campaign-title.jpg" },
          { src: "/images/campaigns/ctrl4c-campaign-overview.jpg" },
          { src: "/images/campaigns/ctrl4c-campaign-video-content.jpg" },
          { src: "/images/campaigns/ctrl4c-campaign-cast-talent.jpg" },
          { src: "/images/campaigns/ctrl4c-campaign-screening-post.jpg" },
          { src: "/images/campaigns/ctrl4c-campaign-teaser-slideshow.jpg" },
          { src: "/images/campaigns/ctrl4c-campaign-other-posts.jpg" },
          { src: "/images/campaigns/ctrl4c-campaign-marketing-strategy.jpg" },
        ],
        sections: [],
      },
    ],
    viewFullProject: { href: "https://animationbytalia.univer.se/home-lwdxt/home-lwdxt-xbjny-vjeiz" },
    extraLinks: [
      { label: "View Animation Portfolio", href: "https://animationbytalia.univer.se" },
      { label: "Watch Film", href: "https://vimeo.com/1209134453" },
    ],
    quotes: [
      {
        text: "She tackled underrepresented cultural perspectives and subject matter in a way that was humorous, accessible, entertaining, and unifying for diverse audiences.",
        name: "Lynn Okimura",
        role: "Lecturer in Animation",
        org: "UCLA Film, Television and Digital Media",
      },
      {
        text: "I rate her as one of the top undergraduate students I have ever taught. She is an accomplished artist, filmmaker, and animator.",
        name: "Chuck Sheetz",
        role: "Area Head, Animation",
        org: "UCLA Film, Television and Digital Media (director, The Simpsons and Recess)",
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
  /** Slug of the matching project subpage, when one exists. */
  slug?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Director of Creative Media",
    company: "FAST@UCLA",
    period: "Oct 2024 - June 2026",
    summary:
      "Directed all creative media production - print, photography, video, and media releases - across editorial, digital, and live-event initiatives, serving as key creative contact for brand partners including Nike, Icona Club, and Demonia.",
    slug: "fast-ucla-fashion-show",
  },
  {
    role: "Contracted Creative Marketing Director",
    company: "Live Nation",
    period: "Mar 2025 - June 2025",
    summary:
      "Directed creative strategy and produced the official promotional film and live concert projection content for Mutha Festival, translating brand vision into a cohesive visual direction across digital and live touchpoints.",
    slug: "live-nation-mutha",
  },
  {
    role: "Marketing & Story Intern",
    company: "Kugali Media",
    period: "Sept 2024 - June 2025",
    summary:
      "Supported marketing and pitch strategy on Disney's Iwájú, built producer-facing pitch decks for Jollof Wars and Razorman, and reviewed 50+ scripts weekly to inform brand positioning.",
    slug: "kugali-iwaju",
  },
  {
    role: "Marketing & Media Coordinator",
    company: "UCLA Student Affairs",
    period: "June 2023 - Sept 2025",
    summary:
      "Directed creative and campaign strategy for multi-platform institutional content across Instagram, TikTok, Facebook, and X, translating campus priorities into brand-consistent direction for an audience of 2M+.",
    slug: "ucla-campus-campaigns",
  },
];

export const additionalExperience: ExperienceItem[] = [
  {
    role: "Marketing Coordinator",
    company: "Refine LA",
    period: "Sept 2023 - June 2025",
    summary:
      "Directed editorial cover shoots and magazine promotion videos as creative lead for a sustainability-focused fashion and circular retail organization.",
    slug: "refine-la-zine",
  },
  {
    role: "Marketing Strategy Intern",
    company: "FCMB Group",
    period: "Apr 2026 - June 2026",
    summary:
      "Led campaign research and a three-part growth strategy for Flexx, FCMB's youth banking product, spanning gamification, campus creator funding, and a phased KPI roadmap.",
  },
  {
    role: "Founder",
    company: "Co Curate",
    period: "July 2026 - Present",
    summary:
      "Building an independent creative studio with a managed curator roster, an IP origination model, and an initial go-to-market focus on entertainment and animation-adjacent marketing.",
  },
  {
    role: "Writer, Producer & Director",
    company: "CTRL 4C",
    period: "2025 - Present",
    summary:
      "Writing, directing, and producing an original animated short end-to-end, including a festival distribution and positioning strategy targeting Sundance and GLAS Animation.",
    slug: "ctrl-4c-campaign",
  },
  {
    role: "Marketing Director",
    company: "Black Film and Theatre Initiative",
    period: "Sept 2025 - June 2026",
    summary:
      "Directed promotional strategy and creative materials for the organization's festivals, workshops, and short-film fundraising initiatives.",
  },
  {
    role: "Writers Room & Story Development Intern",
    company: "BAP Productions",
    period: "Jun - Sept 2023",
    summary:
      "Reviewed scripts and treatments supporting story development for Netflix-commissioned and in-house film/TV projects, including sequel development for Bling Lagosians 2.",
    slug: "bap-productions",
  },
  {
    role: "Production / Creative Intern",
    company: "Golden Effects Pictures",
    period: "Apr - May 2020",
    summary:
      "Provided administrative and production support during pre-production at a Lagos-based production company.",
    slug: "golden-effects-pictures",
  },
  {
    role: "PR Event Coordinator",
    company: "Jewel by Lisa",
    period: "Oct - Nov 2020",
    summary:
      "Supported fashion designer Lisa Folawiyo ahead of Lagos and London Fashion Week, managing models and runway shows.",
  },
];
