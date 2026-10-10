// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { adminApi } from "@/lib/api";
// import { DashboardShell } from "@/components/layout/DashboardShell";
// import { useSearchParams, useRouter } from "next/navigation";

// // const nav = [
// //   { href: "/admin", label: "Overview" },
// //   { href: "/admin/users", label: "Users" },
// //   { href: "/admin/reports", label: "Audit Logs" },
// // ];

// // const nav = [
// //   { href: "/admin", label: "Overview" },
// //   { href: "/admin/organizations", label: "Organizations" },
// //   { href: "/admin/projects", label: "Projects" },
// //   { href: "/admin/users", label: "Users" },
// //   { href: "/admin/reports", label: "Audit Logs" },
// // ];

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/tasks", label: "Tasks" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/reports", label: "Audit Logs" },
// ];

// export default function AdminUsersPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const page = searchParams.get("page") || "1";
//   const role = searchParams.get("role") || "";

//   const { data, isLoading } = useQuery({
//     queryKey: ["admin-users", page, role],
//     queryFn: async () =>
//       (
//         await adminApi.users({
//           page,
//           limit: 10,
//           ...(role ? { role } : {}),
//         })
//       ).data.data,
//   });

//   return (
//     <DashboardShell title="Manage Users" nav={nav} allowedRoles={["ADMIN"]}>
//       <div className="flex flex-wrap gap-3 mb-4">
//         <select
//           className="input max-w-[180px]"
//           value={role}
//           onChange={(e) => {
//             const params = new URLSearchParams(searchParams.toString());
//             if (e.target.value) params.set("role", e.target.value);
//             else params.delete("role");
//             params.set("page", "1");
//             router.push(`/admin/users?${params.toString()}`);
//           }}
//         >
//           <option value="">All Roles</option>
//           <option value="ADMIN">ADMIN</option>
//           <option value="OWNER">OWNER</option>
//           <option value="MEMBER">MEMBER</option>
//         </select>
//       </div>

//       {isLoading && <p className="text-slate-400">Loading users...</p>}

//       <div className="card overflow-x-auto">
//         <table className="w-full text-sm">
//           <thead className="text-left text-slate-400 border-b border-[var(--border)]">
//             <tr>
//               <th className="p-3">Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(data?.users || data || []).length === 0 && (
//               <tr>
//                 <td colSpan={3} className="p-6 text-center text-slate-400">
//                   No users found
//                 </td>
//               </tr>
//             )}
//             {(Array.isArray(data?.users) ? data.users : Array.isArray(data) ? data : []).map(
//               (u: { id: string; name: string; email: string; role: string }) => (
//                 <tr key={u.id} className="border-b border-[var(--border)]">
//                   <td className="p-3">{u.name}</td>
//                   <td className="p-3">{u.email}</td>
//                   <td className="p-3">
//                     <span className="badge bg-indigo-500/20 text-indigo-300">
//                       {u.role}
//                     </span>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </DashboardShell>
//   );
// }









"use client";

import { useQuery } from "@tanstack/react-query";
import { adminApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/reports", label: "Audit Logs" },
// ];
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


export default function AdminUsersPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || "1";
  const role = searchParams.get("role") || "";
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-users", page, role, searchParams.get("search")],
    queryFn: async () => {
      const res = await adminApi.users({
        page,
        limit: 20,
        ...(role ? { role } : {}),
        ...(searchParams.get("search")
          ? { search: searchParams.get("search")! }
          : {}),
      });
      return res.data.data;
    },
  });

  const users = data?.users || (Array.isArray(data) ? data : []);
  const pagination = data?.pagination;

  function applyFilter(key: string, value: string) {
    const p = new URLSearchParams(searchParams.toString());
    if (value) p.set(key, value);
    else p.delete(key);
    p.set("page", "1");
    router.push(`/admin/users?${p.toString()}`);
  }

  return (
    <DashboardShell title="Users" nav={nav} allowedRoles={["ADMIN"]}>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <input
            className="input max-w-xs"
            placeholder="Search name/email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") applyFilter("search", search);
            }}
          />
          <select
            className="input max-w-[160px]"
            value={role}
            onChange={(e) => applyFilter("role", e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="ADMIN">ADMIN</option>
            <option value="OWNER">OWNER</option>
            <option value="MEMBER">MEMBER</option>
          </select>
          <button
            className="btn btn-outline text-sm"
            onClick={() => applyFilter("search", search)}
          >
            Search
          </button>
        </div>

        {isLoading && <p className="text-slate-400">Loading users...</p>}
        {error && <p className="text-rose-400">Failed to load users</p>}

        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-left text-slate-400">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u: any) => (
                <tr key={u.id} className="border-b border-slate-800/80">
                  <td className="p-3 font-medium">{u.name}</td>
                  <td className="p-3 text-slate-300">{u.email}</td>
                  <td className="p-3">
                    <span
                      className={`badge ${
                        u.role === "ADMIN"
                          ? "bg-rose-500/15 text-rose-300"
                          : u.role === "OWNER"
                          ? "bg-indigo-500/15 text-indigo-300"
                          : "bg-emerald-500/15 text-emerald-300"
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="p-3">
                    {u.isActive === false ? (
                      <span className="text-rose-400 text-xs">Inactive</span>
                    ) : (
                      <span className="text-emerald-400 text-xs">Active</span>
                    )}
                  </td>
                  <td className="p-3 text-slate-500 text-xs">
                    {u.createdAt
                      ? new Date(u.createdAt).toLocaleDateString()
                      : "—"}
                  </td>
                </tr>
              ))}
              {!isLoading && users.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-slate-400">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {pagination && (
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>
              Page {pagination.page} / {pagination.totalPages || 1} (
              {pagination.total} total)
            </span>
            <button
              className="btn btn-outline text-xs"
              disabled={Number(page) <= 1}
              onClick={() => applyFilter("page", String(Number(page) - 1))}
            >
              Prev
            </button>
            <button
              className="btn btn-outline text-xs"
              disabled={
                pagination.totalPages
                  ? Number(page) >= pagination.totalPages
                  : true
              }
              onClick={() => applyFilter("page", String(Number(page) + 1))}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}