import Link from "next/link";
import { projects } from "@/content/site";

export default function RoleNav({
  activeSlug,
  onFeaturedClick,
}: {
  activeSlug: string;
  onFeaturedClick?: (slug: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-3 rounded-3xl bg-[#faf3d9] p-4 sm:grid-cols-2 sm:p-6">
      {projects.map((p) => {
        const isActive = p.slug === activeSlug;
        const keywords = p.tags.slice(0, 2);
        const tileClasses = `flex flex-col gap-3 rounded-2xl p-6 text-left transition-colors ${
          isActive
            ? "border-4 border-accent bg-beige"
            : "border-2 border-beige/20 bg-white hover:border-beige/40"
        }`;
        const badgeClasses = isActive
          ? "rounded-full bg-ink/10 px-3 py-1 text-sm uppercase tracking-wide text-ink/90"
          : "rounded-full bg-beige/10 px-3 py-1 text-sm uppercase tracking-wide text-beige/90";

        const content = (
          <>
            <span
              className={`font-display text-xl uppercase tracking-tight ${isActive ? "text-ink" : "text-beige"}`}
            >
              {p.navLabel}
            </span>
            <span className="flex flex-wrap gap-2">
              {keywords.map((kw) => (
                <span key={kw} className={badgeClasses}>
                  {kw}
                </span>
              ))}
            </span>
          </>
        );

        if (onFeaturedClick && p.featured) {
          return (
            <button
              key={p.slug}
              onClick={() => onFeaturedClick(p.slug)}
              className={tileClasses}
            >
              {content}
            </button>
          );
        }

        return (
          <Link key={p.slug} href={`/projects/${p.slug}`} className={tileClasses}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}
