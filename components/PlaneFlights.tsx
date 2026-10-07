"use client";

import { useEffect, useRef } from "react";
import { flightPaths } from "@/lib/flightPaths";

const COOLDOWN = 500; // shortest calm between one flight ending and the next taking off (mouse moves)
// The animation frames include the smoke puffs behind the plane, so the picture is wider than the plane itself.
const PIC_SCALE = 1.686; // picture width as a multiple of the plane's own width
const PIC_RATIO = 450 / 580; // picture height / width
const PLANE_CX = 0.715; // where the middle of the plane sits in the picture, across and down
const PLANE_CY = 0.375;
const GAP_MIN = 600; // the schedule: after each flight lands, the next goes up a second or so later
const GAP_MAX = 1600;

/**
 * The avatar flies across the screen along one of the illustrated paths, one path at a time, doing a
 * loop-the-loop on the way and shrinking gradually as it heads away. Flights run on a schedule, a short
 * random gap (about a second or two) after each one lands, and a mouse move (or a scroll or touch, on
 * phones) can send the next one up sooner. Most flights cross the middle of the screen. Flights alternate
 * sides and never overlap.
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
    let nextTimer = 0;
    let flightNo = 0;
    let lastPath = -1;

    const fly = () => {
      window.clearTimeout(nextTimer);
      flying = true;
      const fromRight = flightNo % 2 === 1; // first from the left, then the right, and so on
      flightNo += 1;
      // The two paths that cross the middle of the screen are chosen three times as often as the high and low ones.
      const weights: number[] = flightPaths.map((path, i) => (i === lastPath ? 0 : path[Math.floor(path.length / 2)][1] > 0.3 && path[Math.floor(path.length / 2)][1] < 0.7 ? 3 : 1));
      let roll = Math.random() * weights.reduce((a, b) => a + b, 0);
      let pick = 0;
      for (let i = 0; i < weights.length; i++) {
        roll -= weights[i];
        if (roll <= 0) {
          pick = i;
          break;
        }
      }
      lastPath = pick;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const size = vw < 640 ? 110 : 170;
      const height = size * (378 / 360);
      const picW = size * PIC_SCALE;
      const picH = picW * PIC_RATIO;
      el.style.width = `${picW}px`;
      el.style.transformOrigin = `${PLANE_CX * 100}% ${PLANE_CY * 100}%`;

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

      const duration = Math.max(4500, total * 3.3) + 1500; // roughly 300px a second, plus the loop
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
        el.style.transform = `translate(${X - picW * PLANE_CX}px, ${pos.y - picH * PLANE_CY}px) rotate(${rot}deg) scale(${fromRight ? -s : s}, ${s})`;
        if (p < 1) {
          raf = requestAnimationFrame(frame);
        } else {
          el.style.opacity = "0";
          flying = false;
          lastEnd = performance.now();
          scheduleNext();
        }
      };
      raf = requestAnimationFrame(frame);
    };

    const canFly = () => !flying && !document.hidden && performance.now() - lastEnd >= COOLDOWN;

    // The schedule: a short, slightly random gap after each landing.
    function scheduleNext() {
      window.clearTimeout(nextTimer);
      nextTimer = window.setTimeout(
        () => {
          if (canFly()) fly();
          else if (!flying) scheduleNext(); // tab in the background: look again shortly
        },
        GAP_MIN + Math.random() * (GAP_MAX - GAP_MIN),
      );
    }

    // Any movement sends the plane up sooner (if it isn't already flying).
    const onActivity = () => {
      if (canFly()) fly();
    };

    const first = window.setTimeout(() => {
      if (canFly()) fly();
      else scheduleNext();
    }, 1200);
    window.addEventListener("mousemove", onActivity, { passive: true });
    window.addEventListener("scroll", onActivity, { passive: true });
    window.addEventListener("touchstart", onActivity, { passive: true });
    return () => {
      window.clearTimeout(first);
      window.clearTimeout(nextTimer);
      window.removeEventListener("mousemove", onActivity);
      window.removeEventListener("scroll", onActivity);
      window.removeEventListener("touchstart", onActivity);
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
