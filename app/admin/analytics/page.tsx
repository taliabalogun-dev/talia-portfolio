import { redirect } from "next/navigation";
import {
  isAdminAuthenticated,
  verifyPassword,
  createAdminSession,
  clearAdminSession,
  adminPasswordConfigured,
} from "@/lib/adminSession";
import { getAnalytics, analyticsConfigured } from "@/lib/analytics";

export const metadata = {
  title: "Analytics",
  robots: { index: false, follow: false },
};

export default async function AnalyticsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authed = await isAdminAuthenticated();

  if (!authed) {
    const { error } = await searchParams;
    return <SignInGate showError={error === "1"} />;
  }

  const data = await getAnalytics();
  const maxDaily = Math.max(1, ...data.daily.map((d) => d.count));

  async function logout() {
    "use server";
    await clearAdminSession();
    redirect("/admin/analytics");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-ink">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl uppercase tracking-tight">
          Site Analytics
        </h1>
        <form action={logout}>
          <button className="rounded-full border border-beige/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-accent">
            Sign out
          </button>
        </form>
      </div>

      {!analyticsConfigured && (
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

function SignInGate({ showError }: { showError: boolean }) {
  async function login(formData: FormData) {
    "use server";
    const password = String(formData.get("password") ?? "");
    if (await verifyPassword(password)) {
      await createAdminSession();
      redirect("/admin/analytics");
    }
    redirect("/admin/analytics?error=1");
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

      {!adminPasswordConfigured && (
        <p className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-xs text-accent">
          ADMIN_PASSWORD isn&apos;t set yet, so sign-in is disabled. Add it to
          your environment to enable this page.
        </p>
      )}

      <form action={login} className="mt-6 flex w-full flex-col gap-3">
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          autoFocus
          className="w-full rounded-full border border-beige/30 bg-transparent px-5 py-3 text-center text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {showError && (
          <p className="text-sm text-red-400">Incorrect password</p>
        )}
        <button
          type="submit"
          className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent-ink transition-opacity hover:opacity-85"
        >
          Unlock
        </button>
      </form>
    </main>
  );
}
