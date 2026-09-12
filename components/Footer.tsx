import Link from "next/link";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brown/20 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <Link
          href="/admin/analytics"
          title="Owner login only - not for employers or visitors"
          className="text-xs text-muted/60 transition-colors hover:text-muted"
        >
          Owner login
        </Link>
      </div>
    </footer>
  );
}
