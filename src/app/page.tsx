



// //D:\project-management-saas-frontend\src\app\page.tsx

// import Link from "next/link";



// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";

// export default function HomePage() {
//   return (
//     <div>
//       <Navbar />
//       <main className="mx-auto max-w-7xl px-4 py-16">
//         <section className="grid lg:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <p className="text-indigo-400 font-semibold tracking-wide text-sm">
//               PROJECT MANAGEMENT SAAS
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Plan, track and ship work with{" "}
//               <span className="text-indigo-400">role-based power</span>
//             </h1>
//             <p className="text-slate-300 text-lg">
//               Admin, Owner and Member workflows — organizations, projects,
//               tasks, comments, audit logs and real payments (Stripe + bKash).
//             </p>
//             <div className="flex flex-wrap gap-3">
//               <Link href="/login" className="btn btn-primary">
//                 Try Demo Login
//               </Link>
//               <Link href="/pricing" className="btn btn-outline">
//                 View Pricing
//               </Link>
//             </div>
//           </div>

//           <div className="card p-6 space-y-4">
//             <h2 className="font-semibold text-lg">Connected Backend</h2>
//             <p className="text-sm text-slate-400 break-all">
//               {process.env.NEXT_PUBLIC_API_BASE_URL}
//             </p>
//             <ul className="text-sm space-y-2 text-slate-300">
//               <li>✅ JWT Auth + Refresh Token</li>
//               <li>✅ 3 Roles (ADMIN / OWNER / MEMBER)</li>
//               <li>✅ Organizations → Projects → Tasks</li>
//               <li>✅ Stripe + bKash Payments</li>
//               <li>✅ Admin Dashboard + Audit Logs</li>
//             </ul>
//           </div>
//         </section>

// {/* add few more glories section following the backend zip  */}
//  <section></section>
//  <section></section>
//  <section></section>

//       </main>
//       <Footer />
//     </div>
//   );
// }




import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 space-y-24">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-indigo-400 font-semibold tracking-wide text-sm">
              PROJECT MANAGEMENT SAAS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Plan, track and ship work with{" "}
              <span className="text-indigo-400">role-based power</span>
            </h1>
            <p className="text-slate-300 text-lg">
              Admin, Owner and Member workflows — organizations, projects,
              tasks, comments, audit logs and real payments (Stripe + bKash).
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/login" className="btn btn-primary">
                Try Demo Login
              </Link>
              <Link href="/pricing" className="btn btn-outline">
                View Pricing
              </Link>
            </div>
          </div>

          <div className="card p-6 space-y-4">
            <h2 className="font-semibold text-lg">Connected Backend</h2>
            {/* <p className="text-sm text-slate-400 break-all">
              {process.env.NEXT_PUBLIC_API_BASE_URL}
            </p> */}
            <ul className="text-sm space-y-2 text-slate-300">
              <li>✅ JWT Auth + Refresh Token</li>
              <li>✅ 3 Roles (ADMIN / OWNER / MEMBER)</li>
              <li>✅ Organizations → Projects → Tasks</li>
              <li>✅ Stripe + bKash Payments</li>
              <li>✅ Admin Dashboard + Audit Logs</li>
            </ul>
          </div>
        </section>

        {/* Features */}
        <section>
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Built on  APIs — auth, organizations, projects, tasks,
              payments and admin tools.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Secure Auth",
                desc: "Email/password login, JWT access + refresh tokens, and Google OAuth for members.",
              },
              {
                title: "Organizations",
                desc: "Create, update and soft-delete organizations with owner-level control.",
              },
              {
                title: "Projects",
                desc: "Manage projects with status, dates, filters, search and pagination.",
              },
              {
                title: "Tasks & Comments",
                desc: "Assign tasks, change status, set priority, and collaborate with comments.",
              },
              {
                title: "Payments",
                desc: "Subscribe with Stripe (USD) or bKash (BDT) — real sandbox integrations.",
              },
              {
                title: "Admin Control",
                desc: "Dashboard stats, users list, audit logs and full workspace visibility.",
              },
            ].map((f) => (
              <div key={f.title} className="card p-5 space-y-2">
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roles */}
        <section>
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-bold">Three roles, one platform</h2>
            <p className="text-slate-400">
              Each role gets a dedicated dashboard and permissions.
            {/* className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400" */}

            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 ">
            {[
              {
                role: "ADMIN",
                color: "text-cyan-300",
                badge: "bg-indigo-500/15 text-cyan-300",
                points: [
                  "Full system overview",
                  "Manage all users",
                  "Organizations & projects",
                  "Audit logs & payments",
                ],
              },
              {
                role: "OWNER",
                color: "text-indigo-300",
                badge: "bg-indigo-500/15 text-indigo-300",
                points: [
                  "Own organizations",
                  "Create projects & tasks",
                  "Assign team members",
                  "Track delivery status",
                ],
              },
              {
                role: "MEMBER",
                color: "text-emerald-300",
                badge: "bg-emerald-500/15 text-emerald-300",
                points: [
                  "View assigned tasks",
                  "Update task status",
                  "Add comments",
                  "Google login support",
                ],
              },
            ].map((r) => (
              <div key={r.role} className="card p-6 space-y-4">
                <span className={`badge ${r.badge}`}>{r.role}</span>
                <h3 className={`text-xl font-bold ${r.color}`}>{r.role}</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {r.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section>
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-3xl font-bold">How it works</h2>
            <p className="text-slate-400">From signup to shipping in four steps</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Register / Login", desc: "Email, demo roles, or Google (MEMBER)." },
              { step: "02", title: "Create workspace", desc: "Organizations and projects under Owner/Admin." },
              { step: "03", title: "Assign tasks", desc: "Status, priority, assignee and comments." },
              { step: "04", title: "Pay & scale", desc: "Stripe or bKash plans from Pricing." },
            ].map((s) => (
              <div key={s.step} className="card p-5 space-y-2">
                <p className="text-indigo-400 font-bold text-sm">{s.step}</p>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Payments highlight */}
        <section className="card p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Real payment methods
              </h2>
              <p className="text-slate-400">
                Test subscriptions with Stripe Checkout (USD) and bKash sandbox
                (BDT). Payment history lives in your dashboard.
              </p>
              <Link href="/pricing" className="btn btn-primary inline-flex">
                See Pricing Plans
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 text-center">
                <p className="text-2xl font-bold">Stripe</p>
                <p className="text-xs text-slate-400 mt-1">USD · Card</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5 text-center">
                <p className="text-2xl font-bold">bKash</p>
                <p className="text-xs text-slate-400 mt-1">BDT · Mobile</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-5 pb-8">
          <h2 className="text-3xl font-bold">Ready to manage projects?</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Login as Admin, Owner or Member — or continue with Google as a
            Member and start tracking tasks today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/register" className="btn btn-primary">
              Create Account
            </Link>
            <Link href="/login" className="btn btn-outline">
              Login
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}