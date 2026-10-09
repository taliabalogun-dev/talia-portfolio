import Link from "next/link";
import Nav from "@/components/Nav";
import EnlargeableVideo from "@/components/EnlargeableVideo";
import {
  featuredAnimationReel,
  storyboardReel,
  characterDesignReel,
  conceptArtReel,
  flattenSlides,
  type FeaturedAnimation,
} from "@/content/site";

type Piece = FeaturedAnimation & { discipline: string };

const tag = (items: FeaturedAnimation[], discipline: string): Piece[] =>
  items.map((i) => ({ ...i, discipline }));

const artwork: Piece[] = [
  ...tag(storyboardReel, "Storyboard"),
  ...tag(flattenSlides(characterDesignReel), "Character design"),
  ...tag(conceptArtReel, "Concept art"),
];

/* Chapter order, and which finished film (if any) opens each one. */
const chapters: { name: string; film?: string; blurb?: string }[] = [
  { name: "CTRL 4C", film: "CTRL 4C - Full Film" },
  { name: "Mind the Gap", blurb: "A silent ad about the dangers of littering in the London Underground." },
  { name: "Lost & Found", film: "Lost and Found" },
  { name: "Siren Song", blurb: "A short on the superstitious, mythical fear of bringing jewellery to Ilashe Beach." },
  { name: "Mulan", blurb: "A modern-day, Nigerian retelling of Disney's Mulan." },
  { name: "She-Giant", blurb: "A potential feature: character studies, an in-world app, and production stills." },
  { name: "Upgrade", blurb: "A potential short film: principal cast designs and rendered frames." },
  { name: "Ilashe", blurb: "A potential short film, in early character exploration." },
];

const filmOf = (title?: string) => featuredAnimationReel.find((f) => f.title === title);
const tiedFilms = new Set(chapters.map((c) => c.film).filter(Boolean));
const otherFilms = featuredAnimationReel.filter((f) => !tiedFilms.has(f.title));

export default function AnimationPortfolioC() {
  return (
    <>
      <Nav />
      <main className="bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-14 sm:pt-20">
          <Link href="/" className="text-sm text-paper/60 hover:text-paper">
            ← Back to home
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Selected animation, 2025 - 2026
          </p>
          <h1 className="font-display mt-3 text-6xl uppercase leading-[0.9] tracking-tight sm:text-8xl">
            Animation
            <br />
            Portfolio
          </h1>
          <p className="mt-5 max-w-xl text-base text-paper/70 sm:text-lg">
            Each film as its own chapter: the finished piece where there is
            one, and the storyboards, character design and concept art that
            built it.
          </p>
        </div>

        {chapters.map((c, n) => {
          const film = filmOf(c.film);
          const pieces = artwork.filter((p) => p.category === c.name);
          return (
            <section
              key={c.name}
              className="border-t border-paper/10 py-14 sm:py-20"
            >
              <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
                <div className="md:sticky md:top-24 md:self-start">
                  <p className="font-display text-7xl leading-none text-accent/90">
                    {String(n + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-2 text-4xl uppercase tracking-tight sm:text-5xl">
                    {c.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-paper/70">
                    {film ? film.description : c.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {film && (
                      <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-ink">
                        Film
                      </span>
                    )}
                    {[...new Set(pieces.map((p) => p.discipline))].map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-paper/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-paper/80"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {film && (
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-2xl">
                      <EnlargeableVideo
                        src={film.src}
                        poster={film.poster}
                        password={film.password}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-2 items-start gap-4">
                    {pieces.map((p, i) => (
                      <figure
                        key={p.src}
                        className={`overflow-hidden rounded-lg bg-black/30 ${
                          i === 0 && !film ? "col-span-2" : ""
                        }`}
                      >
                        {p.kind === "video" ? (
                          <video
                            src={p.src}
                            poster={p.poster}
                            controls
                            loop
                            playsInline
                            preload="metadata"
                            className="block w-full"
                          />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.src} alt={p.title} className="block w-full" loading="lazy" />
                        )}
                        <figcaption className="px-3 py-2 text-[11px] text-paper/70">
                          <span className="font-bold uppercase tracking-wide text-accent">
                            {p.discipline}
                          </span>{" "}
                          · {p.title}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-t border-paper/10 py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-4xl uppercase tracking-tight sm:text-5xl">
              Experimental animation
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {otherFilms.map((f) => (
                <article key={f.src}>
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-xl">
                    <EnlargeableVideo
                      src={f.src}
                      poster={f.poster}
                      password={f.password}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-accent">
                    {f.category} · {f.date}
                  </p>
                  <h3 className="text-base font-bold leading-tight">{f.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
