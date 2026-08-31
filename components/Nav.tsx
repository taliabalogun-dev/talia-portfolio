import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "My Roles" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
];

export default function Nav() {
  // Dark bar sits above the light hero panel, joined by a pale yellow seam.
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-accent bg-beige">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/#top"
          className="font-display relative pb-1 text-2xl uppercase tracking-tight text-ink after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-11 after:bg-accent"
        >
          {site.name}
        </Link>
        <ul className="hidden gap-8 text-base font-semibold uppercase tracking-wide sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/#contact"
          className="rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-accent-ink transition-opacity hover:opacity-85"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
