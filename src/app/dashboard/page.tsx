

"use client";

import { useQuery } from "@tanstack/react-query";
import { taskApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";

const nav = [
  { href: "/dashboard", label: "My Tasks" },
  { href: "/dashboard/tasks", label: "All Tasks" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/payments", label: "Payments" },
];

export default function MemberDashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["member-tasks"],
    queryFn: async () => (await taskApi.list({ page: 1, limit: 10 })).data.data,
  });

  const tasks = data?.tasks || [];

  return (
    <DashboardShell title="Member Dashboard" nav={nav} allowedRoles={["MEMBER", "ADMIN", "OWNER"]}>
      {isLoading && <p className="text-slate-400">Loading your tasks...</p>}
      <div className="grid gap-3">
        {tasks.length === 0 && !isLoading && (
          <div className="card p-6 text-slate-400">No tasks assigned yet</div>
        )}
        {tasks.map(
          (t: { id: string; title: string; status: string; priority: string }) => (
            <div key={t.id} className="card p-4 flex justify-between">
              <div>
                <h3 className="font-medium">{t.title}</h3>
                <p className="text-xs text-slate-400">{t.priority}</p>
              </div>
              <span className="badge bg-cyan-500/15 text-cyan-300">{t.status}</span>
            </div>
          )
        )}
      </div>
    </DashboardShell>
  );
}
