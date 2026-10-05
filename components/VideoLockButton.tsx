"use client";

import { useVideoGate } from "@/lib/videoGate";

/** A small padlock for a password-protected video; pressing it brings up the password wall. Hidden once unlocked. */
export default function VideoLockButton({
  src,
  password,
  className = "",
}: {
  src: string;
  password?: string;
  className?: string;
}) {
  const gate = useVideoGate(src, password);
  if (!gate.locked) return null;
  return (
    <button
      type="button"
      onClick={gate.ask}
      aria-label="Password protected - enter password"
      className={`grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white shadow-md ring-2 ring-white/70 transition-colors hover:bg-black/80 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    </button>
  );
}
