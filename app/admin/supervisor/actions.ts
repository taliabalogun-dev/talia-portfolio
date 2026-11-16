"use server";

import { cookies } from "next/headers";
import {
  SUPERVISOR_COOKIE,
  supervisorToken,
  verifySupervisorPassword,
} from "@/lib/supervisorSession";

export async function unlockSupervisor(password: string): Promise<{ ok: boolean }> {
  const token = supervisorToken();
  if (!token || !verifySupervisorPassword(password)) return { ok: false };
  (await cookies()).set(SUPERVISOR_COOKIE, token, {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin/supervisor",
  });
  return { ok: true };
}

export async function lockSupervisor() {
  (await cookies()).delete({ name: SUPERVISOR_COOKIE, path: "/admin/supervisor" });
}
