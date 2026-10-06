"use client";

import { useRef } from "react";

const THRESHOLD = 50;

/**
 * One-finger horizontal swipe, for moving through a slideshow. A pinch-zoom (two fingers),
 * a drag while the page is zoomed in, or a mostly-vertical scroll never counts as a swipe,
 * so zooming into a picture can't flip it to another slide.
 */
export function useSwipe(onPrev: () => void, onNext: () => void) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const cancelled = useRef(false);

  const zoomed = () => {
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    return !!vv && vv.scale > 1.02;
  };

  return {
    onTouchStart: (e: React.TouchEvent) => {
      cancelled.current = e.touches.length > 1 || zoomed();
      start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    },
    onTouchMove: (e: React.TouchEvent) => {
      if (e.touches.length > 1 || zoomed()) cancelled.current = true;
    },
    onTouchEnd: (e: React.TouchEvent) => {
      const s = start.current;
      if (e.touches.length === 0) start.current = null;
      if (!s || cancelled.current || zoomed()) {
        if (e.touches.length === 0) cancelled.current = false;
        return;
      }
      const dx = e.changedTouches[0].clientX - s.x;
      const dy = e.changedTouches[0].clientY - s.y;
      if (Math.abs(dx) < THRESHOLD || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      if (dx > 0) onPrev();
      else onNext();
    },
  };
}
