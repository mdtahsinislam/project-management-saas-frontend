

// //D:\project-management-saas-frontend\src\app\owner\tasks\page.tsx

// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { taskApi } from "@/lib/api";
// import { DashboardShell } from "@/components/layout/DashboardShell";


// // const nav = [
// //   { href: "/owner", label: "Overview" },
// //   { href: "/owner/organizations", label: "Organizations" },
// //   { href: "/owner/projects", label: "Projects" },
// //   { href: "/owner/tasks", label: "Tasks" },
// //   { href: "/owner/profile", label: "Profile" },
// // ];

// const nav = [
//   { href: "/owner", label: "Overview" },
//   { href: "/owner/organizations", label: "Organizations" },
//   { href: "/owner/projects", label: "Projects" },
//   { href: "/owner/tasks", label: "Tasks" },
//   { href: "/owner/profile", label: "Profile" },
// ];
// export default function OwnerTasksPage() {
//   const { data, isLoading } = useQuery({
//     queryKey: ["owner-tasks"],
//     queryFn: async () => (await taskApi.list({ page: 1, limit: 20 })).data.data,
//   });

//   const tasks = data?.tasks || [];

//   return (
//     <DashboardShell title="All Tasks" nav={nav} allowedRoles={["OWNER", "ADMIN"]}>
//       {isLoading && <p className="text-slate-400">Loading tasks...</p>}
//       <div className="grid gap-3">
//         {tasks.length === 0 && !isLoading && (
//           <div className="card p-6 text-slate-400">No tasks found</div>
//         )}
//         {tasks.map(
//           (t: {
//             id: string;
//             title: string;
//             status: string;
//             priority: string;
//           }) => (
//             <div key={t.id} className="card p-4 flex justify-between">
//               <div>
//                 <h3 className="font-medium">{t.title}</h3>
//                 <p className="text-xs text-slate-400">{t.priority}</p>
//               </div>
//               <span className="badge bg-indigo-500/15 text-indigo-300">
//                 {t.status}
//               </span>
//             </div>
//           )
//         )}
//       </div>
//     </DashboardShell>
//   );
// }

//D:\project-management-saas-frontend\src\app\owner\tasks\page.tsx
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