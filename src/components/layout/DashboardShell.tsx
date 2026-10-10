
// // // //D:\project-management-saas-frontend\src\components\layout\DashboardShell.tsx
// // // "use client";

// // // import Link from "next/link";
// // // import { usePathname, useRouter } from "next/navigation";
// // // import { useAuthStore } from "@/store/authStore";
// // // import { useEffect } from "react";
// // // import { cn } from "@/lib/utils";

// // // type NavItem = { href: string; label: string };

// // // export function DashboardShell({
// // //   title,
// // //   nav,
// // //   children,
// // //   allowedRoles,
// // // }: {
// // //   title: string;
// // //   nav: NavItem[];
// // //   children: React.ReactNode;
// // //   allowedRoles: Array<"ADMIN" | "OWNER" | "MEMBER">;
// // // }) {
// // //   const { user, isHydrated, logout, hasRole } = useAuthStore();
// // //   const router = useRouter();
// // //   const pathname = usePathname();

// // //   useEffect(() => {
// // //     if (!isHydrated) return;
// // //     if (!user) {
// // //       router.replace("/login");
// // //       return;
// // //     }
// // //     if (!hasRole(...allowedRoles)) {
// // //       router.replace("/login");
// // //     }
// // //   }, [isHydrated, user, hasRole, allowedRoles, router]);

// // //   if (!isHydrated || !user) {
// // //     return (
// // //       <div className="min-h-screen grid place-items-center text-slate-400">
// // //         Loading...
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
// // //       <aside className="border-r border-[var(--border)]  bg-[#0d1526] p-4 ">
// // //         <div className="font-bold text-lg mb-6">
// // //            <Link href="/"> Project<span className="text-indigo-400">Flow</span></Link>
// // //         </div>
// // //         <p className="text-xs text-slate-400 mb-4">
// // //           {user.name} · <span className="text-indigo-300">{user.role}</span>
// // //         </p>
// // //         <nav className="space-y-1">
// // //           {nav.map((item) => (
// // //             <Link
// // //               key={item.href}
// // //               href={item.href}
// // //               className={cn(
// // //                 "block rounded-lg px-3 py-2 text-sm",
// // //                 pathname === item.href
// // //                   ? "bg-indigo-500/20 text-indigo-300"
// // //                   : "text-slate-300 hover:bg-white/5"
// // //               )}
// // //             >
// // //               {item.label}
// // //             </Link>
// // //           ))}
// // //         </nav>
// // //         <button
// // //           className="btn btn-outline w-full mt-8 text-sm"
// // //           onClick={() => {
// // //             logout();
// // //             router.push("/login");
// // //           }}
// // //         >
// // //           Logout
// // //         </button>
// // //       </aside>
// // //       <main className="p-6">
// // //         <h1 className="text-2xl font-bold mb-6">{title}</h1>
// // //         {children}
// // //       </main>
// // //     </div>
// // //   );
// // // }




// // //D:\project-management-saas-frontend\src\components\layout\DashboardShell.tsx
// // "use client";

// // import Link from "next/link";
// // import { usePathname, useRouter } from "next/navigation";
// // import { useAuthStore } from "@/store/authStore";
// // import { useEffect } from "react";
// // import { cn } from "@/lib/utils";

// // type NavItem = { href: string; label: string };

// // export function DashboardShell({
// //   title,
// //   nav,
// //   children,
// //   allowedRoles,
// // }: {
// //   title: string;
// //   nav: NavItem[];
// //   children: React.ReactNode;
// //   allowedRoles: Array<"ADMIN" | "OWNER" | "MEMBER">;
// // }) {
// //   const { user, isHydrated, logout, hasRole } = useAuthStore();
// //   const router = useRouter();
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     if (!isHydrated) return;
// //     if (!user) {
// //       router.replace("/login");
// //       return;
// //     }
// //     if (!hasRole(...allowedRoles)) {
// //       router.replace("/login");
// //     }
// //   }, [isHydrated, user, hasRole, allowedRoles, router]);

// //   if (!isHydrated || !user) {
// //     return (
// //       <div className="min-h-screen grid place-items-center text-slate-400">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen grid md:grid-cols-[240px_1fr]">
// //       {/* এখানে sticky, top-0, h-screen এবং overflow-y-auto যোগ করা হয়েছে */}
// //       <aside className="sticky top-0 h-screen overflow-y-auto border-r border-[var(--border)] bg-[#0d1526] p-4">
// //         <div className="font-bold text-lg mb-6">
// //            <Link href="/"> Project<span className="text-indigo-400">Flow</span></Link>
// //         </div>
        
// //         <p className="text-xs text-slate-400 mb-4">
// //           {user.name} · <span className="text-indigo-300">{user.role}</span>
// //         </p>
// //         <nav className="space-y-1">
// //           {nav.map((item) => (
// //             <Link
// //               key={item.href}
// //               href={item.href}
// //               className={cn(
// //                 "block rounded-lg px-3 py-2 text-sm",
// //                 pathname === item.href
// //                   ? "bg-indigo-500/20 text-indigo-300"
// //                   : "text-slate-300 hover:bg-white/5"
// //               )}
// //             >
// //               {item.label}
// //             </Link>
// //           ))}
// //         </nav>
// //         <button
// //           className="btn btn-outline w-full mt-8 text-sm"
// //           onClick={() => {
// //             logout();
// //             router.push("/login");
// //           }}
// //         >
// //           Logout
// //         </button>
// //       </aside>
// //       <main className="p-6">
// //         <h1 className="text-2xl font-bold mb-6">{title}</h1>
// //         {children}
// //       </main>
// //     </div>
// //   );
// // }



// // D:\project-management-saas-frontend\src\components\layout\DashboardShell.tsx
// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/authStore";
// import { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import { PanelLeftClose, PanelLeftOpen, Menu, X } from "lucide-react";

// type NavItem = { href: string; label: string };

// export function DashboardShell({
//   title,
//   nav,
//   children,
//   allowedRoles,
// }: {
//   title: string;
//   nav: NavItem[];
//   children: React.ReactNode;
//   allowedRoles: Array<"ADMIN" | "OWNER" | "MEMBER">;
// }) {
//   const { user, isHydrated, logout, hasRole } = useAuthStore();
//   const router = useRouter();
//   const pathname = usePathname();

//   // Sidebar toggle state
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   useEffect(() => {
//     if (!isHydrated) return;
//     if (!user) {
//       router.replace("/login");
//       return;
//     }
//     if (!hasRole(...allowedRoles)) {
//       router.replace("/login");
//     }
//   }, [isHydrated, user, hasRole, allowedRoles, router]);

//   if (!isHydrated || !user) {
//     return (
//       <div className="min-h-screen grid place-items-center text-slate-400">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col md:flex-row relative">
      
//       {/* Mobile Top Header */}
//       <div className="md:hidden flex items-center justify-between p-4 border-b border-[var(--border)] bg-[#0d1526]">
//         <div className="font-bold text-lg">
//           <Link href="/">
//             Project<span className="text-indigo-400">Flow</span>
//           </Link>
//         </div>
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="p-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
//           aria-label="Toggle Menu"
//         >
//           {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Backdrop overlay for Mobile view */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={cn(
//           "fixed md:sticky top-0 left-0 z-50 h-screen border-r border-[var(--border)] bg-[#0d1526] p-4 flex flex-col transition-all duration-300 ease-in-out shrink-0 overflow-y-auto",
//           // Mobile open/close
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
//           // Desktop collapse logic
//           isSidebarOpen ? "md:w-64" : "md:w-20"
//         )}
//       >
//         {/* Header inside Sidebar (Logo & Desktop Slider Toggle Button) */}
//         <div className="flex items-center justify-between mb-6">
//           <div className={cn("font-bold text-lg overflow-hidden transition-all duration-300", !isSidebarOpen && "md:w-0 md:opacity-0")}>
//             <Link href="/" className="whitespace-nowrap">
//               Project<span className="text-indigo-400">Flow</span>
//             </Link>
//           </div>

//           {/* Slider Icon Button (ProjectFlow এর ডানপাশে থাকবে) */}
//           <button
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-auto"
//             title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}
//           >
//             {isSidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
//           </button>
//         </div>

//         {/* User Info */}
//         <div className={cn("text-xs text-slate-400 mb-4 transition-all duration-300 overflow-hidden", !isSidebarOpen && "md:hidden")}>
//           <p className="truncate">
//             {user.name} · <span className="text-indigo-300">{user.role}</span>
//           </p>
//         </div>

//         {/* Navigation Items */}
//         <nav className="space-y-1 flex-1">
//           {nav.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               title={!isSidebarOpen ? item.label : undefined}
//               className={cn(
//                 "flex items-center rounded-lg px-3 py-2 text-sm transition-colors whitespace-nowrap",
//                 pathname === item.href
//                   ? "bg-indigo-500/20 text-indigo-300 font-medium"
//                   : "text-slate-300 hover:bg-white/5",
//                 !isSidebarOpen && "md:justify-center"
//               )}
//             >
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>

//         {/* Logout Button */}
//         <button
//           className={cn(
//             "btn btn-outline w-full mt-auto text-sm transition-all duration-300",
//             !isSidebarOpen && "md:px-0 md:text-xs"
//           )}
//           onClick={() => {
//             logout();
//             router.push("/login");
//           }}
//         >
//           {isSidebarOpen ? "Logout" : "Exit"}
//         </button>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 p-6 overflow-x-hidden">
//         <h1 className="text-2xl font-bold mb-6">{title}</h1>
//         {children}
//       </main>
//     </div>
//   );
// }






// D:\project-management-saas-frontend\src\components\layout\DashboardShell.tsx

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  X,
  LogOut,
  ChevronRight,
  LayoutDashboard,
  Sparkles,
  UserCircle,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
};

export function DashboardShell({
  title,
  nav,
  children,
  allowedRoles,
}: {
  title: string;
  nav: NavItem[];
  children: React.ReactNode;
  allowedRoles: Array<"ADMIN" | "OWNER" | "MEMBER">;
}) {
  const { user, isHydrated, logout, hasRole } = useAuthStore();

  const router = useRouter();
  const pathname = usePathname();

  // =========================================================
  // Sidebar State
  // =========================================================

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // =========================================================
  // Authentication / Role Protection
  // =========================================================

  useEffect(() => {
    if (!isHydrated) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (!hasRole(...allowedRoles)) {
      router.replace("/login");
    }
  }, [isHydrated, user, hasRole, allowedRoles, router]);

  // =========================================================
  // Close mobile sidebar when route changes
  // =========================================================

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  // =========================================================
  // Loading State
  // =========================================================

  if (!isHydrated || !user) {
    return (
      <div className="min-h-screen bg-[#070b14] grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-indigo-400 animate-pulse" />
            </div>

            <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-xl animate-pulse" />
          </div>

          <p className="text-sm text-slate-400 animate-pulse">
            Loading ProjectFlow...
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // Main Dashboard
  // =========================================================

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 relative overflow-x-hidden">
      {/* =====================================================
          Background Decorative Glow
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />

        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-purple-600/5 blur-[120px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      {/* =====================================================
          Mobile Header
      ====================================================== */}

      <header className="md:hidden sticky top-0 z-[60] h-16 border-b border-white/[0.07] bg-[#0b1120]/95 backdrop-blur-xl">
        <div className="h-full px-4 flex items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            className="group flex items-center gap-2.5"
          >
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <LayoutDashboard className="h-4 w-4 text-white" />
              </div>

              <div className="absolute -inset-1 rounded-xl bg-indigo-500/20 blur-md -z-10" />
            </div>

            <div className="font-bold text-lg tracking-tight">
              Project
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Flow
              </span>
            </div>
          </Link>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="h-10 w-10 rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/[0.08] transition-all active:scale-95"
            aria-label="Toggle sidebar"
          >
            {isSidebarOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          Mobile Backdrop
      ====================================================== */}

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* =====================================================
          Sidebar
      ====================================================== */}

      <aside
        className={cn(
          `
          fixed
          top-0
          left-0
          z-50
          h-screen
          flex
          flex-col
          border-r
          border-white/[0.07]
          bg-[#0a1020]/95
          backdrop-blur-2xl
          shadow-2xl
          transition-all
          duration-300
          ease-in-out
          overflow-hidden
          `,

          // Width
          isSidebarOpen
            ? "w-72"
            : "w-20",

          // Mobile
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* =================================================
            Sidebar Header
        ================================================== */}

        <div className="h-20 px-4 border-b border-white/[0.06] flex items-center">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}

            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 min-w-0 group",
                !isSidebarOpen && "md:mx-auto"
              )}
            >
              {/* Logo Icon */}

              <div className="relative shrink-0">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <LayoutDashboard className="h-5 w-5 text-white" />
                </div>

                <div className="absolute -inset-1 rounded-xl bg-indigo-500/20 blur-md -z-10" />
              </div>

              {/* Logo Text */}

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  !isSidebarOpen &&
                    "md:w-0 md:opacity-0 md:invisible"
                )}
              >
                <div className="font-bold text-xl whitespace-nowrap tracking-tight">
                  Project
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Flow
                  </span>
                </div>

                <div className="text-[10px] text-slate-500 whitespace-nowrap tracking-[0.2em] uppercase">
                  Workspace
                </div>
              </div>
            </Link>

            {/* Desktop Toggle */}

            <button
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={cn(
                "hidden md:flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-white/[0.07] transition-all",
                !isSidebarOpen && "md:hidden"
              )}
              title="Collapse sidebar"
              aria-label="Collapse sidebar"
            >
              <PanelLeftClose size={19} />
            </button>
          </div>
        </div>

        {/* =================================================
            Collapsed Sidebar Expand Button
        ================================================== */}

        {!isSidebarOpen && (
          <div className="hidden md:flex justify-center py-4">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="h-10 w-10 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/20 transition-all"
              title="Expand sidebar"
              aria-label="Expand sidebar"
            >
              <PanelLeftOpen size={19} />
            </button>
          </div>
        )}

        {/* =================================================
            User Profile
        ================================================== */}

        <div
          className={cn(
            "mx-3 mt-4 mb-5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3 transition-all duration-300",
            !isSidebarOpen &&
              "md:border-transparent md:bg-transparent md:px-0 md:flex md:justify-center"
          )}
        >
          <div className="flex items-center gap-3">
            {/* Avatar */}

            <div className="relative shrink-0">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/[0.08] flex items-center justify-center">
                <UserCircle className="h-5 w-5 text-slate-300" />
              </div>

              {/* Online indicator */}

              <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#0a1020]" />
            </div>

            {/* User Details */}

            <div
              className={cn(
                "min-w-0 transition-all duration-300",
                !isSidebarOpen &&
                  "md:w-0 md:opacity-0 md:overflow-hidden"
              )}
            >
              <p className="text-sm font-medium text-slate-200 truncate">
                {user.name}
              </p>

              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            Navigation Label
        ================================================== */}

        <div
          className={cn(
            "px-5 mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600",
            !isSidebarOpen && "md:hidden"
          )}
        >
          Navigation
        </div>

        {/* =================================================
            Navigation
        ================================================== */}

        <nav className="px-3 space-y-1 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {nav.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                title={!isSidebarOpen ? item.label : undefined}
                className={cn(
                  `
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-3
                  text-sm
                  font-medium
                  whitespace-nowrap
                  transition-all
                  duration-200
                  `,
                  
                  isSidebarOpen
                    ? "justify-start"
                    : "md:justify-center",

                  isActive
                    ? `
                      bg-gradient-to-r
                      from-indigo-500/15
                      to-purple-500/10
                      text-indigo-300
                      border
                      border-indigo-500/10
                      `
                    : `
                      text-slate-400
                      hover:text-slate-100
                      hover:bg-white/[0.045]
                      border
                      border-transparent
                      `
                )}
              >
                {/* Active indicator */}

                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-0.5 rounded-full bg-gradient-to-b from-indigo-400 to-purple-500 shadow-lg shadow-indigo-500/50" />
                )}

                {/* Navigation Icon */}

                <span
                  className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-all",
                    isActive
                      ? "bg-indigo-500/15 text-indigo-400"
                      : "bg-white/[0.025] text-slate-500 group-hover:text-slate-300 group-hover:bg-white/[0.05]"
                  )}
                >
                  <ChevronRight
                    size={15}
                    className={cn(
                      "transition-transform",
                      isActive && "rotate-0",
                      !isActive && "group-hover:translate-x-0.5"
                    )}
                  />
                </span>

                {/* Label */}

                <span
                  className={cn(
                    "transition-all duration-300",
                    !isSidebarOpen &&
                      "md:w-0 md:opacity-0 md:overflow-hidden"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* =================================================
            Sidebar Footer
        ================================================== */}

        <div className="p-3 mt-4 border-t border-white/[0.06]">
          {/* Workspace Status */}

          <div
            className={cn(
              "mb-3 rounded-xl bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.05] border border-indigo-500/[0.08] p-3",
              !isSidebarOpen && "md:hidden"
            )}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />
              <span className="text-xs font-medium text-slate-300">
                Workspace active
              </span>
            </div>

            <p className="text-[10px] text-slate-500">
              Your workspace is ready.
            </p>
          </div>

          {/* Logout */}

          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/login");
            }}
            className={cn(
              `
              group
              flex
              items-center
              gap-3
              w-full
              rounded-xl
              px-3
              py-3
              text-sm
              font-medium
              text-slate-400
              border
              border-transparent
              hover:border-red-500/10
              hover:bg-red-500/[0.07]
              hover:text-red-300
              transition-all
              `,
              !isSidebarOpen && "md:justify-center"
            )}
            title={!isSidebarOpen ? "Logout" : undefined}
          >
            <span className="h-8 w-8 rounded-lg flex items-center justify-center bg-white/[0.025] group-hover:bg-red-500/10 transition-colors shrink-0">
              <LogOut size={16} />
            </span>

            <span
              className={cn(
                "transition-all duration-300",
                !isSidebarOpen &&
                  "md:w-0 md:opacity-0 md:overflow-hidden"
              )}
            >
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* =====================================================
          Main Content
      ====================================================== */}

      <div
        className={cn(
          "relative min-h-screen transition-all duration-300",
          isSidebarOpen
            ? "md:pl-72"
            : "md:pl-20"
        )}
      >
        {/* =================================================
            Desktop Top Bar
        ================================================== */}

        <header className="hidden md:flex h-20 sticky top-0 z-30 border-b border-white/[0.06] bg-[#070b14]/80 backdrop-blur-xl items-center justify-between px-8">
          {/* Left */}

          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs text-slate-500 mb-1">
                Workspace
              </p>

              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-slate-200">
                  ProjectFlow
                </h2>

                <ChevronRight
                  size={14}
                  className="text-slate-600"
                />

                <span className="text-sm text-slate-400">
                  {title}
                </span>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40" />

              <span className="text-xs text-slate-400">
                Online
              </span>
            </div>

            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/10 flex items-center justify-center">
              <UserCircle className="h-5 w-5 text-indigo-300" />
            </div>
          </div>
        </header>

        {/* =================================================
            Page Content
        ================================================== */}

        <main className="relative px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* Page Heading */}

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Dashboard
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your workspace and stay productive.
            </p>
          </div>

          {/* Content */}

          <div className="relative">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}



