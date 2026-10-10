"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { useAuthStore } from "@/store/authStore";

// const nav = [
//   { href: "/owner", label: "Overview" },
//   { href: "/owner/projects", label: "Projects" },
//   { href: "/owner/tasks", label: "Tasks" },
//   { href: "/owner/profile", label: "Profile" },
// ];

// const nav = [
//   { href: "/owner", label: "Overview" },
//   { href: "/owner/organizations", label: "Organizations" },
//   { href: "/owner/projects", label: "Projects" },
//   { href: "/owner/tasks", label: "Tasks" },
//   { href: "/owner/profile", label: "Profile" },
// ];

const nav = [
  { href: "/owner", label: "Overview" },
  { href: "/owner/organizations", label: "Organizations" },
  { href: "/owner/projects", label: "Projects" },
  { href: "/owner/tasks", label: "Tasks" },
  { href: "/owner/profile", label: "Profile" },
];

export default function OwnerProfilePage() {
  const user = useAuthStore((s) => s.user);

  return (
    <DashboardShell title="Profile" nav={nav} allowedRoles={["OWNER", "ADMIN"]}>
      <div className="card p-6 max-w-lg space-y-3">
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
