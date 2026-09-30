import { Redis } from "@upstash/redis";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const UNIQUE_TOTAL_KEY = "analytics:unique_total";
const REPEAT_TOTAL_KEY = "analytics:repeat_total";
const UNIQUE_PATHS_KEY = "analytics:unique_paths";
const REPEAT_PATHS_KEY = "analytics:repeat_paths";
const SEEN_KEY = "analytics:seen";
const seenPathKey = (path: string) => `analytics:seen:${path}`;
const dailyKey = (date: string) => `analytics:daily:${date}`;

const DAILY_TTL_SECONDS = 60 * 60 * 24 * 90; // 90 days, only the last 14 are shown

/** Records a page view, deduping by visitorId so repeat views from the same
 * browser count separately instead of inflating the main totals. */
export async function recordPageView(path: string, visitorId: string) {
  if (!redis) return;
  const today = new Date().toISOString().slice(0, 10);

  try {
    const [siteNew, pathNew] = await Promise.all([
      redis.sadd(SEEN_KEY, visitorId),
      redis.sadd(seenPathKey(path), visitorId),
    ]);

    await Promise.all([
      siteNew ? redis.incr(UNIQUE_TOTAL_KEY) : redis.incr(REPEAT_TOTAL_KEY),
      pathNew
        ? redis.hincrby(UNIQUE_PATHS_KEY, path, 1)
        : redis.hincrby(REPEAT_PATHS_KEY, path, 1),
      redis
        .sadd(dailyKey(today), visitorId)
        .then(() => redis.expire(dailyKey(today), DAILY_TTL_SECONDS)),
    ]);
  } catch {
    // Never let analytics failures affect the site.
  }
}

export type AnalyticsSnapshot = {
  /** Unique visitors, site-wide. */
  total: number;
  /** Additional views from browsers already counted in `total`. */
  repeatTotal: number;
  byPath: { path: string; count: number; repeat: number }[];
  /** Unique visitors per day, last N days. */
  daily: { date: string; count: number }[];
};

const EMPTY_SNAPSHOT: AnalyticsSnapshot = {
  total: 0,
  repeatTotal: 0,
  byPath: [],
  daily: [],
};

export async function getAnalytics(days = 14): Promise<AnalyticsSnapshot> {
  if (!redis) return EMPTY_SNAPSHOT;

  const dates: string[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().slice(0, 10));
  }

  try {
    const [total, repeatTotal, uniquePaths, repeatPaths, dailyCounts] =
      await Promise.all([
        redis.get<number>(UNIQUE_TOTAL_KEY),
        redis.get<number>(REPEAT_TOTAL_KEY),
        redis.hgetall<Record<string, number>>(UNIQUE_PATHS_KEY),
        redis.hgetall<Record<string, number>>(REPEAT_PATHS_KEY),
        Promise.all(dates.map((d) => redis.scard(dailyKey(d)))),
      ]);

    const repeatMap = repeatPaths ?? {};
    const byPath = Object.entries(uniquePaths ?? {})
      .map(([path, count]) => ({
        path,
        count: Number(count),
        repeat: Number(repeatMap[path] ?? 0),
      }))
      .sort((a, b) => b.count - a.count);

    const daily = dates.map((date, i) => ({ date, count: dailyCounts[i] ?? 0 }));

    return {
      total: total ?? 0,
      repeatTotal: repeatTotal ?? 0,
      byPath,
      daily,
    };
  } catch {
    return EMPTY_SNAPSHOT;
  }
}

export const analyticsConfigured = redis !== null;
