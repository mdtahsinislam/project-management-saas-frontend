"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { ProjectList } from "@/components/projects/ProjectList";

const nav = [
  { href: "/owner", label: "Overview" },
  { href: "/owner/organizations", label: "Organizations" },
  { href: "/owner/projects", label: "Projects" },
  { href: "/owner/tasks", label: "Tasks" },
  { href: "/owner/profile", label: "Profile" },
];

export default function OwnerProjectsPage() {
  return (
    <DashboardShell
      title="Projects"
      nav={nav}
      allowedRoles={["OWNER", "ADMIN"]}
    >
      <ProjectList />
    </DashboardShell>
  );
}