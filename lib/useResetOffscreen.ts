"use client";

import { useEffect, type RefObject } from "react";

/** Calls `reset` whenever the element scrolls (or is swiped) completely out of view, so a slideshow is back on its first slide when you return to it. */
export function useResetOffscreen(ref: RefObject<HTMLElement | null>, reset: () => void) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) reset();
    });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
