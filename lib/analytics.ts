import { Redis } from "@upstash/redis";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const TOTAL_KEY = "analytics:total";
const PATHS_KEY = "analytics:paths";
const dailyKey = (date: string) => `analytics:daily:${date}`;

export async function recordPageView(path: string) {
  if (!redis) return;
  const today = new Date().toISOString().slice(0, 10);
  try {
    await Promise.all([
      redis.incr(TOTAL_KEY),
      redis.hincrby(PATHS_KEY, path, 1),
      redis.incr(dailyKey(today)),
    ]);
  } catch {
    // Never let analytics failures affect the site.
  }
}

export type AnalyticsSnapshot = {
  total: number;
  byPath: { path: string; count: number }[];
  daily: { date: string; count: number }[];
};

const EMPTY_SNAPSHOT: AnalyticsSnapshot = { total: 0, byPath: [], daily: [] };

export async function getAnalytics(days = 14): Promise<AnalyticsSnapshot> {
  if (!redis) return EMPTY_SNAPSHOT;

  const dates: string[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().slice(0, 10));
  }

  try {
    const [total, pathsHash, dailyCounts] = await Promise.all([
      redis.get<number>(TOTAL_KEY),
      redis.hgetall<Record<string, number>>(PATHS_KEY),
      Promise.all(dates.map((d) => redis.get<number>(dailyKey(d)))),
    ]);

    const byPath = Object.entries(pathsHash ?? {})
      .map(([path, count]) => ({ path, count: Number(count) }))
      .sort((a, b) => b.count - a.count);

    const daily = dates.map((date, i) => ({ date, count: dailyCounts[i] ?? 0 }));

    return { total: total ?? 0, byPath, daily };
  } catch {
    return EMPTY_SNAPSHOT;
  }
}

export const analyticsConfigured = redis !== null;
