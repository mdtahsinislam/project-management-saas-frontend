// "use client";

// import { DashboardShell } from "@/components/layout/DashboardShell";
// import { OrganizationList } from "@/components/organizations/OrganizationList";

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/reports", label: "Audit Logs" },
// ];

// export default function AdminOrganizationsPage() {
//   return (
//     <DashboardShell
//       title="Organizations"
//       nav={nav}
//       allowedRoles={["ADMIN"]}
//     >
//       <OrganizationList />
//     </DashboardShell>
//   );
// }

//D:\project-management-saas-frontend\src\app\admin\organizations\page.tsx

"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { OrganizationList } from "@/components/organizations/OrganizationList";

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
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


export default function AdminOrganizationsPage() {
  return (
    <DashboardShell
      title="Organizations"
      nav={nav}
      allowedRoles={["ADMIN"]}
    >
      <OrganizationList />
    </DashboardShell>
  );
}