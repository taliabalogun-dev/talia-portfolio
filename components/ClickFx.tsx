"use client";

import { useEffect } from "react";

// Anything a visitor presses: real buttons, button-like links (the rounded pills), tabs and summary rows.
const PRESSABLE = 'button, [role="button"], [role="tab"], summary, a[class*="rounded-full"]';

/**
 * Gives every button a press-and-release animation: it squeezes in while pressed, then springs back with a
 * little overshoot. Done with one listener on the page so every button, present and future, gets it, and
 * with the `scale` property so it never fights a button's own tilt or movement.
 */
export default function ClickFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let pressed: HTMLElement | null = null;

    const release = () => {
      const el = pressed;
      pressed = null;
      if (!el) return;
      el.classList.remove("fx-down");
      el.classList.add("fx-up");
      el.addEventListener("animationend", () => el.classList.remove("fx-up"), { once: true });
    };

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;
      const el = (e.target as Element | null)?.closest<HTMLElement>(PRESSABLE);
      if (!el || el.matches(":disabled, [aria-disabled='true']")) return;
      const r = el.getBoundingClientRect();
      if (r.width > 360 && r.height > 220) return; // a full-picture overlay, not a button
      el.classList.remove("fx-up");
      el.classList.add("fx-down");
      pressed = el;
    };

    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerup", release, { passive: true });
    document.addEventListener("pointercancel", release, { passive: true });
    document.addEventListener("dragstart", release, { passive: true });
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", release);
      document.removeEventListener("pointercancel", release);
      document.removeEventListener("dragstart", release);
    };
  }, []);

  return null;
}
