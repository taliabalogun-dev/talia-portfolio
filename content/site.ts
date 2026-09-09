export const site = {
  name: "Talia Balogun",
  role: "Production Coordinator, Creative Marketing",
  heroStatement: "Great products don't sell themselves. Great stories do.",
  tagline:
    "Creative production workflows for marketing campaigns, film sets, fashion shows, and entertainment launches.",
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
    "Creative production coordinator with 3+ years running creative workflows across entertainment, fashion, and marketing - from pitch materials on Disney's Iwájú to brand partnerships with Nike, coordinating creative teams across print, photography, and video. Based in Los Angeles, moving toward creative strategy.",
  ],
  /** Trimmed version shown on the phone-view home banner, where space is tight. */
  shortParagraph:
    "Creative production coordinator with 3+ years running creative workflows across entertainment, fashion, and marketing - from Disney's Iwájú to Nike. Based in LA, moving toward creative strategy.",
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
    "I'm a creative production coordinator based in Los Angeles, working at the intersection of entertainment, fashion, marketing, and culture.",
    "My path started between Lagos and the UK. Fine art came first, years of life drawing and portraiture at Cheltenham Ladies' College, but the material I kept reaching for was Lagos: the streets, the salons, the visual language of Africans in diaspora making work far from home. Film could carry what a single image couldn't, and that's where I went.",
    "Once I got into production and onto a set, I never got off. Golden Effects Pictures first, then a writers' room at Bap Production supporting Netflix-commissioned development, where I got my first real look at how streaming and IP strategy shape a story long before anyone shoots it. That was the shift. I stopped thinking about images and started thinking about how a story gets made, sold, and positioned.",
    "Animation came last, through working for myself. Freelance illustration commissions taught me I could originate a world and run the business around it at the same time. I brought all of it into UCLA: a B.A. in Film & Television with an Animation concentration and an Entrepreneurship minor, alongside four years of creative marketing for creative products.",
    "That mix is how I work now. At Kugali Media, the studio behind Disney's Iwájú, I supported pitch strategy and awards-season promotion across the slate. Live Nation brought me on to direct the promotional film and live visuals for Mutha Festival in Brooklyn, and at UCLA Student Affairs I ran multi-platform campaign strategy for an audience of 2M+.",
    "At FAST@UCLA I directed all creative media output, print, photography, and video, for a student-run fashion brand with real paid partnerships including Nike, Icona Club, and Demonia. At Refine LA I led editorial cover shoots and campaign work for a sustainability-focused fashion organization. Both are a direct homage to Jewel by Lisa. Working with Lisa Folawiyo through Lagos and London Fashion Week was the first space where I learned to adapt film production skills to fashion and brand creative media.",
    "Alongside client work, I wrote, animated, and produced CTRL 4C, an original animated short set in a Lagos salon, with a festival strategy targeting AFRIFF. I also founded Co Curate, an independent creative studio built around a managed curator roster, starting in entertainment and animation-adjacent marketing.",
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
  /** Role tags shown only in the enlarged/lightbox view, not inline in the grid. */
  roles?: string[];
  /** Result pills shown only in the enlarged/lightbox view. Only used by "cards" layout slides. */
  results?: string[];
  /** Video only: gates playback behind a client-side password prompt (not real security - a polite viewing gate). */
  password?: string;
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
  /** Pull-quote shown right after this slide's gallery, instead of at the top of the page. */
  quote?: { text: string; name: string; role?: string; org: string };
};

export type FeaturedAnimation = {
  title: string;
  description: string;
  date: string;
  category: string;
  skills: string[];
  src: string;
  poster?: string;
  kind?: "video" | "image";
  href?: string;
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
  /** "Other Featured Animation" card grid shown after the view-full-project buttons, styled after the Co Curate explore page. */
  otherFeaturedAnimation?: FeaturedAnimation[];
};

export const projects: Project[] = [
  {
    slug: "kugali-iwaju",
    navLabel: "Kugali Media",
    title: "Marketing & IP Intern - Kugali Media",
    description:
      "Reviewed storyboards/scripts and comics against production deadlines, tracking status and flagging gaps across the release pipeline. Coordinated asset requests, approvals, and publishing timelines with internal teams and external partners via HubSpot.",
    extendedDescription:
      "Built pitch materials and research decks, researching audiences, competitors, and entertainment markets to support development and positioning. Supported event coordination and production logistics for marketing initiatives around the Emmys and NAACP Image Awards, and helped track reporting for team and partner updates.",
    tags: ["Pitch Strategy", "Audience Research", "Brand Positioning"],
    role: "Marketing & IP Intern",
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
            results: [
              "3 Emmy Nominations",
              "NAACP Image Award Nomination",
              "2 IPs in Production Post-Festival",
              "5,373 Likes & 62 Comments on Emmy Nomination Post",
              "Live Day-of Social Media Updates",
              "Media Collection for Recap Assets",
            ],
          },
          {
            src: "/images/campaigns/kugali-campaign-competing-ip-strategy.png",
            title: "Competing IP Strategy",
            caption: "Comparing international animation studios' GTM strategies",
            results: [
              "9 Critical Reports on Competing IP Strategies",
              "Gephi Network Map of Strategy Efficiencies",
            ],
          },
          {
            src: "/images/campaigns/kugali-campaign-jollof-wars-pitch.png",
            title: "IP / Pitch Strategy for Jollof Wars",
            caption: "Internal marketing strategy and positioning slides",
            results: [
              "Successfully in Production",
              "30 Shortlisted Production Avenues",
              "1 Pitch Deck",
              "1 Positioning Deck",
            ],
          },
          {
            src: "/images/campaigns/kugali-campaign-razorman-pitch.png",
            title: "Pitch Strategy for Razorman",
            caption: "Producer-facing pitch research & slides",
            results: [
              "Successfully in Production",
              "10 Shortlisted Production Avenues",
              "1 Pitch Deck",
              "Attended Producer-Facing Pitches",
            ],
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
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Art Production Strategy", "Guidelines & Graphic Design"],
          },
          {
            heading: "Results",
            style: "pills",
            items: ["Increased Engagement During Instagram Brand Guideline Implementation"],
          },
        ],
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
        sections: [
          {
            heading: "Results",
            style: "pills",
            items: [
              "Production of 2 Large-Scale Projections",
              "Video Asset Spanning 6 Multimedia Skills",
              "Directed Initial Photoshoot of Ballroom Movement Performers",
            ],
          },
        ],
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
    otherFeaturedAnimation: [
      {
        title: "Decomposition",
        description:
          "Abstract fashion show promotion video, commissioned by Refine LA - a girl's getting-ready ritual dissolves into a dream that never completes.",
        date: "May '25",
        category: "Motion",
        skills: ["Producer", "Partner Comms", "Animator", "Director"],
        src: "/videos/refine-decomposition-promo.mp4",
        poster: "/images/campaigns/refine-decomposition-promo-poster.jpg",
        kind: "video",
        href: "/projects/refine-la-zine",
      },
    ],
  },
  {
    slug: "fast-ucla-fashion-show",
    navLabel: "FAST@UCLA",
    title: "Director of Creative Media - FAST@UCLA",
    cardTitle: "Nike x FAST Campaigns",
    description:
      "Acted as project coordinator across editorial, digital, and live-event workstreams, maintaining production timelines and deadlines across concurrent initiatives. Coordinated with photographers, designers, writers, and media contributors to track deliverables and keep teams aligned on approvals.",
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
            heading: "My Role",
            style: "list",
            items: ["Facilitated coordination between creative teams."],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "Sold-Out Fashion Drop",
              "500K+ Impressions Across Posts",
              "Increased Sponsorship",
              "Requests for Follow-Up Campaigns",
              "Increased Student Ambassadors",
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
        sections: [
          {
            heading: "Results",
            style: "pills",
            items: [
              "100% Collection Sell-Through",
              "Increased Student Customer Engagement",
              "3,101 Likes & 21 Comments",
              "131 Shares & 13 Reposts",
            ],
          },
        ],
      },
      {
        /* The finished work: editorial frames and the magazine they ran in. */
        title: "Featured Creative Media",
        subtitle: "Instagram Targeted Photography Campaigns",
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
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Creative Director", "Media Coordinator", "Event Coordinator"],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "Print - 500+ Magazines Sold",
              "20,000 Likes",
              "90,000 Impressions Across Posts Led by Me",
            ],
          },
        ],
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
      "Produced and supported multi-platform media campaigns and content across Instagram, TikTok, Facebook, and Twitter for UCLA's primary institutional accounts, including @ucla, @uclahousing, and @lamabruin, collectively reaching millions of followers and serving a student body of 45,000+ undergraduate and graduate students.",
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
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Visual Identity", "Art Direction", "Photography", "Content Production", "Editing"],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "8.5K+ Impressions",
              "4.2K+ Accounts Reached",
              "35% Non-Follower Reach",
              "1,000+ Post Interactions",
              "400+ Profile Visits",
              "20+ Outreach Messages",
              "4 Student Organization Partnerships",
              "900+ Event Attendees",
              "600+ Event Attendees (30% Above Average Service)",
            ],
          },
        ],
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
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Event Coordinator", "Media Coordinator", "Design & Art Direction"],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "2M+ Audience Reached",
              "4 Campus Partners Served",
              "15,000 Likes",
              "100,000+ Impressions on Posts Led by Me",
            ],
          },
        ],
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
      "Worked as a production coordinator supporting event documentation, on-site media production, and content coordination for a sustainability-focused fashion and circular retail organization's marketing team.",
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
          { src: "/images/campaigns/refine-campaign-overview.jpg" },
          { src: "/images/campaigns/refine-campaign-promo-video.jpg" },
          { src: "/images/campaigns/refine-campaign-interviews.jpg" },
          { src: "/images/campaigns/refine-campaign-zinecover-covershoot.jpg" },
          { src: "/images/campaigns/refine-campaign-posting-strategy.jpg" },
          { src: "/images/campaigns/refine-cover-shoot-collage.jpg" },
        ],
        sections: [
          {
            heading: "Photoshoot Results",
            style: "pills",
            items: [
              "2K+ Cumulative Likes",
              "3K+ Profile Visits",
              "~30% of Traffic from the Explore Page",
            ],
          },
          {
            heading: "Video Results",
            style: "pills",
            items: ["6K+ Views", "+50% vs. Account Average", "+10% Like Performance"],
          },
        ],
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
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Event Coordinator", "Media Coordinator", "Talent Coordinator"],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "Led 20-Camera Team for Sold-Out Fashion Show",
              "Posting Strategy Across Interviews, Livestream, Video & Photo Coverage",
              "1,700 Likes & 6,000 Impressions",
              "Personally Captured 70% of Campaign Media",
            ],
          },
        ],
      },
      {
        title: "Zine Launch - Event Coverage",
        layout: "filmstrip",
        images: [
          { src: "/images/campaigns/refine-picnic-group.jpg" },
          { src: "/images/campaigns/refine-indoor-group.jpg" },
        ],
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Event Coordinator", "Media Coordinator", "Social Media Strategy"],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "Sold-Out Zine Launch",
              "Carousel Gained 400 Likes & 900 Impressions",
            ],
          },
        ],
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
            roles: ["Producer", "Partner Comms", "Director", "Director of Photography"],
            results: ["1,000+ Impressions"],
          },
          {
            src: "/videos/refine-decomposition-promo.mp4",
            kind: "video",
            aspect: "video",
            poster: "/images/campaigns/refine-decomposition-promo-poster.jpg",
            caption:
              "‘Decomposition’ fashion show abstract promotion video - Edited & animated by me - March 2025",
            roles: ["Producer", "Partner Comms", "Animator", "Director"],
            results: ["Highest-Grossing Video on This Page", "2,000 Impressions"],
          },
          {
            src: "/images/campaigns/refine-zine-cover.jpg",
            caption:
              "‘Lost and found’ fashion show event graphic & media coverage - Designed and shot by me - March 2024",
            roles: ["Designer", "Social Strategy"],
            results: ["700 Impressions"],
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
            results: [
              "Set Design Assistance for 2 Netflix Sets",
              "Costume Assistant Responsible for 4 Cast Members",
            ],
          },
          {
            src: "/images/campaigns/bap-bling-lagosians-2-poster.jpg",
            results: [
              "Dictated & Supervised Entire Draft Film Treatment",
              "Collaborated with 10+ Industry Professionals in Writers Room",
            ],
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
            results: [
              "#1 on Nigerian Netflix",
              "Screened 10+ Talent Profiles for the Lead Role",
            ],
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
      "Managed the film's production timeline, budget, and festival strategy targeting Sundance, GLAS Animation, Manchester Animation Festival, Carmel International, Film Africa London, and AFRIFF, alongside a multi-stage content rollout - process videos, character reveals, cast spotlights, teasers, and screening promotion - repositioning my platform from freelance illustration to animation. Result: +400 followers, 20K+ views, 2 industry interview invitations, and AFRIFF networking recognition.",
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
    image: "/images/campaigns/ctrl4c-slide-cover-v2.jpg",
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
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Creative Director", "Campaign Strategist", "Social Media Manager", "Designer"],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "+400 Followers",
              "20K+ Views",
              "2 Interview Invitations",
              "AFRIFF Recognition",
              "20K+ Cumulative Video Views",
              "3 High-Performing Process Videos",
              "Consistent Audience Growth",
              "Increased Profile Discovery",
              "100+ Post Interactions",
              "Strong Comment Engagement",
              "Higher Content Shares & Saves",
              "Expanded Community Participation",
              "9.5K+ Impressions",
              "3.1K+ Accounts Reached",
              "52 Profile Visits",
              "40%+ Discovery Through Feed Recommendations",
              "2.4K+ Views",
              "Strong Audience Retention",
              "Increased Comment Activity",
              "Improved Engagement with Future Posts",
            ],
          },
        ],
      },
      {
        title: "Featured Creative Media",
        subtitle: "The Full Film",
        images: [
          {
            src: "/videos/ctrl4c-full-film.mp4",
            kind: "video",
            aspect: "video",
            poster: "/images/campaigns/ctrl4c-full-film-poster-v2.jpg",
            caption: "CTRL 4C - Full Film",
            password: "screeningroom4c",
          },
        ],
        sections: [
          {
            heading: "My Role",
            style: "pills",
            items: ["Writer", "Director", "Producer", "Animator", "Editor"],
          },
          {
            heading: "Results",
            style: "pills",
            items: [
              "Screened at Undergraduate Showcase",
              "Screened in Animation Extravaganza",
              "A+ on Final Grade",
              "Ranked as One of Top Filmmakers Ever Taught by Area Head",
            ],
          },
        ],
        quote: {
          text: "She tackled underrepresented cultural perspectives and subject matter in a way that was humorous, accessible, entertaining, and unifying for diverse audiences.",
          name: "Lynn Okimura",
          role: "Lecturer in Animation",
          org: "UCLA Film, Television and Digital Media",
        },
      },
    ],
    viewFullProject: { href: "https://animationbytalia.univer.se/home-lwdxt/home-lwdxt-xbjny-vjeiz" },
    extraLinks: [
      { label: "View Animation Portfolio", href: "https://animationbytalia.univer.se" },
      { label: "Watch Film", href: "https://vimeo.com/1209134453" },
    ],
    quotes: [
      {
        text: "I rate her as one of the top undergraduate students I have ever taught. She is an accomplished artist, filmmaker, and animator.",
        name: "Chuck Sheetz",
        role: "Area Head, Animation",
        org: "UCLA Film, Television and Digital Media (director, The Simpsons and Recess)",
      },
    ],
    otherFeaturedAnimation: [
      {
        title: "Decomposition",
        description:
          "Abstract fashion show promotion video, commissioned by Refine LA - a girl's getting-ready ritual dissolves into a dream that never completes.",
        date: "May '25",
        category: "Motion",
        skills: ["Producer", "Partner Comms", "Animator", "Director"],
        src: "/videos/refine-decomposition-promo.mp4",
        poster: "/images/campaigns/refine-decomposition-promo-poster.jpg",
        kind: "video",
        href: "/projects/refine-la-zine",
      },
    ],
  },
  {
    slug: "co-curate",
    navLabel: "Co Curate",
    title: "Founder & Chief Executive - Co Curate",
    description:
      "A marketplace platform that staffs full production teams to a brief - commissioners describe the work, co-curators (creative directors, photographers, editors, designers) get matched automatically, and the fee split runs 80/20 in the makers' favor.",
    extendedDescription:
      "Concept prototype, live since August 2026. Designed the brand and product end to end, built the front end solo, and modeled the pricing structure: a 5% first-project fee, an 80/20 commission split, and a 30% direction fee on team briefs. Currently running a small beta with real commissioners and co-curators.",
    tags: ["Product Design", "Brand Identity", "Marketplace Mechanics"],
    role: "Founder & Chief Executive",
    period: "July 2026 - Present",
    location: "Los Angeles, CA / Remote",
    focus: {
      heading: "Role",
      items: [
        "Product & UX Design",
        "Brand & Visual Identity",
        "Pricing & Marketplace Mechanics",
        "Front-End Build",
        "Go-to-Market Strategy",
      ],
    },
    featured: false,
    image: "/images/campaigns/cocurate-card-v2.jpg",
    slides: [
      {
        title: "The Product",
        subtitle: "Six screens from the live prototype",
        layout: "cards",
        images: [
          {
            src: "/images/campaigns/cocurate-development-feed.jpg",
            title: "In Development",
            caption: "Pipeline productions shown by client type before a deliverable exists",
          },
          {
            src: "/images/campaigns/cocurate-corporate-feed.jpg",
            title: "Production Feed",
            caption: "Launched work browsable by category, corporate commissions included",
          },
          {
            src: "/images/campaigns/cocurate-dashboard-split.jpg",
            title: "Two Sides, One Platform",
            caption: "Commissioners write briefs; co-curators take them - each gets its own entry point",
          },
          {
            src: "/images/campaigns/cocurate-timeline.jpg",
            title: "Project Timeline",
            caption: "Past briefs tracked chronologically with delivery status",
          },
          {
            src: "/images/campaigns/cocurate-add-curator.jpg",
            title: "Building the Roster",
            caption: "Co-curators build a verified profile before joining the invite-only roster",
          },
          {
            src: "/images/campaigns/cocurate-match-process.jpg",
            title: "Matching",
            caption: "Co-curators surfaced against a brief's shape, budget, and specialty",
          },
        ],
        sections: [],
      },
      {
        title: "Where It Stands",
        sections: [
          {
            heading: "Results",
            style: "pills",
            items: [
              "2 Active Commissioner Beta Testers",
              "3 Active Creator Testers",
              "6-Step Brief-to-Match Flow Shipped",
              "9 Real Productions Seeded from Client Work",
            ],
          },
        ],
      },
    ],
    viewFullProject: { href: "https://co-curate-production.up.railway.app" },
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
      "Brand & Campaign Positioning",
      "Competitive & Market Research",
      "Marketing & Go-to-Market Strategy",
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
    category: "Production & Logistics",
    items: [
      "On-Set & Live Event Production",
      "Production Scheduling & Logistics",
      "Vendor, Crew & Talent Coordination",
      "Budget Tracking & Resource Allocation",
    ],
  },
  {
    category: "Tools",
    items: [
      "Adobe Creative Suite",
      "Canva",
      "Social Media Publishing & Analytics",
      "Notion & Asana",
      "Airtable",
      "HubSpot CRM",
      "Google Workspace & Microsoft Office",
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
      "Coordinated creative media production - print, photography, video, and media releases - across editorial, digital, and live-event initiatives, serving as a key creative production contact for brand partners including Nike, Icona Club, and Demonia.",
    slug: "fast-ucla-fashion-show",
  },
  {
    role: "Contracted Creative Marketing Director",
    company: "Live Nation",
    period: "Mar 2025 - June 2025",
    summary:
      "Coordinated production of the official promotional film and live concert projection content for Mutha Festival, translating creative vision into a cohesive visual direction across digital and live touchpoints.",
    slug: "live-nation-mutha",
  },
  {
    role: "Marketing & IP Intern",
    company: "Kugali Media",
    period: "Sept 2024 - June 2025",
    summary:
      "Supported pitch strategy and production coordination on Disney's Iwájú, built producer-facing pitch decks for Jollof Wars and Razorman, and reviewed 50+ scripts weekly to inform marketing positioning.",
    slug: "kugali-iwaju",
  },
  {
    role: "Marketing & Media Coordinator",
    company: "UCLA Student Affairs",
    period: "June 2023 - Sept 2025",
    summary:
      "Coordinated multi-platform institutional marketing content across Instagram, TikTok, Facebook, and X, translating campus priorities into consistent creative direction for an audience of 2M+.",
    slug: "ucla-campus-campaigns",
  },
];

export const additionalExperience: ExperienceItem[] = [
  {
    role: "Marketing Coordinator",
    company: "Refine LA",
    period: "Sept 2023 - June 2025",
    summary:
      "Coordinated editorial cover shoots and magazine promotion videos as creative production support for a sustainability-focused fashion and circular retail organization.",
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
    role: "Founder & Chief Executive",
    company: "Co Curate",
    period: "July 2026 - Present",
    summary:
      "Designed and built a marketplace platform that staffs full production teams to a brief, from brand and product design through pricing structure and front-end build.",
    slug: "co-curate",
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
      "Coordinated promotional materials and creative production for the organization's festivals, workshops, and short-film fundraising initiatives.",
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
