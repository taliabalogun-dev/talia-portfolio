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
    <div className="flex flex-wrap gap-2 rounded-3xl bg-[#faf3d9] p-4 sm:p-5">
      {projects.map((p) => {
        const isActive = p.slug === activeSlug;
        const tileClasses = `font-display rounded-full px-4 py-2 text-sm uppercase tracking-tight transition-colors ${
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
