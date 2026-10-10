"use client";

import { useQuery } from "@tanstack/react-query";
import { taskApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { useSearchParams, useRouter } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "My Tasks" },
  { href: "/dashboard/tasks", label: "All Tasks" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/payments", label: "Payments" },
];

export default function MemberTasksPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const status = searchParams.get("status") || "";

  const { data, isLoading } = useQuery({
    queryKey: ["tasks-filtered", status],
    queryFn: async () =>
      (
        await taskApi.list({
          page: 1,
          limit: 20,
          ...(status ? { status } : {}),
        })
      ).data.data,
  });

  const tasks = data?.tasks || [];

  return (
    <DashboardShell title="Tasks" nav={nav} allowedRoles={["MEMBER", "ADMIN", "OWNER"]}>
      <div className="mb-4">
        <select
          className="input max-w-[200px]"
          value={status}
          onChange={(e) => {
            const params = new URLSearchParams(searchParams.toString());
            if (e.target.value) params.set("status", e.target.value);
            else params.delete("status");
            router.push(`/dashboard/tasks?${params.toString()}`);
          }}
        >
          <option value="">All Status</option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="DONE">DONE</option>
        </select>
      </div>

      {isLoading && <p className="text-slate-400">Loading...</p>}
      <div className="grid gap-3">
        {tasks.length === 0 && !isLoading && (
          <div className="card p-6 text-slate-400">No tasks found</div>
        )}
        {tasks.map(
          (t: { id: string; title: string; status: string; priority: string }) => (
            <div key={t.id} className="card p-4 flex justify-between">
              <h3 className="font-medium">{t.title}</h3>
              <div className="flex gap-2">
                <span className="badge bg-slate-500/20 text-slate-300">
                  {t.priority}
                </span>
                <span className="badge bg-indigo-500/15 text-indigo-300">
                  {t.status}
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </DashboardShell>
  );
}
