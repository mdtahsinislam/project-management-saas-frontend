"use client";

import { useEffect, useState } from "react";
import { authApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { toast } from "sonner";

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

export default function AdminProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // localStorage থেকে দ্রুত দেখান
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch {}

    // API থেকে refresh
    authApi
      .me()
      .then((res) => {
        const u = res.data?.data || res.data;
        setUser(u);
        localStorage.setItem("user", JSON.stringify(u));
      })
      .catch(() => {
        toast.error("Failed to load profile");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardShell title="Profile" nav={nav} allowedRoles={["ADMIN"]}>
      {loading && <p className="text-slate-400">Loading profile...</p>}

      {user && (
        <div className="card p-6 max-w-lg space-y-4">
          <div>
            <p className="text-xs text-slate-400 uppercase">Name</p>
            <p className="text-lg font-semibold mt-1">{user.name}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase">Email</p>
            <p className="mt-1">{user.email}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase">Role</p>
            <span className="badge bg-rose-500/15 text-rose-300 mt-1 inline-block">
              {user.role}
            </span>
          </div>
          {user.id && (
            <div>
              <p className="text-xs text-slate-400 uppercase">User ID</p>
              <p className="text-xs text-slate-500 mt-1 break-all">{user.id}</p>
            </div>
          )}
        </div>
      )}

      {!loading && !user && (
        <div className="card p-6 text-slate-400">Profile not found</div>
      )}
    </DashboardShell>
  );
}