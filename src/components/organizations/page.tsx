


//D:\project-management-saas-frontend\src\components\organizations\page.tsx
"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { OrganizationList } from "@/components/organizations/OrganizationList";

const nav = [
  { href: "/owner", label: "Overview" },
  { href: "/owner/projects", label: "Projects" },
  { href: "/owner/tasks", label: "Tasks" },
  { href: "/owner/profile", label: "Profile" },
];

export default function OwnerPage() {
  return (
    <DashboardShell title="Organizations" nav={nav} allowedRoles={["OWNER", "ADMIN"]}>
      <OrganizationList />
    </DashboardShell>
  );
}