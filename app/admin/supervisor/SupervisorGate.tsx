"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { unlockSupervisor } from "./actions";

export default function SupervisorGate({ passwordConfigured }: { passwordConfigured: boolean }) {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(false);
    const result = await unlockSupervisor(password);
    setPending(false);
    setPassword("");
    if (result.ok) router.refresh();
    else setError(true);
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <span className="text-3xl">🔒</span>
      <h1 className="mt-3 font-display text-2xl uppercase tracking-tight">Supervisor Admin Portal</h1>
      <p className="mt-3 text-sm text-muted">Enter the password you were given to see the deliverables.</p>
      {!passwordConfigured && (
        <p className="mt-4 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-xs text-accent">
          SUPERVISOR_PASSWORD isn&apos;t set on the server yet, so no password will work until it is.
        </p>
      )}
      <form onSubmit={handleSubmit} className="mt-6 flex w-full flex-col gap-3">
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          autoFocus
          className="w-full rounded-full border border-ink/30 bg-transparent px-5 py-3 text-center text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent"
        />
        {error && <p className="text-sm text-red-400">Incorrect password</p>}
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-accent-ink transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {pending ? "Checking…" : "Open"}
        </button>
      </form>
    </main>
  );
}
