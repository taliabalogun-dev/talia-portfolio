import type { ReactNode } from "react";

/** Thin outline icons for the /skills page, in the style of the By Talia service sheet. */
const paths: Record<string, ReactNode> = {
  // categories
  "Creative Strategy": (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2v.2h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" />
    </>
  ),
  "Content & Social": (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="m10.5 8.5 4 2.5-4 2.5v-5ZM8 21h8M12 17v4" />
    </>
  ),
  "Production & Logistics": (
    <>
      <rect x="4" y="4" width="16" height="17" rx="2" />
      <path d="M9 4V3h6v1M8.5 12.5l2 2 4-4M8.5 17.5h7" />
    </>
  ),
  Tools: (
    <>
      <path d="M14.5 5.5 18.5 9.5 9 19l-5 1 1-5L14.5 5.5Z" />
      <path d="m13 7 4 4M16 4l2-1 3 3-1 2" />
    </>
  ),
  // skills
  "Creator Briefs & Concept Development": (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  "Brand & Campaign Positioning": (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  "Hooks, Angles & Script Writing": (
    <>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  "Multi-Platform Social Content": (
    <>
      <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5" />
      <rect x="13" y="13" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  "Visual & Video Direction": (
    <>
      <rect x="3" y="6.5" width="13" height="11" rx="2" />
      <path d="m16 10.5 5-3v9l-5-3" />
    </>
  ),
  "On-Set & Live Event Production": (
    <>
      <path d="M4 10h16v10H4V10Z" />
      <path d="m4 10-.8-4.2 15.6-2.8.7 4M8 9l-1-4.6M13 8.2 12 3.6" />
    </>
  ),
  "Production Scheduling & Logistics": (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17M8 14.5h2M13 14.5h3M8 18h2" />
    </>
  ),
  "Vendor, Crew & Talent Coordination": (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16.5 14.2c2.6 0 4.5 2 4.5 4.8" />
    </>
  ),
  "Adobe Creative Suite": (
    <>
      <path d="M20 4c-5 1-9 5-10.5 9.5l1 1C16 13 19 9 20 4Z" />
      <path d="M9.5 13.5C7 13.5 5.5 15 5.5 17c0 .9-.7 1.6-1.5 2 2.5 1.2 6.5 1 7.5-2.5" />
    </>
  ),
  "Notion & Asana": (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2" />
      <path d="m8 8.5 1.3 1.3L11.5 7.5M8 14.5l1.3 1.3 2.2-2.3M14 9h3M14 15h3" />
    </>
  ),
};

export default function SkillIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const body = paths[name];
  if (!body) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {body}
    </svg>
  );
}
