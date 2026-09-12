import "server-only";
import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";

const COOKIE_NAME = "admin_session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

function sessionToken(password: string) {
  return createHash("sha256").update(password).digest("hex");
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;

  const cookie = (await cookies()).get(COOKIE_NAME)?.value;
  if (!cookie) return false;

  return safeEqual(cookie, sessionToken(password));
}

export async function verifyPassword(input: string): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !input) return false;
  return safeEqual(input, password);
}

export async function createAdminSession() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return;

  (await cookies()).set(COOKIE_NAME, sessionToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function clearAdminSession() {
  (await cookies()).delete(COOKIE_NAME);
}

export const adminPasswordConfigured = Boolean(process.env.ADMIN_PASSWORD);
