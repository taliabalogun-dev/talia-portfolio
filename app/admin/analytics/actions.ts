"use server";

import { cookies } from "next/headers";
import { verifyPassword } from "@/lib/adminSession";
import {
  getAnalytics,
  analyticsConfigured,
  type AnalyticsSnapshot,
} from "@/lib/analytics";

// Must match the cookie name checked in proxy.ts.
const OWNER_COOKIE = "owner_verified";
const OWNER_COOKIE_MAX_AGE = 60 * 60 * 24 * 400; // ~13 months

export async function unlockAnalytics(
  password: string,
): Promise<
  | { ok: true; data: AnalyticsSnapshot; storageConfigured: boolean }
  | { ok: false }
> {
  const valid = await verifyPassword(password);
  if (!valid) return { ok: false };

  // Marks this browser as the site owner's so future page views (on the
  // public site, not this dashboard) stop being counted in analytics.
  (await cookies()).set(OWNER_COOKIE, "1", {
    maxAge: OWNER_COOKIE_MAX_AGE,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  const data = await getAnalytics();
  return { ok: true, data, storageConfigured: analyticsConfigured };
}
