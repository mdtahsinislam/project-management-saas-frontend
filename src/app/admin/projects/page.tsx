"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { ProjectList } from "@/components/projects/ProjectList";

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/reports", label: "Audit Logs" },
// ];

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/reports", label: "Audit Logs" },
// ];

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/tasks", label: "Tasks" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/reports", label: "Audit Logs" },
// ];

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

export default function AdminProjectsPage() {
  return (
    <DashboardShell
      title="Projects"
      nav={nav}
      allowedRoles={["ADMIN"]}
    >
      <ProjectList />
    </DashboardShell>
  );
}