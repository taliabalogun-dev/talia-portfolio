"use server";

import { verifyPassword } from "@/lib/adminSession";
import {
  getAnalytics,
  analyticsConfigured,
  type AnalyticsSnapshot,
} from "@/lib/analytics";

export async function unlockAnalytics(
  password: string,
): Promise<
  | { ok: true; data: AnalyticsSnapshot; storageConfigured: boolean }
  | { ok: false }
> {
  const valid = await verifyPassword(password);
  if (!valid) return { ok: false };

  const data = await getAnalytics();
  return { ok: true, data, storageConfigured: analyticsConfigured };
}
