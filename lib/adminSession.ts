import "server-only";
import { timingSafeEqual } from "crypto";

export async function verifyPassword(input: string): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !input) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(password);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const adminPasswordConfigured = Boolean(process.env.ADMIN_PASSWORD);
