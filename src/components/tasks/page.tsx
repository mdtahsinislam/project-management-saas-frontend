"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { TaskList } from "@/components/tasks/TaskList";

const nav = [
  { href: "/owner", label: "Overview" },
  { href: "/owner/organizations", label: "Organizations" },
  { href: "/owner/projects", label: "Projects" },
  { href: "/owner/tasks", label: "Tasks" },
  { href: "/owner/profile", label: "Profile" },
];

export default function OwnerTasksPage() {
  return (
    <DashboardShell
      title="Tasks"
      nav={nav}
      allowedRoles={["OWNER", "ADMIN"]}
    >
      <TaskList />
    </DashboardShell>
  );
}