// // "use client";

// // import { useQuery } from "@tanstack/react-query";
// // import { adminApi } from "@/lib/api";
// // import { DashboardShell } from "@/components/layout/DashboardShell";

// // // const nav = [
// // //   { href: "/admin", label: "Overview" },
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



// // export default function AdminReportsPage() {
// //   const { data, isLoading } = useQuery({
// //     queryKey: ["audit-logs"],
// //     queryFn: async () => (await adminApi.auditLogs({ page: 1, limit: 20 })).data.data,
// //   });

// //   const logs = data?.logs || data || [];

// //   return (
// //     <DashboardShell title="Audit Logs" nav={nav} allowedRoles={["ADMIN"]}>
// //       {isLoading && <p className="text-slate-400">Loading logs...</p>}
// //       <div className="space-y-3">
// //         {Array.isArray(logs) && logs.length === 0 && (
// //           <div className="card p-6 text-slate-400">No audit logs found</div>
// //         )}
// //         {Array.isArray(logs) &&
// //           logs.map((log: { id: string; action: string; createdAt: string; user?: { name?: string } }) => (
// //             <div key={log.id} className="card p-4 flex justify-between gap-4">
// //               <div>
// //                 <p className="font-medium">{log.action}</p>
// //                 <p className="text-xs text-slate-400">
// //                   by {log.user?.name || "Unknown"}
// //                 </p>
// //               </div>
// //               <p className="text-xs text-slate-500">
// //                 {new Date(log.createdAt).toLocaleString()}
// //               </p>
// //             </div>
// //           ))}
// //       </div>
// //     </DashboardShell>
// //   );
// // }




// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { adminApi } from "@/lib/api";
// import { DashboardShell } from "@/components/layout/DashboardShell";
// import { useSearchParams, useRouter } from "next/navigation";

// // const nav = [
// //   { href: "/admin", label: "Overview" },
// //   { href: "/admin/organizations", label: "Organizations" },
// //   { href: "/admin/projects", label: "Projects" },
// //   { href: "/admin/users", label: "Users" },
// //   { href: "/admin/reports", label: "Audit Logs" },
// // ];

// // const nav = [
// //   { href: "/admin", label: "Overview" },
// //   { href: "/admin/organizations", label: "Organizations" },
// //   { href: "/admin/projects", label: "Projects" },
// //   { href: "/admin/users", label: "Users" },
// //   { href: "/admin/payments", label: "Payments" },
// //   { href: "/admin/reports", label: "Audit Logs" },
// //   { href: "/admin/profile", label: "Profile" },
// // ];

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/tasks", label: "Tasks" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/payments", label: "Payments" },
//   { href: "/admin/reports", label: "Audit Logs" },
//   { href: "/admin/profile", label: "Profile" },
// ];
// export default function AdminReportsPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const page = searchParams.get("page") || "1";

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["admin-audit-logs", page],
//     queryFn: async () => {
//       const res = await adminApi.auditLogs({ page, limit: 30 });
//       return res.data.data;
//     },
//   });

//   const logs =
//     data?.logs || data?.auditLogs || (Array.isArray(data) ? data : []);
//   const pagination = data?.pagination;

//   return (
//     <DashboardShell title="Audit Logs" nav={nav} allowedRoles={["ADMIN"]}>
//       <div className="space-y-4">
//         {isLoading && <p className="text-slate-400">Loading logs...</p>}
//         {error && <p className="text-rose-400">Failed to load audit logs</p>}

//         <div className="space-y-2">
//           {logs.map((log: any, i: number) => (
//             <div key={log.id || i} className="card p-4">
//               <div className="flex flex-wrap items-start justify-between gap-2">
//                 <div>
//                   <p className="font-medium text-sm">
//                     {log.action || log.type || "LOG"}
//                   </p>
//                   <p className="text-xs text-slate-400 mt-1">
//                     {log.user?.name || log.userName || log.userId || "System"}
//                     {log.taskId ? ` · Task: ${log.taskId}` : ""}
//                     {log.details
//                       ? ` · ${
//                           typeof log.details === "string"
//                             ? log.details
//                             : JSON.stringify(log.details).slice(0, 80)
//                         }`
//                       : ""}
//                   </p>
//                 </div>
//                 <span className="text-[11px] text-slate-500">
//                   {log.createdAt
//                     ? new Date(log.createdAt).toLocaleString()
//                     : ""}
//                 </span>
//               </div>
//             </div>
//           ))}

//           {!isLoading && logs.length === 0 && (
//             <div className="card p-6 text-slate-400">No audit logs yet</div>
//           )}
//         </div>

//         {pagination && (
//           <div className="flex gap-2 text-sm">
//             <button
//               className="btn btn-outline text-xs"
//               disabled={Number(page) <= 1}
//               onClick={() =>
//                 router.push(`/admin/reports?page=${Number(page) - 1}`)
//               }
//             >
//               Prev
//             </button>
//             <button
//               className="btn btn-outline text-xs"
//               onClick={() =>
//                 router.push(`/admin/reports?page=${Number(page) + 1}`)
//               }
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>
//     </DashboardShell>
//   );
// }



"use client";

import { useQuery } from "@tanstack/react-query";
import { adminApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { useSearchParams, useRouter } from "next/navigation";

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

const ACTIONS = [
  "",
  "TASK_CREATED",
  "TASK_UPDATED",
  "TASK_DELETED",
  "TASK_STATUS_CHANGED",
  "TASK_ASSIGNED",
  "COMMENT_ADDED",
  "PROJECT_CREATED",
  "ORGANIZATION_CREATED",
];

export default function AdminReportsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || "1";
  const action = searchParams.get("action") || "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-audit-logs", page, action],
    queryFn: async () => {
      const res = await adminApi.auditLogs({
        page,
        limit: 20,
        ...(action ? { action } : {}),
      });
      return res.data.data;
    },
  });

  const logs =
    data?.logs || data?.auditLogs || (Array.isArray(data) ? data : []);
  const pagination = data?.pagination;

  function setParam(key: string, value: string) {
    const p = new URLSearchParams(searchParams.toString());
    if (value) p.set(key, value);
    else p.delete(key);
    if (key !== "page") p.set("page", "1");
    router.push(`/admin/reports?${p.toString()}`);
  }

  return (
    <DashboardShell title="Audit Logs" nav={nav} allowedRoles={["ADMIN"]}>
      <div className="space-y-4">
        {/* Filter by action */}
        <div className="flex flex-wrap gap-2">
          <select
            className="input max-w-xs"
            value={action}
            onChange={(e) => setParam("action", e.target.value)}
          >
            <option value="">All Actions</option>
            {ACTIONS.filter(Boolean).map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {isLoading && <p className="text-slate-400">Loading logs...</p>}
        {error && <p className="text-rose-400">Failed to load audit logs</p>}

        <div className="space-y-2">
          {logs.map((log: any, i: number) => (
            <div key={log.id || i} className="card p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-medium text-sm">
                    {log.action || log.type || "LOG"}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {log.user?.name || log.userName || log.userId || "System"}
                    {log.taskId ? ` · Task: ${log.taskId}` : ""}
                    {log.details
                      ? ` · ${
                          typeof log.details === "string"
                            ? log.details
                            : JSON.stringify(log.details).slice(0, 80)
                        }`
                      : ""}
                  </p>
                </div>
                <span className="text-[11px] text-slate-500">
                  {log.createdAt
                    ? new Date(log.createdAt).toLocaleString()
                    : ""}
                </span>
              </div>
            </div>
          ))}

          {!isLoading && logs.length === 0 && (
            <div className="card p-6 text-slate-400">No audit logs found</div>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400">
          {pagination && (
            <span>
              Page {pagination.page || page}
              {pagination.totalPages ? ` / ${pagination.totalPages}` : ""}
            </span>
          )}
          <button
            className="btn btn-outline text-xs"
            disabled={Number(page) <= 1}
            onClick={() => setParam("page", String(Number(page) - 1))}
          >
            Prev
          </button>
          <button
            className="btn btn-outline text-xs"
            onClick={() => setParam("page", String(Number(page) + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </DashboardShell>
  );
}