"use client";

import { useRef } from "react";

const THRESHOLD = 50;

/** A touch on a video's bottom strip, where its native controls sit: a sideways drag there scrubs, it doesn't change slide. */
export function onVideoControls(e: React.TouchEvent) {
  const t = e.target;
  return t instanceof HTMLVideoElement && e.touches[0].clientY > t.getBoundingClientRect().bottom - 64;
}

/**
 * One-finger horizontal swipe, for moving through a slideshow. A pinch-zoom (two fingers),
 * a drag while the page is zoomed in, or a mostly-vertical scroll never counts as a swipe,
 * so zooming into a picture can't flip it to another slide.
 */
export function useSwipe(
  onPrev: () => void,
  onNext: () => void,
  /** Return true for a touch that should be left alone, e.g. one on a video's scrub bar. */
  ignore?: (e: React.TouchEvent) => boolean,
) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const cancelled = useRef(false);
  const wheel = useRef({ sum: 0, last: 0, locked: 0 });

  const zoomed = () => {
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    return !!vv && vv.scale > 1.02;
  };

  return {
    onTouchStart: (e: React.TouchEvent) => {
      cancelled.current = e.touches.length > 1 || zoomed() || !!ignore?.(e);
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
      // The slideshow underneath may also listen for swipes (portals bubble through React), so this one stops here.
      e.stopPropagation();
      if (dx > 0) onPrev();
      else onNext();
    },
    /** Sideways scroll on a trackpad or mouse: one slide per flick, not one per wheel tick. */
    onWheel: (e: React.WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) * 1.2 || e.deltaX === 0) return;
      const w = wheel.current;
      const now = e.timeStamp;
      if (now < w.locked) return;
      if (now - w.last > 200) w.sum = 0;
      w.last = now;
      w.sum += e.deltaX;
      if (Math.abs(w.sum) < 40) return;
      e.stopPropagation();
      const dir = w.sum;
      w.sum = 0;
      w.locked = now + 450;
      if (dir > 0) onNext();
      else onPrev();
    },
  };
}
