"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const pillClass =
  "inline-flex shrink-0 items-center gap-1 rounded-full bg-ink/5 px-1.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-muted/80 ring-1 ring-ink/10 transition-colors hover:bg-ink/10 hover:text-ink min-[360px]:px-2 sm:text-[10px] sm:px-2.5 sm:py-1.5";

const labelClass = "hidden min-[360px]:inline";

export default function BackNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  if (pathname === "/") return null;

  const isRolePage = pathname.startsWith("/projects/");

  if (!isRolePage) {
    return (
      <Link href="/" className={pillClass}>
        ← <span className={labelClass}>Home</span>
      </Link>
    );
  }

  return (
    <div ref={wrapperRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={pillClass}
      >
        ← <span className={labelClass}>Back</span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-10 mt-1.5 flex w-max min-w-[9rem] flex-col overflow-hidden rounded-lg bg-beige shadow-xl ring-1 ring-ink/15">
          <Link
            href="/work"
            onClick={() => setOpen(false)}
            className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted transition-colors hover:bg-ink/10 hover:text-ink"
          >
            Back to all roles
          </Link>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="border-t border-ink/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-muted transition-colors hover:bg-ink/10 hover:text-ink"
          >
            Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
