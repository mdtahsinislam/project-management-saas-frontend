"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="card p-8 max-w-md text-center space-y-4">
        <h2 className="text-xl font-bold text-rose-400">Something went wrong</h2>
        <p className="text-sm text-slate-400">{error.message}</p>
        <button className="btn btn-primary" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
