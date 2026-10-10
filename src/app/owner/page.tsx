// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { orgApi, projectApi } from "@/lib/api";
// import { DashboardShell } from "@/components/layout/DashboardShell";

// const nav = [
//   { href: "/owner", label: "Overview" },
//   { href: "/owner/projects", label: "Projects" },
//   { href: "/owner/tasks", label: "Tasks" },
//   { href: "/owner/profile", label: "Profile" },
// ];

// export default function OwnerPage() {
//   const orgs = useQuery({
//     queryKey: ["orgs"],
//     queryFn: async () => (await orgApi.list()).data.data,
//   });
//   const projects = useQuery({
//     queryKey: ["projects"],
//     queryFn: async () => (await projectApi.list({ page: 1, limit: 5 })).data.data,
//   });

//   return (
//     <DashboardShell title="Owner Overview" nav={nav} allowedRoles={["OWNER", "ADMIN"]}>
//       <div className="grid md:grid-cols-2 gap-4">
//         <div className="card p-4">
//           <h2 className="font-semibold mb-2">Organizations</h2>
//           {orgs.isLoading && <p className="text-slate-400 text-sm">Loading...</p>}
//           <pre className="text-xs text-slate-400 overflow-auto max-h-48">
//             {JSON.stringify(orgs.data, null, 2)}
//           </pre>
//         </div>
//         <div className="card p-4">
//           <h2 className="font-semibold mb-2">Recent Projects</h2>
//           {projects.isLoading && <p className="text-slate-400 text-sm">Loading...</p>}
//           <pre className="text-xs text-slate-400 overflow-auto max-h-48">
//             {JSON.stringify(projects.data, null, 2)}
//           </pre>
//         </div>
//       </div>
//     </DashboardShell>
//   );
// }


//D:\project-management-saas-frontend\src\app\owner\page.tsx
"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { OrganizationList } from "@/components/organizations/OrganizationList";
import Link from "next/link";

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



export default function OwnerPage() {
  return (
    <DashboardShell
      title="Owner Overview"
      nav={nav}
      allowedRoles={["OWNER", "ADMIN"]}
    >
      <div className="mb-4">
        <Link href="/owner/organizations" className="btn btn-primary text-sm">
          Manage Organizations
        </Link>
      </div>
      <OrganizationList />
    </DashboardShell>
  );
}