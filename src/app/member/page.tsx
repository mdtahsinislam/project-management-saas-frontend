"use client";

import { useEffect, useState } from "react";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { taskApi } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const nav = [
  { href: "/member", label: "Overview" },
  { href: "/member/tasks", label: "My Tasks" },
  { href: "/member/profile", label: "Profile" },
];

export default function MemberPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["member-tasks"],
    queryFn: async () => {
      const res = await taskApi.list({ page: 1, limit: 10 });
      return res.data.data;
    },
  });

  const tasks = data?.tasks || (Array.isArray(data) ? data : []);

  return (
    <DashboardShell
      title="Member Overview"
      nav={nav}
      allowedRoles={["MEMBER", "ADMIN", "OWNER"]}
    >
      <div className="space-y-6">
        <div className="card p-5">
          <h2 className="font-semibold text-lg">
            Welcome{user?.name ? `, ${user.name}` : ""}
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Role: <span className="text-emerald-400">{user?.role || "MEMBER"}</span>
          </p>
          <p className="text-sm text-slate-400">{user?.email}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link href="/member/tasks" className="btn btn-primary text-sm">
            My Tasks
          </Link>
          <Link href="/member/profile" className="btn btn-outline text-sm">
            Profile
          </Link>
          <Link href="/pricing" className="btn btn-outline text-sm">
            Pricing
          </Link>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Recent Tasks</h3>
          {isLoading && <p className="text-slate-400">Loading tasks...</p>}
          <div className="grid gap-3">
            {tasks.slice(0, 5).map((t: any) => (
              <div key={t.id} className="card p-4 flex justify-between gap-3">
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {t.description || "No description"}
                  </p>
                </div>
                <span className="badge bg-slate-700 text-slate-300 h-fit">
                  {t.status}
                </span>
              </div>
            ))}
            {!isLoading && tasks.length === 0 && (
              <div className="card p-6 text-slate-400">No tasks assigned yet</div>
            )}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}