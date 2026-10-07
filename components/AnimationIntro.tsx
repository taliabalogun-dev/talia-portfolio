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
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const easeIn = (t: number) => t * t * t;

// Everything below is in fractions of the screen, taken from the two storyboard frames.
const C0 = { x: 0.1, y: 0.77, r: 0.1 }; // frame 1: a small circle at the bottom left, plane inside it
const P0 = { x: 0.085, y: 0.79 }; // the plane in frame 1
const P1 = { x: 0.6, y: 0.36 }; // the plane in frame 2: the loop-the-loop starts here
const P2 = { x: 0.68, y: 0.32 }; // where the loop comes out
const P3 = { x: 1.1, y: 0.16 }; // and the plane climbs away off the top right

const TOTAL = 6400; // ms
const HOLD = 350; // a beat on the small circle before anything moves
const T_A = 0.4; // end of the zoom-and-fly phase
const T_B = 0.62; // end of the loop phase

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

    // Where the plane is at progress u (0 to 1), before the loop is added.
    const base = (u: number) => {
      if (u <= T_A) {
        const t = easeInOut(u / T_A);
        const a = px(P0);
        const b = px(P1);
        // a gentle arc: out along the bottom, then up
        const c = { x: lerp(a.x, b.x, 0.7), y: lerp(a.y, b.y, 0.15) };
        const x = (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * c.x + t * t * b.x;
        const y = (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * c.y + t * t * b.y;
        return { x, y };
      }
      if (u <= T_B) {
        const t = (u - T_A) / (T_B - T_A);
        const a = px(P1);
        const b = px(P2);
        return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
      }
      const t = easeIn((u - T_B) / (1 - T_B));
      const a = px(P2);
      const b = px(P3);
      return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
    };
    const pos = (u: number) => {
      const b = base(u);
      if (u > T_A && u < T_B) {
        const th = (2 * Math.PI * (u - T_A)) / (T_B - T_A);
        return { x: b.x + loopR * Math.sin(th), y: b.y - loopR * (1 - Math.cos(th)) };
      }
      return b;
    };
    const scaleAt = (u: number) => lerp(1, u > T_B ? 0.35 : 0.8, u > T_B ? (u - T_B) / (1 - T_B) : u / T_B);

    let raf = 0;
    let prevAng = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      const elapsed = Math.max(0, now - t0 - HOLD);
      const u = clamp01(elapsed / (TOTAL - HOLD));

      // The circle grows at a steady rate all the way, and follows the plane's flight path (without its
      // loop) while drifting to the middle of the screen, so it has uncovered every corner by the end.
      const followed = base(u);
      const cx = lerp(followed.x, vw / 2, u);
      const cy = lerp(followed.y, vh / 2, u);
      const r = lerp(C0.r * vmin, fullR, u);
      const mask = `radial-gradient(circle at ${cx}px ${cy}px, transparent ${Math.max(0, r - 0.6)}px, ${YELLOW} ${r + 0.6}px)`;
      ov.style.maskImage = mask;
      ov.style.webkitMaskImage = mask;

      // The plane: nose along the way it is travelling, a full turn through the loop.
      const p = pos(u);
      const e = 0.006;
      const a = pos(Math.max(0, u - e));
      const c = pos(Math.min(1, u + e));
      let ang = (Math.atan2(c.y - a.y, c.x - a.x) * 180) / Math.PI;
      while (ang - prevAng > 180) ang -= 360;
      while (ang - prevAng < -180) ang += 360;
      const inLoop = u > T_A - 0.01 && u < T_B + 0.01;
      if (!inLoop) ang = Math.max(-45, Math.min(45, ang));
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
    // Frame 1 straight away, then the movement after a beat.
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
