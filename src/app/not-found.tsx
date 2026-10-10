import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="card p-8 max-w-md text-center space-y-4">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-slate-400">This page could not be found.</p>
        <Link href="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </main>
  );
}
