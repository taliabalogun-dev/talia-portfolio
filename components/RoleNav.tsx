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
    <div className="flex flex-wrap gap-1.5 rounded-3xl bg-[#faf3d9] p-3 sm:gap-2 sm:p-5">
      {projects.map((p) => {
        const isActive = p.slug === activeSlug;
        const tileClasses = `font-display rounded-full px-3 py-1.5 text-xs uppercase tracking-tight transition-colors sm:px-4 sm:py-2 sm:text-sm ${
          isActive
            ? "border-2 border-accent bg-beige text-ink"
            : "border-2 border-beige/20 bg-white text-beige hover:border-beige/40"
        }`;

        if (onFeaturedClick && p.featured) {
          return (
            <button
              key={p.slug}
              onClick={() => onFeaturedClick(p.slug)}
              className={tileClasses}
            >
              {p.navLabel}
            </button>
          );
        }

        return (
          <Link key={p.slug} href={`/projects/${p.slug}`} className={tileClasses}>
            {p.navLabel}
          </Link>
        );
      })}
    </div>
  );
}
