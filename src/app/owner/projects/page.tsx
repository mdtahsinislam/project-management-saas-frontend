

// //D:\project-management-saas-frontend\src\app\owner\projects\page.tsx
// //D:\project-management-saas-frontend\src\app\owner\projects\page.tsx
// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { projectApi } from "@/lib/api";
// import { DashboardShell } from "@/components/layout/DashboardShell";
// import { useSearchParams, useRouter } from "next/navigation";

// const nav = [
//   { href: "/owner", label: "Overview" },
//   { href: "/owner/projects", label: "Projects" },
//   { href: "/owner/tasks", label: "Tasks" },
//   { href: "/owner/profile", label: "Profile" },
// ];

// export default function OwnerProjectsPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const search = searchParams.get("search") || "";
//   const page = searchParams.get("page") || "1";

//   const { data, isLoading } = useQuery({
//     queryKey: ["owner-projects", page, search],
//     queryFn: async () =>
//       (await projectApi.list({ page, limit: 10, search })).data.data,
//   });

//   const projects = data?.projects || [];

//   return (
//     <DashboardShell title="Projects" nav={nav} allowedRoles={["OWNER", "ADMIN"]}>
//       <div className="mb-4 flex gap-2">
//         <input
//           className="input max-w-sm"
//           placeholder="Search projects..."
//           defaultValue={search}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               const value = (e.target as HTMLInputElement).value;
//               const params = new URLSearchParams(searchParams.toString());
//               if (value) params.set("search", value);
//               else params.delete("search");
//               params.set("page", "1");
//               router.push(`/owner/projects?${params.toString()}`);
//             }
//           }}
//         />
//       </div>

//       {isLoading && <p className="text-slate-400">Loading projects...</p>}

//       <div className="grid gap-3">
//         {projects.length === 0 && !isLoading && (
//           <div className="card p-6 text-slate-400">No projects found</div>
//         )}
//         {projects.map((p: { id: string; name: string; status: string; description?: string }) => (
//           <div key={p.id} className="card p-4">
//             <div className="flex justify-between gap-3">
//               <div>
//                 <h3 className="font-semibold">{p.name}</h3>
//                 <p className="text-sm text-slate-400">{p.description || "No description"}</p>
//               </div>
//               <span className="badge bg-emerald-500/15 text-emerald-300 h-fit">
//                 {p.status}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </DashboardShell>
//   );
// }





//D:\project-management-saas-frontend\src\app\owner\projects\page.tsx


"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { ProjectList } from "@/components/projects/ProjectList";

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