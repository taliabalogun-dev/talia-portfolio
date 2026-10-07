"use client";

import { useEffect, useRef } from "react";
import { flightPaths } from "@/lib/flightPaths";

/**
 * The avatar flies across the screen along one of the illustrated paths. It flies twice per visit,
 * one path at a time: once shortly after the page loads, and once as soon as the viewer starts
 * scrolling down. It sits above the page without catching clicks.
 */
export default function PlaneFlights({ src }: { src: string }) {
  const plane = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = plane.current;
    if (!el) return;

    let flying = false;
    let raf = 0;
    let loadTimer = 0;
    let started = 0; // flights begun so far: 0, 1 or 2
    let wantSecond = false;
    let lastPath = -1;

    const fly = () => {
      if (flying || started >= 2 || document.hidden) return;
      flying = true;
      started += 1;
      let pick = Math.floor(Math.random() * flightPaths.length);
      if (pick === lastPath) pick = (pick + 1) % flightPaths.length;
      lastPath = pick;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const size = vw < 640 ? 110 : 170;
      const height = size * (378 / 360);
      // Flights alternate: the first comes in from the left, the second from the right (the plane is mirrored).
      const fromRight = started % 2 === 0;
      el.style.width = `${size}px`;
      // Enters from just off one edge at full size, then shrinks as it heads away and has vanished
      // about an inch (96px) before the far edge.
      const inch = 96;
      const startX = fromRight ? vw + size : -size;
      const endX = fromRight ? inch : vw - inch;
      const shrinkOver = Math.max(240, vw * 0.4);
      const pts = flightPaths[pick].map(([x, y]) => ({
        x: startX + x * (endX - startX),
        y: y * (vh - height) + height / 2,
      }));
      const cum = [0];
      for (let i = 1; i < pts.length; i++) {
        cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
      }
      const total = cum[cum.length - 1];
      const duration = Math.max(5000, total * 4.2); // about 240px a second
      const t0 = performance.now();
      el.style.opacity = "1";

      const frame = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const d = p * total;
        let i = 1;
        while (i < cum.length - 1 && cum[i] < d) i++;
        const seg = cum[i] - cum[i - 1] || 1;
        const k = (d - cum[i - 1]) / seg;
        const x = pts[i - 1].x + (pts[i].x - pts[i - 1].x) * k;
        const y = pts[i - 1].y + (pts[i].y - pts[i - 1].y) * k;
        const ahead = pts[Math.min(pts.length - 1, i + 2)];
        const behind = pts[Math.max(0, i - 3)];
        // Tilt with the curve as if flying to the right; the mirrored flight tilts the other way.
        const slope = (Math.atan2(ahead.y - behind.y, Math.abs(ahead.x - behind.x)) * 180) / Math.PI;
        const angle = Math.max(-20, Math.min(20, fromRight ? -slope : slope));
        const remaining = Math.abs(endX - x);
        const scale = Math.max(0, Math.min(1, remaining / shrinkOver));
        el.style.transform = `translate(${x - size / 2}px, ${y - height / 2}px) rotate(${angle}deg) scale(${fromRight ? -scale : scale}, ${scale})`;
        if (p < 1) {
          raf = requestAnimationFrame(frame);
        } else {
          el.style.opacity = "0";
          flying = false;
          if (wantSecond && started < 2) {
            wantSecond = false;
            fly();
          }
        }
      };
      raf = requestAnimationFrame(frame);
    };

    const onScroll = () => {
      if (window.scrollY < 24 || started >= 2 || wantSecond) return;
      // The second flight starts as scrolling begins, but never overlaps the first.
      if (flying || started === 0) wantSecond = true;
      else fly();
    };

    // If the tab was in the background at load, take off when it comes to the front.
    const onVisible = () => {
      if (!document.hidden && started === 0) {
        window.clearTimeout(loadTimer);
        loadTimer = window.setTimeout(fly, 600);
      }
    };

    loadTimer = window.setTimeout(fly, 1200);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearTimeout(loadTimer);
      document.removeEventListener("visibilitychange", onVisible);
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={plane}
        src={src}
        alt=""
        className="absolute left-0 top-0 h-auto opacity-0 will-change-transform"
        style={{ width: 160 }}
      />
    </div>
  );
}
