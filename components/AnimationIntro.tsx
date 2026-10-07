"use client";

import { useEffect, useRef, useState } from "react";
import PlaneFlights from "@/components/PlaneFlights";

const YELLOW = "#FFF8B9"; // the pale yellow from the storyboard frames
// The plane picture includes smoke behind it, so it is wider than the plane (see PlaneFlights).
const PIC_SCALE = 1.686;
const PIC_RATIO = 450 / 580;
const PLANE_CX = 0.715;
const PLANE_CY = 0.375;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Everything below is in fractions of the screen, taken from the two storyboard frames.
const C0 = { x: 0.1, y: 0.77, r: 0.1 }; // frame 1: a small circle at the bottom left, plane inside it
const P0 = { x: 0.085, y: 0.79 }; // the plane in frame 1
const P1 = { x: 0.6, y: 0.36 }; // the plane in frame 2: the loop-the-loop starts here
const P3 = { x: 1.1, y: 0.16 }; // and the plane climbs away off the top right
const ENTRY_ANGLE = (-28 * Math.PI) / 180; // the way the plane is heading as it flies into the loop

const TOTAL = 6400; // ms

/**
 * The opening of the Animation Portfolio: a circle of the page opens up on a pale yellow screen, growing
 * at a steady rate and following the avatar as it flies up and across, does a loop-the-loop, and keeps
 * widening until the whole page is showing. Once it has finished the regular plane flights begin.
 */
export default function AnimationIntro({ planeSrc }: { planeSrc: string }) {
  const overlay = useRef<HTMLDivElement>(null);
  const plane = useRef<HTMLImageElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ov = overlay.current;
    const el = plane.current;
    if (reduce || !ov || !el) {
      setDone(true);
      return;
    }
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden"; // no scrolling while the page is still being uncovered

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const vmin = Math.min(vw, vh);
    const planeW = Math.max(80, Math.min(vmin * 0.16, 190)); // the plane's own width
    const picW = planeW * PIC_SCALE;
    const picH = picW * PIC_RATIO;
    el.style.width = `${picW}px`;
    el.style.transformOrigin = `${PLANE_CX * 100}% ${PLANE_CY * 100}%`;
    const fullR = Math.hypot(vw, vh) * 0.55; // big enough to uncover every corner from the centre
    const loopR = vmin * 0.09;
    const px = (p: { x: number; y: number }) => ({ x: p.x * vw, y: p.y * vh });

    // One continuous flight path, flown at a steady speed: a curve in from the bottom left that meets the
    // loop head-on, the loop itself (which hands the plane back along the same heading), and a curve
    // climbing away. Sharing headings at every join means there is no stop, kink or change of speed.
    const pts: { x: number; y: number }[] = [];
    const bez = (a: { x: number; y: number }, c: { x: number; y: number }, b: { x: number; y: number }, t: number) => ({
      x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * c.x + t * t * b.x,
      y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * c.y + t * t * b.y,
    });
    const dir = { x: Math.cos(ENTRY_ANGLE), y: Math.sin(ENTRY_ANGLE) };
    const nrm = { x: dir.y, y: -dir.x }; // the loop climbs towards this side (up, on screen)
    const a0 = px(P0);
    const a1 = px(P1);
    const lead = Math.hypot(a1.x - a0.x, a1.y - a0.y) * 0.42;
    const ctrl = { x: a1.x - dir.x * lead, y: a1.y - dir.y * lead };
    for (let i = 0; i <= 90; i++) pts.push(bez(a0, ctrl, a1, i / 90));
    // The loop: forward travel plus a circle, so it starts and ends level and carries on in the same direction.
    const adv = loopR * 0.45;
    for (let i = 1; i <= 120; i++) {
      const th = (2 * Math.PI * i) / 120;
      const f = adv * th + loopR * Math.sin(th);
      const n = loopR * (1 - Math.cos(th));
      pts.push({ x: a1.x + dir.x * f + nrm.x * n, y: a1.y + dir.y * f + nrm.y * n });
    }
    const e0 = pts[pts.length - 1];
    const e1 = px(P3);
    const lead2 = Math.hypot(e1.x - e0.x, e1.y - e0.y) * 0.4;
    const ctrl2 = { x: e0.x + dir.x * lead2, y: e0.y + dir.y * lead2 };
    for (let i = 1; i <= 90; i++) pts.push(bez(e0, ctrl2, e1, i / 90));

    const cum = [0];
    for (let i = 1; i < pts.length; i++) {
      cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y));
    }
    const total = cum[cum.length - 1];
    const pos = (u: number) => {
      const d = clamp01(u) * total;
      let lo = 0;
      let hi = cum.length - 1;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (cum[mid] < d) lo = mid;
        else hi = mid;
      }
      const k = (d - cum[lo]) / (cum[hi] - cum[lo] || 1);
      return { x: lerp(pts[lo].x, pts[hi].x, k), y: lerp(pts[lo].y, pts[hi].y, k) };
    };
    // The plane's path with the loop smoothed out, for the circle to follow.
    const followed = (u: number) => {
      let x = 0;
      let y = 0;
      const n = 9;
      for (let i = 0; i < n; i++) {
        const q = pos(clamp01(u - 0.12 + (0.24 * i) / (n - 1)));
        x += q.x;
        y += q.y;
      }
      return { x: x / n, y: y / n };
    };
    const scaleAt = (u: number) => lerp(1, 0.35, u);

    let raf = 0;
    let prevAng = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      const u = clamp01((now - t0) / TOTAL);

      // The circle grows at a steady rate and follows the plane's flight (without its loop) while drifting
      // to the middle of the screen, so it has uncovered every corner by the end.
      const f = followed(u);
      const cx = lerp(f.x, vw / 2, u);
      const cy = lerp(f.y, vh / 2, u);
      const r = lerp(C0.r * vmin, fullR, u);
      const mask = `radial-gradient(circle at ${cx}px ${cy}px, transparent ${Math.max(0, r - 0.6)}px, ${YELLOW} ${r + 0.6}px)`;
      ov.style.maskImage = mask;
      ov.style.webkitMaskImage = mask;

      // The plane: nose along the way it is travelling, which turns a full circle through the loop.
      const p = pos(u);
      const e = 0.004;
      const q0 = pos(Math.max(0, u - e));
      const q1 = pos(Math.min(1, u + e));
      let ang = (Math.atan2(q1.y - q0.y, q1.x - q0.x) * 180) / Math.PI;
      while (ang - prevAng > 180) ang -= 360;
      while (ang - prevAng < -180) ang += 360;
      prevAng = ang;
      const s = scaleAt(u);
      el.style.opacity = "1";
      el.style.transform = `translate(${p.x - picW * PLANE_CX}px, ${p.y - picH * PLANE_CY}px) rotate(${ang}deg) scale(${s})`;

      if (u < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        root.style.overflow = prevOverflow;
        setDone(true);
      }
    };
    frame(t0);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      root.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <>
      {!done && (
        <>
          <noscript>
            <style>{`.page-intro{display:none!important}`}</style>
          </noscript>
          {/* The yellow screen with a round window onto the page. Its first look is set in vmin so the
              server-rendered page never flashes before the animation starts. */}
          <div
            ref={overlay}
            aria-hidden="true"
            className="page-intro pointer-events-none fixed inset-0 z-[60]"
            style={{
              background: YELLOW,
              WebkitMaskImage: `radial-gradient(circle at ${C0.x * 100}% ${C0.y * 100}%, transparent ${C0.r * 100}vmin, ${YELLOW} ${C0.r * 100}vmin)`,
              maskImage: `radial-gradient(circle at ${C0.x * 100}% ${C0.y * 100}%, transparent ${C0.r * 100}vmin, ${YELLOW} ${C0.r * 100}vmin)`,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={plane}
            src={planeSrc}
            alt=""
            aria-hidden="true"
            className="page-intro pointer-events-none fixed left-0 top-0 z-[61] h-auto will-change-transform"
            style={{ width: 200, opacity: 0, transform: "translate(-400px,-400px)" }}
          />
        </>
      )}
      <PlaneFlights src={planeSrc} enabled={done} />
    </>
  );
}
