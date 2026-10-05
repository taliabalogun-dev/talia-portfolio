"use client";

import { useSyncExternalStore } from "react";

/**
 * A polite viewing gate for password-protected videos (not real security).
 * Which passwords have been entered, and which videos are showing the password
 * wall, live in memory only: a page refresh locks everything again.
 */
const unlockedPasswords = new Set<string>();
const asking = new Set<string>();
const listeners = new Set<() => void>();
let version = 0;

function emit() {
  version += 1;
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

export function useVideoGate(src: string, password?: string) {
  useSyncExternalStore(subscribe, () => version, () => 0);
  const locked = Boolean(password) && !unlockedPasswords.has(password!);
  return {
    locked,
    asking: locked && asking.has(src),
    ask: () => {
      asking.add(src);
      emit();
    },
    cancel: () => {
      asking.delete(src);
      emit();
    },
    tryUnlock: (attempt: string) => {
      if (attempt !== password) return false;
      unlockedPasswords.add(password!);
      emit();
      return true;
    },
  };
}
