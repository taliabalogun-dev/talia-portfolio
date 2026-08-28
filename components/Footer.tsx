import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-brown/15 py-8">
      <div className="mx-auto max-w-5xl px-6 text-sm text-brown/50">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
