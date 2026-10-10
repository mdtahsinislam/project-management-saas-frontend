"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { TaskList } from "@/components/tasks/TaskList";

const nav = [
  { href: "/member", label: "Overview" },
  { href: "/member/tasks", label: "My Tasks" },
  { href: "/member/profile", label: "Profile" },
];

export default function MemberTasksPage() {
  return (
    <DashboardShell
      title="My Tasks"
      nav={nav}
      allowedRoles={["MEMBER", "ADMIN", "OWNER"]}
    >
      <TaskList />
    </DashboardShell>
  );
}