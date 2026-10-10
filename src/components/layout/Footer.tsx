import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#0d1526] mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">
              Project<span className="text-indigo-400">Flow</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Modern project management SaaS with role-based access, tasks,
              and real payments.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">Support Email: mdtahsinislam334@gmail.com</p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-slate-200">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/features" className="hover:text-indigo-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-indigo-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-400">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-slate-200">Account</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/login" className="hover:text-indigo-400">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-indigo-400">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Roles */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-slate-200">Roles</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Admin Dashboard</li>
              <li>Owner Projects</li>
              <li>Member Tasks</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ProjectFlow. All rights reserved.</p>
          <p>Built with Next.js · Stripe · bKash</p>
        </div>
      </div>
    </footer>
  );
}