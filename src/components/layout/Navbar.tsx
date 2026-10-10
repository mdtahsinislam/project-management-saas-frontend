

// //D:\project-management-saas-frontend\src\components\layout\Navbar.tsx

// "use client";

// import Link from "next/link";
// import { useAuthStore } from "@/store/authStore";
// import { getRoleRedirect } from "@/lib/utils";
// import { useRouter } from "next/navigation";

// export function Navbar() {
//   const { user, logout } = useAuthStore();
//   const router = useRouter();

//   return (
//     <header className="border-b border-[var(--border)] bg-[#0d1526]/90 backdrop-blur sticky top-0 z-40">
//       <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
//         <Link href="/" className="font-bold text-lg tracking-tight">
//           Project<span className="text-indigo-400">Flow</span>
//         </Link>

//         <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
//            <Link href="/">Home</Link>
//           <Link href="/features">Features</Link>
//           <Link href="/pricing">Pricing</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>

//         <div className="flex items-center gap-3">
//           {user ? (
//             <>
//               <Link
//                 href={getRoleRedirect(user.role)}
//                 className="btn btn-outline text-sm"
//               >
//                 Dashboard
//               </Link>
//               <button
//                 className="btn btn-primary text-sm"
//                 onClick={() => {
//                   logout();
//                   router.push("/login");
//                 }}
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login" className="btn btn-outline text-sm">
//                 Login
//               </Link>
//               <Link href="/register" className="btn btn-primary text-sm">
//                 Get Started
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { getRoleRedirect } from "@/lib/utils";
import { useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { user, logout } = useAuthStore();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    setOpen(false);
    router.push("/login");
  }

  return (
    <header className="border-b border-[var(--border)] bg-[#0d1526]/90 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg tracking-tight shrink-0"
          onClick={() => setOpen(false)}
        >
          Project<span className="text-indigo-400">Flow</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link
                href={getRoleRedirect(user.role)}
                className="btn btn-outline text-sm"
              >
                Dashboard
              </Link>
              <button className="btn btn-primary text-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-outline text-sm">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary text-sm">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            // Menu icon
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[#0d1526]">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {l.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-slate-800" />

            {user ? (
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  href={getRoleRedirect(user.role)}
                  onClick={() => setOpen(false)}
                  className="btn btn-outline text-sm w-full text-center"
                >
                  Dashboard
                </Link>
                <button
                  className="btn btn-primary text-sm w-full"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 pt-1">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="btn btn-outline text-sm w-full text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary text-sm w-full text-center"
                >
                  Get Started
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}