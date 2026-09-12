"use client";

import { useState, type FormEvent } from "react";
import { unlockAnalytics } from "./actions";
import type { AnalyticsSnapshot } from "@/lib/analytics";

export default function AnalyticsGate() {
  const [unlocked, setUnlocked] = useState<{
    data: AnalyticsSnapshot;
    storageConfigured: boolean;
  } | null>(null);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(false);
    const result = await unlockAnalytics(password);
    setPending(false);
    if (result.ok) {
      setUnlocked({ data: result.data, storageConfigured: result.storageConfigured });
    } else {
      setError(true);
    }
    setPassword("");
  }

  if (unlocked) {
    return (
      <Dashboard
        data={unlocked.data}
        storageConfigured={unlocked.storageConfigured}
        onSignOut={() => setUnlocked(null)}
      />
    );
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <span className="text-3xl">🔒</span>
      <h1 className="mt-3 font-display text-2xl uppercase tracking-tight">
        Owner Login
      </h1>
      <p className="mt-3 text-sm text-muted">
        This sign-in is reserved for the site owner, Talia Balogun, to view
        private traffic analytics. If you&apos;re an employer, collaborator,
        or just visiting - there&apos;s nothing behind here for you. Feel
        free to head back and explore the rest of the site.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex w-full flex-col gap-3">
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          autoFocus
          className="w-full rounded-full border border-beige/30 bg-transparent px-5 py-3 text-center text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {error && <p className="text-sm text-red-400">Incorrect password</p>}
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent-ink transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {pending ? "Checking..." : "Unlock"}
        </button>
      </form>
    </main>
  );
}

function Dashboard({
  data,
  storageConfigured,
  onSignOut,
}: {
  data: AnalyticsSnapshot;
  storageConfigured: boolean;
  onSignOut: () => void;
}) {
  const maxDaily = Math.max(1, ...data.daily.map((d) => d.count));

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-ink">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl uppercase tracking-tight">
          Site Analytics
        </h1>
        <button
          onClick={onSignOut}
          className="rounded-full border border-beige/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-accent"
        >
          Sign out
        </button>
      </div>

      {!storageConfigured && (
        <p className="mt-6 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
          Analytics storage isn&apos;t connected yet, so counts below are
          empty. Add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to
          your environment to start tracking visits.
        </p>
      )}

      <section className="mt-10 rounded-xl border border-beige/15 p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          Total site visits
        </span>
        <p className="mt-1 font-display text-5xl text-accent">
          {data.total.toLocaleString()}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
          Last 14 days
        </h2>
        <div className="mt-3 flex h-32 items-end gap-1.5">
          {data.daily.map((d) => (
            <div
              key={d.date}
              className="group relative flex flex-1 flex-col items-center justify-end"
            >
              <div
                className="w-full rounded-t bg-accent"
                style={{ height: `${Math.max(4, (d.count / maxDaily) * 100)}%` }}
              />
              <span className="pointer-events-none absolute -top-6 hidden whitespace-nowrap text-[10px] text-muted group-hover:block">
                {d.date}: {d.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">
          Views by page
        </h2>
        <div className="mt-3 flex flex-col gap-2">
          {data.byPath.length === 0 && (
            <p className="text-sm text-muted">No page views recorded yet.</p>
          )}
          {data.byPath.map(({ path, count }) => (
            <div
              key={path}
              className="flex items-center justify-between gap-4 border-b border-beige/10 py-2"
            >
              <span className="truncate text-sm">
                {path === "/" ? "Home" : path}
              </span>
              <span className="font-semibold text-accent">
                {count.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
