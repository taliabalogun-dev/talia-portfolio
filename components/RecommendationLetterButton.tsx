export default function RecommendationLetterButton({
  label,
  href,
  className = "",
}: {
  label: string;
  href?: string;
  className?: string;
}) {
  const base =
    "inline-flex min-h-[2.75rem] items-center justify-center rounded-full px-4 py-2 text-center text-xs font-bold uppercase tracking-wide";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed bg-[#d8d3c9] text-[#8a8478] ${className}`}
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      download
      className={`${base} bg-accent text-accent-ink transition-opacity hover:opacity-85 ${className}`}
    >
      {label}
    </a>
  );
}
