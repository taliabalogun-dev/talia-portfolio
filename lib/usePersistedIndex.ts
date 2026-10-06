"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * A slideshow position that survives the component being rebuilt (navigating away and back,
 * the browser discarding the page, a tab being restored). Kept in sessionStorage only, so a
 * fresh visit starts at the first slide again.
 */
const listeners = new Set<() => void>();

function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function read(key: string, count: number) {
  try {
    const saved = Number(window.sessionStorage.getItem(`slide:${key}`));
    return Number.isInteger(saved) && saved >= 0 && saved < count ? saved : 0;
  } catch {
    return 0;
  }
}

export function usePersistedIndex(key: string, count: number): [number, (i: number) => void] {
  const index = useSyncExternalStore(
    subscribe,
    () => read(key, count),
    () => 0,
  );
  const setIndex = useCallback(
    (i: number) => {
      try {
        window.sessionStorage.setItem(`slide:${key}`, String(i));
      } catch {
        /* storage unavailable: position is simply not remembered */
      }
      listeners.forEach((l) => l());
    },
    [key],
  );
  return [index, setIndex];
}
