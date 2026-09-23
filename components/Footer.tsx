import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brown/20 py-8">
      <div className="mx-auto max-w-5xl px-6 text-sm text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
