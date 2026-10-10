"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { OrganizationList } from "@/components/organizations/OrganizationList";

// const nav = [
//   { href: "/owner", label: "Overview" },
//   { href: "/owner/organizations", label: "Organizations" },
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



export default function OwnerOrganizationsPage() {
  return (
    <DashboardShell
      title="Organizations"
      nav={nav}
      allowedRoles={["OWNER", "ADMIN"]}
    >
      <OrganizationList />
    </DashboardShell>
  );
}