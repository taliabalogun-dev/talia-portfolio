import Link from "next/link";
import Nav from "@/components/Nav";
import EnlargeableVideo from "@/components/EnlargeableVideo";
import {
  narrativeAnimationReel,
  experimentalAnimationReel,
  storyboardReel,
  characterDesignReel,
  conceptArtReel,
  flattenSlides,
  type FeaturedAnimation,
} from "@/content/site";

const sections = [
  { id: "narrative", label: "Narrative", items: narrativeAnimationReel },
  { id: "concept", label: "Concept Art", items: conceptArtReel },
  { id: "experimental", label: "Experimental", items: experimentalAnimationReel },
  { id: "characters", label: "Character Design", items: flattenSlides(characterDesignReel) },
  { id: "storyboards", label: "Storyboards", items: storyboardReel },
];

function ArtTile({ item }: { item: FeaturedAnimation }) {
  return (
    <figure className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-md">
      {item.kind === "video" ? (
        <video
          src={item.src}
          poster={item.poster}
          controls
          loop
          playsInline
          preload="metadata"
          className="block w-full"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.src} alt={item.title} className="block w-full" loading="lazy" />
      )}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/75 to-transparent p-3 pt-10 text-white opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
          {item.category} · {item.date}
        </p>
        <p className="text-sm font-bold leading-tight">{item.title}</p>
      </figcaption>
    </figure>
  );
}

export default function AnimationPortfolioB() {
  return (
    <>
      <Nav />
      <main className="bg-paper text-paper-ink">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-14 sm:pt-20">
          <Link href="/" className="text-sm text-paper-ink/60 hover:text-paper-ink">
            ← Back to home
          </Link>
          <h1 className="font-display mt-6 text-6xl uppercase leading-[0.9] tracking-tight sm:text-8xl">
            Animation
            <br />
            Portfolio
          </h1>
          <p className="mt-5 max-w-xl text-base text-paper-ink/75 sm:text-lg">
            Narrative animation built on 2D techniques, staged in environments
            and props modeled in 3D, with photo collage folded in. Finished
            films first, then the process behind them.
          </p>
        </div>

        <div className="sticky top-[58px] z-20 border-y border-paper-ink/10 bg-paper/95 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full border-2 border-paper-ink px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors hover:bg-paper-ink hover:text-paper"
              >
                {s.label} <span className="opacity-50">{s.items.length}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto max-w-6xl space-y-20 px-6 py-16">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-display text-4xl uppercase tracking-tight sm:text-5xl">
                {s.label}
              </h2>
              {s.id === "narrative" || s.id === "experimental" ? (
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {s.items.map((f) => (
                    <article key={f.src}>
                      <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-lg">
                        <EnlargeableVideo
                          src={f.src}
                          poster={f.poster}
                          password={f.password}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-paper-ink/55">
                        {f.category} · {f.date}
                      </p>
                      <h3 className="text-lg font-bold leading-tight">{f.title}</h3>
                      <p className="mt-1 text-sm text-paper-ink/70">{f.description}</p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
                  {s.items.map((i) => (
                    <ArtTile key={i.src} item={i} />
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
