"use client";

import { useEffect, useRef } from "react";
import { flightPaths } from "@/lib/flightPaths";

const MIN_GAP = 5000; // ms of calm between the end of one flight and the start of the next
const LINGER = 14000; // a second flight on a screen the viewer is just reading, ms after the first

/**
 * The avatar flies across the screen along one of the illustrated paths, one path at a time, doing a
 * loop-the-loop on the way and shrinking gradually as it heads away. Each screenful of the page gets
 * one or two flights: one when the viewer arrives (the very first shortly after load) and a second
 * once they start scrolling, or after a while if they stay put. Flights alternate sides and never overlap.
 */
export default function PlaneFlights({ src }: { src: string }) {
  const plane = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = plane.current;
    if (!el) return;

    let flying = false;
    let raf = 0;
    let lastEnd = -1e9;
    let lastStart = -1e9;
    let flightNo = 0;
    let lastPath = -1;
    const mountedAt = performance.now();
    const perPage = new Map<number, number>();
    const pageIndex = () => Math.floor(window.scrollY / Math.max(1, window.innerHeight));

    const fly = (page: number) => {
      flying = true;
      perPage.set(page, (perPage.get(page) ?? 0) + 1);
      lastStart = performance.now();
      const fromRight = flightNo % 2 === 1; // first from the left, then the right, and so on
      flightNo += 1;
      let pick = Math.floor(Math.random() * flightPaths.length);
      if (pick === lastPath) pick = (pick + 1) % flightPaths.length;
      lastPath = pick;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const size = vw < 640 ? 110 : 170;
      const height = size * (378 / 360);
      el.style.width = `${size}px`;

      // Everything is worked out as if flying to the right; a flight from the right is mirrored at the end.
      const inch = 96;
      const startX = -size;
      const endX = vw - inch;
      const pts = flightPaths[pick].map(([x, y]) => ({
        x: startX + x * (endX - startX),
        y: y * (vh - height) + height / 2,
      }));
      const cum = [0];
      for (let i = 1; i < pts.length; i++) {
        cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
      }
      const total = cum[cum.length - 1];
      const base = (p: number) => {
        const d = Math.min(1, Math.max(0, p)) * total;
        let i = 1;
        while (i < cum.length - 1 && cum[i] < d) i++;
        const k = (d - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
        return {
          x: pts[i - 1].x + (pts[i].x - pts[i - 1].x) * k,
          y: pts[i - 1].y + (pts[i].y - pts[i - 1].y) * k,
        };
      };
      // Shrinks steadily over the whole flight, to a speck by the time it vanishes.
      const scaleAt = (p: number) => 1 - 0.95 * p;

      // One loop-the-loop somewhere in the middle of the flight.
      const loopAt = 0.3 + Math.random() * 0.25;
      const radius = size * 0.5 * scaleAt(loopAt);
      const advance = 2 * Math.PI * radius * 0.5; // forward travel while looping
      const loopSpan = advance / Math.max(1, endX - startX);
      const baseY = base(loopAt).y;
      const up = baseY - 2 * radius - size * 0.5 > 8; // loop upwards if there is room, otherwise downwards
      const at = (p: number) => {
        const b = base(p);
        if (p <= loopAt || p >= loopAt + loopSpan) {
          return b;
        }
        const th = (2 * Math.PI * (p - loopAt)) / loopSpan;
        return {
          x: b.x + radius * Math.sin(th),
          y: b.y + (up ? -1 : 1) * radius * (1 - Math.cos(th)),
        };
      };

      const duration = Math.max(5500, total * 4.2) + 1800; // roughly 240px a second, plus the loop
      const t0 = performance.now();
      let prevAng = 0;
      el.style.opacity = "1";

      const frame = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const pos = at(p);
        // Nose along the direction of travel; through the loop it turns a full circle.
        const e = 0.004;
        const a = at(Math.max(0, p - e));
        const c = at(Math.min(1, p + e));
        let ang = (Math.atan2(c.y - a.y, c.x - a.x) * 180) / Math.PI;
        while (ang - prevAng > 180) ang -= 360;
        while (ang - prevAng < -180) ang += 360;
        const inLoop = p > loopAt - 0.01 && p < loopAt + loopSpan + 0.01;
        if (!inLoop) ang = Math.max(-20, Math.min(20, ang));
        prevAng = ang;
        const s = scaleAt(p);
        const X = fromRight ? vw - pos.x : pos.x;
        const rot = fromRight ? -ang : ang;
        el.style.opacity = String(Math.min(1, (1 - p) * 12));
        el.style.transform = `translate(${X - size / 2}px, ${pos.y - height / 2}px) rotate(${rot}deg) scale(${fromRight ? -s : s}, ${s})`;
        if (p < 1) {
          raf = requestAnimationFrame(frame);
        } else {
          el.style.opacity = "0";
          flying = false;
          lastEnd = performance.now();
        }
      };
      raf = requestAnimationFrame(frame);
    };

    // Decide, every so often, whether this screenful is due a flight.
    const tick = () => {
      if (flying || document.hidden) return;
      const now = performance.now();
      if (now - lastEnd < MIN_GAP) return;
      const page = pageIndex();
      const n = perPage.get(page) ?? 0;
      if (n >= 2) return;
      if (n === 0) {
        if (page === 0 && now - mountedAt < 1200) return; // let the page settle first
        fly(page);
      } else if ((page === 0 && window.scrollY >= 24) || now - lastStart >= LINGER) {
        // The second flight on the opening screen starts as scrolling begins; on any screen, a second
        // one follows after a while if the viewer stays put.
        fly(page);
      }
    };

    const timer = window.setInterval(tick, 600);
    return () => {
      window.clearInterval(timer);
      cancelAnimationFrame(raf);
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
