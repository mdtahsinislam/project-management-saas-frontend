"use client";

import { useEffect, useState } from "react";
import { authApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";

const nav = [
  { href: "/member", label: "Overview" },
  { href: "/member/tasks", label: "My Tasks" },
  { href: "/member/profile", label: "Profile" },
];

export default function MemberProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch {}

    authApi
      .me()
      .then((res) => {
        const u = res.data?.data || res.data;
        setUser(u);
        localStorage.setItem("user", JSON.stringify(u));
      })
      .catch(() => {});
  }, []);

  return (
    <DashboardShell
      title="Profile"
      nav={nav}
      allowedRoles={["MEMBER", "ADMIN", "OWNER"]}
    >
      {user ? (
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
            <span className="badge bg-emerald-500/15 text-emerald-300 mt-1 inline-block">
              {user.role}
            </span>
          </div>
        </div>
      ) : (
        <p className="text-slate-400">Loading profile...</p>
      )}
    </DashboardShell>
  );
}