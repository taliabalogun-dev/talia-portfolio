"use client";

import type { ReactNode } from "react";
import { createPortal } from "react-dom";

/** Renders children straight into <body>, so a full-screen overlay is never trapped under (or clipped by) the section it was opened from. */
export default function Portal({ children }: { children: ReactNode }) {
  if (typeof document === "undefined") return null;
  return createPortal(children, document.body);
}
