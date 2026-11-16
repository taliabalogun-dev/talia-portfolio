import "server-only";
import { createHmac, timingSafeEqual } from "crypto";
import { readdir, readFile, stat } from "fs/promises";
import path from "path";
import { cookies } from "next/headers";

export const SUPERVISOR_COOKIE = "supervisor_ok";
const DIR = path.join(process.cwd(), "supervisor-deliverables");

export const supervisorPasswordConfigured = Boolean(process.env.SUPERVISOR_PASSWORD);

const same = (a: string, b: string) => {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
};

export function verifySupervisorPassword(input: string) {
  const password = process.env.SUPERVISOR_PASSWORD;
  return Boolean(password && input) && same(input, password!);
}

/** What the cookie holds: derived from the password, so changing the password signs everyone out. */
export function supervisorToken() {
  const password = process.env.SUPERVISOR_PASSWORD;
  return password ? createHmac("sha256", password).update("supervisor-portal").digest("hex") : null;
}

export async function isSupervisor() {
  const token = supervisorToken();
  const got = (await cookies()).get(SUPERVISOR_COOKIE)?.value;
  return Boolean(token && got && same(got, token));
}

export type Deliverable = { name: string; title: string; updated: Date; bytes: number };

/** Every .html file in supervisor-deliverables/, newest first. */
export async function listDeliverables(): Promise<Deliverable[]> {
  let names: string[] = [];
  try {
    names = (await readdir(DIR)).filter((n) => /\.html?$/i.test(n) && !n.startsWith("."));
  } catch {
    return [];
  }
  const out = await Promise.all(
    names.map(async (name) => {
      const file = path.join(DIR, name);
      const [info, text] = await Promise.all([stat(file), readFile(file, "utf8")]);
      const title = text.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim();
      return {
        name,
        title: title || name.replace(/\.html?$/i, "").replace(/[-_]+/g, " "),
        updated: info.mtime,
        bytes: info.size,
      };
    }),
  );
  return out.sort((a, b) => b.updated.getTime() - a.updated.getTime());
}

/** Only names that are in the folder resolve, so a request cannot reach anything else. */
export async function readDeliverable(name: string) {
  const known = (await listDeliverables()).find((d) => d.name === name);
  if (!known) return null;
  return readFile(path.join(DIR, known.name));
}
