

// // // //D:\project-management-saas-frontend\src\app\admin\page.tsx
// // // "use client";

// // // import { useQuery } from "@tanstack/react-query";
// // // import { adminApi } from "@/lib/api";
// // // import { DashboardShell } from "@/components/layout/DashboardShell";

// // // const nav = [
// // //   { href: "/admin", label: "Overview" },
// // //   { href: "/admin/users", label: "Users" },
// // //   { href: "/admin/reports", label: "Audit Logs" },
// // // ];

// // // export default function AdminDashboardPage() {
// // //   const { data, isLoading, error } = useQuery({
// // //     queryKey: ["admin-dashboard"],
// // //     queryFn: async () => (await adminApi.dashboard()).data.data,
// // //   });

// // //   return (
// // //     <DashboardShell title="Admin Overview" nav={nav} allowedRoles={["ADMIN"]}>
// // //       {isLoading && <p className="text-slate-400">Loading dashboard...</p>}
// // //       {error && (
// // //         <p className="text-rose-400">Failed to load admin dashboard</p>
// // //       )}
// // //       {data && (
// // //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {Object.entries(data)
// // //             .filter(([, v]) => typeof v === "number")
// // //             .map(([key, value]) => (
// // //               <div key={key} className="card p-4">
// // //                 <p className="text-xs uppercase tracking-wide text-slate-400">
// // //                   {key}
// // //                 </p>
// // //                 <p className="text-2xl font-bold mt-2">{String(value)}</p>
// // //               </div>
// // //             ))}
// // //         </div>
// // //       )}
// // //       {!isLoading && !data && (
// // //         <div className="card p-6 text-slate-400">
// // //           No dashboard data yet. Ensure backend `/admin/dashboard` is working
// // //           and you are logged in as ADMIN.
// // //         </div>
// // //       )}
// // //     </DashboardShell>
// // //   );
// // // }


// // //D:\project-management-saas-frontend\src\app\admin\page.tsx


// // "use client";

// // import { useQuery } from "@tanstack/react-query";
// // import { adminApi } from "@/lib/api";
// // import { DashboardShell } from "@/components/layout/DashboardShell";
// // import Link from "next/link";

// // // const nav = [
// // //   { href: "/admin", label: "Overview" },
// // //   { href: "/admin/organizations", label: "Organizations" },
// // //   { href: "/admin/users", label: "Users" },
// // //   { href: "/admin/reports", label: "Audit Logs" },
// // // ];


// // // const nav = [
// // //   { href: "/admin", label: "Overview" },
// // //   { href: "/admin/organizations", label: "Organizations" },
// // //   { href: "/admin/projects", label: "Projects" },
// // //   { href: "/admin/users", label: "Users" },
// // //   { href: "/admin/reports", label: "Audit Logs" },
// // // ];



// // const nav = [
// //   { href: "/admin", label: "Overview" },
// //   { href: "/admin/organizations", label: "Organizations" },
// //   { href: "/admin/projects", label: "Projects" },
// //   { href: "/admin/tasks", label: "Tasks" },
// //   { href: "/admin/users", label: "Users" },
// //   { href: "/admin/reports", label: "Audit Logs" },
// // ];


// // // const nav = [
// // //   { href: "/admin", label: "Overview" },
// // //   { href: "/admin/organizations", label: "Organizations" },
// // //   { href: "/admin/projects", label: "Projects" },
// // //   { href: "/admin/users", label: "Users" },
// // //   { href: "/admin/reports", label: "Audit Logs" },
// // // ];

// // export default function AdminDashboardPage() {
// //   const { data, isLoading, error } = useQuery({
// //     queryKey: ["admin-dashboard"],
// //     queryFn: async () => (await adminApi.dashboard()).data.data,
// //   });

// //   return (
// //     <DashboardShell title="Admin Overview" nav={nav} allowedRoles={["ADMIN"]}>
// //       <div className="mb-4">
// //         <Link href="/admin/organizations" className="btn btn-primary text-sm">
// //           Manage Organizations
// //         </Link>
// //       </div>

// //       {isLoading && <p className="text-slate-400">Loading dashboard...</p>}

// //       {error && (
// //         <p className="text-rose-400">Failed to load admin dashboard</p>
// //       )}

// //       {data && (
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {Object.entries(data)
// //             .filter(([, v]) => typeof v === "number")
// //             .map(([key, value]) => (
// //               <div key={key} className="card p-4">
// //                 <p className="text-xs uppercase tracking-wide text-slate-400">
// //                   {key}
// //                 </p>
// //                 <p className="text-2xl font-bold mt-2">{String(value)}</p>
// //               </div>
// //             ))}
// //         </div>
// //       )}

// //       {!isLoading && !data && (
// //         <div className="card p-6 text-slate-400">
// //           No dashboard data yet. Ensure backend `/admin/dashboard` is working
// //           and you are logged in as ADMIN.
// //         </div>
// //       )}
// //     </DashboardShell>
// //   );
// // }


// //D:\project-management-saas-frontend\src\app\admin\page.tsx
// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { adminApi } from "@/lib/api";
// import { DashboardShell } from "@/components/layout/DashboardShell";
// import Link from "next/link";




// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/payments", label: "Payments" },
//   { href: "/admin/reports", label: "Audit Logs" },
//   { href: "/admin/profile", label: "Profile" },
// ];


// export default function AdminDashboardPage() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["admin-dashboard"],
//     queryFn: async () => (await adminApi.dashboard()).data.data,
//   });

//   const stats = [
//     { key: "totalUsers", label: "Total Users", href: "/admin/users" },
//     { key: "totalOrganizations", label: "Organizations", href: "/admin/organizations" },
//     { key: "totalProjects", label: "Projects", href: "/admin/projects" },
//     { key: "totalTasks", label: "Tasks", href: "/admin/projects" },
//   ];

//   return (
//     <DashboardShell title="Admin Overview" nav={nav} allowedRoles={["ADMIN"]}>
//       {isLoading && <p className="text-slate-400">Loading dashboard...</p>}
//       {error && (
//         <p className="text-rose-400">
//           Failed to load dashboard. Login as ADMIN এবং backend `/admin/dashboard` চেক করুন।
//         </p>
//       )}

//       {data && (
//         <div className="space-y-8">
//           {/* Stat Cards */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {stats.map(({ key, label, href }) => (
//               <Link key={key} href={href} className="card p-5 hover:border-indigo-500/40 transition">
//                 <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
//                 <p className="text-3xl font-bold mt-2">
//                   {Number(data[key] ?? 0).toLocaleString()}
//                 </p>
//               </Link>
//             ))}
//           </div>

//           {/* Tasks by Status */}
//           {data.tasksByStatus && (
//             <div className="card p-5">
//               <h3 className="font-semibold mb-4">Tasks by Status</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
//                 {Object.entries(data.tasksByStatus).map(([status, count]) => (
//                   <div
//                     key={status}
//                     className="rounded-xl bg-slate-800/60 border border-slate-700/50 p-3 text-center"
//                   >
//                     <p className="text-xs text-slate-400 uppercase">{status}</p>
//                     <p className="text-xl font-bold mt-1">{String(count)}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Recent Activities */}
//           {Array.isArray(data.recentActivities) && data.recentActivities.length > 0 && (
//             <div className="card p-5">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="font-semibold">Recent Activities</h3>
//                 <Link href="/admin/reports" className="text-sm text-indigo-400 hover:underline">
//                   View all
//                 </Link>
//               </div>
//               <div className="space-y-2 max-h-80 overflow-y-auto">
//                 {data.recentActivities.slice(0, 15).map((item: any, i: number) => (
//                   <div
//                     key={item.id || i}
//                     className="flex items-start justify-between gap-3 py-2 border-b border-slate-800 last:border-0"
//                   >
//                     <div>
//                       <p className="text-sm font-medium">
//                         {item.action || item.type || "Activity"}
//                       </p>
//                       <p className="text-xs text-slate-400 mt-0.5">
//                         {item.user?.name || item.userName || item.userId || "—"}
//                         {item.details
//                           ? ` · ${typeof item.details === "string" ? item.details : JSON.stringify(item.details).slice(0, 60)}`
//                           : ""}
//                       </p>
//                     </div>
//                     <span className="text-[11px] text-slate-500 whitespace-nowrap">
//                       {item.createdAt
//                         ? new Date(item.createdAt).toLocaleString()
//                         : ""}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Quick links */}
//           <div className="flex flex-wrap gap-2">
//             <Link href="/admin/organizations" className="btn btn-primary text-sm">
//               Organizations
//             </Link>
//             <Link href="/admin/projects" className="btn btn-outline text-sm">
//               Projects
//             </Link>
//             <Link href="/admin/users" className="btn btn-outline text-sm">
//               Users
//             </Link>
//             <Link href="/admin/reports" className="btn btn-outline text-sm">
//               Audit Logs
//             </Link>
//           </div>
//         </div>
//       )}
//     </DashboardShell>
//   );
// }




"use client";

import { useQuery } from "@tanstack/react-query";
import { adminApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";
import Link from "next/link";

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/payments", label: "Payments" },
//   { href: "/admin/reports", label: "Audit Logs" },
//   { href: "/admin/profile", label: "Profile" },
// ];

const nav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/organizations", label: "Organizations" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/tasks", label: "Tasks" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/payments", label: "Payments" },
  { href: "/admin/reports", label: "Audit Logs" },
  { href: "/admin/profile", label: "Profile" },
];

export default function AdminDashboardPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: async () => (await adminApi.dashboard()).data.data,
  });

  // Backend যে key-ই পাঠাক, fallback দিয়ে সংখ্যা বের করুন
  const totals = data
    ? {
        totalUsers: Number(
          data.totalUsers ?? data.usersCount ?? data.users ?? 0
        ),
        totalOrganizations: Number(
          data.totalOrganizations ??
            data.organizationsCount ??
            data.organizations ??
            0
        ),
        totalProjects: Number(
          data.totalProjects ?? data.projectsCount ?? data.projects ?? 0
        ),
        totalTasks: Number(
          data.totalTasks ?? data.tasksCount ?? data.tasks ?? 0
        ),
      }
    : {
        totalUsers: 0,
        totalOrganizations: 0,
        totalProjects: 0,
        totalTasks: 0,
      };

  const stats = [
    {
      label: "Total Users",
      value: totals.totalUsers,
      href: "/admin/users",
    },
    {
      label: "Organizations",
      value: totals.totalOrganizations,
      href: "/admin/organizations",
    },
    {
      label: "Projects",
      value: totals.totalProjects,
      href: "/admin/projects",
    },
    {
      label: "Tasks",
      value: totals.totalTasks,
      href: "/admin/projects",
    },
  ];

  return (
    <DashboardShell title="Admin Overview" nav={nav} allowedRoles={["ADMIN"]}>
      {isLoading && <p className="text-slate-400">Loading dashboard...</p>}

      {error && (
        <p className="text-rose-400">
          Failed to load dashboard. Login as ADMIN এবং backend `/admin/dashboard`
          চেক করুন।
        </p>
      )}

      {data && (
        <div className="space-y-8">
          {/* Stat Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="card p-5 hover:border-indigo-500/40 transition"
              >
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {s.label}
                </p>
                <p className="text-3xl font-bold mt-2">
                  {s.value.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>

          {/* Tasks by Status */}
          {data.tasksByStatus && (
            <div className="card p-5">
              <h3 className="font-semibold mb-4">Tasks by Status</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {Object.entries(data.tasksByStatus).map(([status, count]) => (
                  <div
                    key={status}
                    className="rounded-xl bg-slate-800/60 border border-slate-700/50 p-3 text-center"
                  >
                    <p className="text-xs text-slate-400 uppercase">{status}</p>
                    <p className="text-xl font-bold mt-1">{String(count)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Activities */}
          {Array.isArray(data.recentActivities) &&
            data.recentActivities.length > 0 && (
              <div className="card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Recent Activities</h3>
                  <Link
                    href="/admin/reports"
                    className="text-sm text-indigo-400 hover:underline"
                  >
                    View all
                  </Link>
                </div>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {data.recentActivities
                    .slice(0, 15)
                    .map((item: any, i: number) => (
                      <div
                        key={item.id || i}
                        className="flex items-start justify-between gap-3 py-2 border-b border-slate-800 last:border-0"
                      >
                        <div>
                          <p className="text-sm font-medium">
                            {item.action || item.type || "Activity"}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {item.user?.name ||
                              item.userName ||
                              item.userId ||
                              "—"}
                            {item.details
                              ? ` · ${
                                  typeof item.details === "string"
                                    ? item.details
                                    : JSON.stringify(item.details).slice(0, 60)
                                }`
                              : ""}
                          </p>
                        </div>
                        <span className="text-[11px] text-slate-500 whitespace-nowrap">
                          {item.createdAt
                            ? new Date(item.createdAt).toLocaleString()
                            : ""}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            )}

          {/* Quick links */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/organizations"
              className="btn btn-primary text-sm"
            >
              Organizations
            </Link>
            <Link href="/admin/projects" className="btn btn-outline text-sm">
              Projects
            </Link>
            <Link href="/admin/users" className="btn btn-outline text-sm">
              Users
            </Link>
            <Link href="/admin/payments" className="btn btn-outline text-sm">
              Payments
            </Link>
            <Link href="/admin/reports" className="btn btn-outline text-sm">
              Audit Logs
            </Link>
          </div>
        </div>
      )}
    </DashboardShell>
  );
}