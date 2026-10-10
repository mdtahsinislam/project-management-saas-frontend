// //src/app/admin/tasks/page.tsx
// "use client";

// import { DashboardShell } from "@/components/layout/DashboardShell";
// import { TaskList } from "@/components/tasks/TaskList";

// // const nav = [
// //   { href: "/admin", label: "Overview" },
// //   { href: "/admin/organizations", label: "Organizations" },
// //   { href: "/admin/projects", label: "Projects" },
// //   { href: "/admin/tasks", label: "Tasks" },
// //   { href: "/admin/users", label: "Users" },
// //   { href: "/admin/reports", label: "Audit Logs" },
// // ];

// const nav = [
//   { href: "/admin", label: "Overview" },
//   { href: "/admin/organizations", label: "Organizations" },
//   { href: "/admin/projects", label: "Projects" },
//   { href: "/admin/tasks", label: "Tasks" },
//   { href: "/admin/users", label: "Users" },
//   { href: "/admin/reports", label: "Audit Logs" },
// ];

// export default function AdminTasksPage() {
//   return (
//     <DashboardShell title="Tasks" nav={nav} allowedRoles={["ADMIN"]}>
//       <TaskList />
//     </DashboardShell>
//   );
// }





"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { TaskList } from "@/components/tasks/TaskList";

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

export default function AdminTasksPage() {
  return (
    <DashboardShell
      title="Tasks"
      nav={nav}
      allowedRoles={["ADMIN"]}
    >
      <TaskList />
    </DashboardShell>
  );
}