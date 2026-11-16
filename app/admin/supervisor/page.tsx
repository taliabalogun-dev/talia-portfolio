import { redirect } from "next/navigation";
import SupervisorGate from "./SupervisorGate";
import { lockSupervisor } from "./actions";
import { isSupervisor, listDeliverables, supervisorPasswordConfigured } from "@/lib/supervisorSession";

export const metadata = {
  title: "Supervisor Admin Portal",
  robots: { index: false, follow: false },
};

// Reads the password, the cookie and the folder at request time, not at build.
export const dynamic = "force-dynamic";

const when = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default async function SupervisorPage() {
  if (!(await isSupervisor())) {
    return <SupervisorGate passwordConfigured={supervisorPasswordConfigured} />;
  }
  const items = await listDeliverables();

  async function signOut() {
    "use server";
    await lockSupervisor();
    redirect("/admin/supervisor");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-ink">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl uppercase tracking-tight">Supervisor Admin Portal</h1>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-full border border-ink/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:border-accent"
          >
            Sign out
          </button>
        </form>
      </div>
      <p className="mt-3 text-sm text-muted">
        Deliverables to check. Open one to read it, or save it as an HTML file.
      </p>

      {items.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-ink/15 px-5 py-8 text-center text-sm text-muted">
          Nothing here yet.
        </p>
      ) : (
        <ul className="mt-8 flex flex-col gap-4">
          {items.map((d) => (
            <li
              key={d.name}
              className="flex flex-col gap-4 rounded-2xl border border-ink/15 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <h2 className="truncate text-lg font-semibold tracking-tight">{d.title}</h2>
                <p className="mt-0.5 text-xs text-muted">
                  {d.name} · updated {when(d.updated)} · {Math.max(1, Math.round(d.bytes / 1024))} KB
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <a
                  href={`/admin/supervisor/file/${encodeURIComponent(d.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-wide text-accent-ink transition-opacity hover:opacity-85"
                >
                  Open
                </a>
                <a
                  href={`/admin/supervisor/file/${encodeURIComponent(d.name)}?download`}
                  download={d.name}
                  className="rounded-full border-2 border-ink px-5 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-hero-ink"
                >
                  Save as HTML
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
