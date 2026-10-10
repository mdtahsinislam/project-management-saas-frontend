"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { useAuthStore } from "@/store/authStore";

const nav = [
  { href: "/dashboard", label: "My Tasks" },
  { href: "/dashboard/tasks", label: "All Tasks" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/payments", label: "Payments" },
];

export default function MemberProfilePage() {
  const user = useAuthStore((s) => s.user);

  return (
    <DashboardShell title="Profile" nav={nav} allowedRoles={["MEMBER", "ADMIN", "OWNER"]}>
      <div className="card p-6 max-w-lg space-y-2">
        <p>
          <span className="text-slate-400">Name:</span> {user?.name}
        </p>
        <p>
          <span className="text-slate-400">Email:</span> {user?.email}
        </p>
        <p>
          <span className="text-slate-400">Role:</span> {user?.role}
        </p>
      </div>
    </DashboardShell>
  );
}
