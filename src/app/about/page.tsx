


// //D:\project-management-saas-frontend\src\app\about\page.tsx
// import { Footer } from "@/components/layout/Footer";
// import { Navbar } from "@/components/layout/Navbar";

// export const metadata = {
//   title: "About | ProjectFlow",
//   description: "About ProjectFlow project management SaaS",
// };

// export default function AboutPage() {
//   return (
//     <div>
//       <Navbar />
//       <main className="mx-auto max-w-3xl px-4 py-12 space-y-4">
//         <h1 className="text-3xl font-bold">About ProjectFlow</h1>
//         <p className="text-slate-300">
//           ProjectFlow is a fullstack Project Management SaaS built for teams
//           with three roles: Admin, Owner and Member. It connects to a real
//           backend API for organizations, projects, tasks, payments and audit
//           logs.
//         </p>
//       </main>
//       <Footer/>
//     </div>
//   );
// }





import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "About | ProjectFlow",
  description: "About ProjectFlow project management SaaS",
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">
        {/* Hero */}
        <section className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="text-indigo-400 font-semibold text-sm tracking-wide">
            ABOUT PROJECTFLOW
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Built for modern teams who ship faster
          </h1>
          <p className="text-slate-300 text-lg">
            ProjectFlow is a fullstack Project Management SaaS with three roles
            — Admin, Owner and Member. It connects to a real backend API for
            organizations, projects, tasks, payments and audit logs.
          </p>
        </section>

        {/* Mission */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <h2 className="text-xl font-bold">Our mission</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Make project delivery simple: clear ownership, role-based access,
              task visibility and payment-ready plans — without complex setup.
            </p>
          </div>
          <div className="card p-6 space-y-3">
            <h2 className="text-xl font-bold">What powers it</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Next.js frontend + secure REST API backend with JWT auth, Prisma
              PostgreSQL, Stripe, bKash sandbox and Google OAuth for members.
            </p>
          </div>
        </section>

        {/* Stack */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Tech stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Next.js",
              "TypeScript",
              "Prisma",
              "PostgreSQL",
              "Stripe",
              "bKash",
              "JWT",
              "Google OAuth",
              "React Query",
              "Zod",
              "Tailwind",
              "Vercel",
            ].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-slate-700/80 bg-slate-800/40 px-3 py-3 text-center text-sm font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">
            Platform capabilities
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Authentication",
                items: [
                  "Email & password login",
                  "JWT access + refresh tokens",
                  "Google login (MEMBER)",
                  "Role-based redirects",
                ],
              },
              {
                title: "Workspace",
                items: [
                  "Organizations CRUD",
                  "Projects with filters",
                  "Tasks, status & priority",
                  "Comments & activity logs",
                ],
              },
              {
                title: "Payments",
                items: [
                  "Stripe Checkout (USD)",
                  "bKash sandbox (BDT)",
                  "Payment history",
                  "Plan-based pricing page",
                ],
              },
              {
                title: "Admin tools",
                items: [
                  "Dashboard statistics",
                  "Users management",
                  "Audit log viewer",
                  "Full system visibility",
                ],
              },
            ].map((b) => (
              <div key={b.title} className="card p-5 space-y-3">
                <h3 className="font-semibold text-indigo-300">{b.title}</h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {b.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Roles */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Who uses it</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                role: "ADMIN",
                badge: "bg-rose-500/15 text-rose-300",
                text: "Oversees users, organizations, projects, payments and audit trails.",
              },
              {
                role: "OWNER",
                badge: "bg-indigo-500/15 text-indigo-300",
                text: "Owns organizations, creates projects and assigns work to the team.",
              },
              {
                role: "MEMBER",
                badge: "bg-emerald-500/15 text-emerald-300",
                text: "Executes tasks, updates status, comments and tracks personal work.",
              },
            ].map((r) => (
              <div key={r.role} className="card p-5 space-y-3">
                <span className={`badge ${r.badge}`}>{r.role}</span>
                <p className="text-sm text-slate-300">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="card p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Start with ProjectFlow</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Explore pricing, try demo logins, or create an account and connect
            to the live backend API.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/register" className="btn btn-primary">
              Create Account
            </Link>
            <Link href="/login" className="btn btn-outline">
              Login
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}