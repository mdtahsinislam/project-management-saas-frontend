// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { projectApi } from "@/lib/api";
// import { useSearchParams, useRouter } from "next/navigation";

// export function ProjectList() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const search = searchParams.get("search") || "";
//   const status = searchParams.get("status") || "";
//   const page = searchParams.get("page") || "1";

//   const { data, isLoading } = useQuery({
//     queryKey: ["projects", page, search, status],
//     queryFn: async () => {
//       const res = await projectApi.list({
//         page,
//         limit: 10,
//         ...(search ? { search } : {}),
//         ...(status ? { status } : {}),
//       });
//       return res.data.data;
//     },
//   });

//   const projects = data?.projects || [];

//   return (
//     <div className="space-y-4">
//       <div className="flex flex-wrap gap-2">
//         <input
//           className="input max-w-xs"
//           placeholder="Search..."
//           defaultValue={search}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               const v = (e.target as HTMLInputElement).value;
//               const p = new URLSearchParams(searchParams.toString());
//               if (v) p.set("search", v);
//               else p.delete("search");
//               p.set("page", "1");
//               router.push(`?${p.toString()}`);
//             }
//           }}
//         />
//         <select
//           className="input max-w-[160px]"
//           value={status}
//           onChange={(e) => {
//             const p = new URLSearchParams(searchParams.toString());
//             if (e.target.value) p.set("status", e.target.value);
//             else p.delete("status");
//             router.push(`?${p.toString()}`);
//           }}
//         >
//           <option value="">All Status</option>
//           <option value="ACTIVE">ACTIVE</option>
//           <option value="COMPLETED">COMPLETED</option>
//           <option value="ARCHIVED">ARCHIVED</option>
//         </select>
//       </div>

//       {isLoading && <p className="text-slate-400">Loading projects...</p>}

//       <div className="grid gap-3">
//         {projects.length === 0 && !isLoading && (
//           <div className="card p-6 text-slate-400">No projects found</div>
//         )}
//         {projects.map((p: any) => (
//           <div key={p.id} className="card p-4 flex justify-between">
//             <div>
//               <h3 className="font-semibold">{p.name}</h3>
//               <p className="text-sm text-slate-400">{p.description || "-"}</p>
//               <p className="text-xs text-slate-500 mt-1">ID: {p.id}</p>
//             </div>
//             <span className="badge bg-emerald-500/15 text-emerald-300 h-fit">
//               {p.status}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//D:\project-management-saas-frontend\src\components\projects\ProjectList.tsx
"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { projectApi, orgApi } from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

type Project = {
  id: string;
  name: string;
  description?: string | null;
  status?: string;
  organizationId?: string;
  teamId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export function ProjectList() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "";

  // Create form
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [description, setDescription] = useState("");
  const [teamId, setTeamId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Edit form
  const [editing, setEditing] = useState<Project | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editStatus, setEditStatus] = useState("ACTIVE");

  // Organizations (dropdown-এর জন্য)
  const { data: orgData } = useQuery({
    queryKey: ["organizations-for-project"],
    queryFn: async () => (await orgApi.list({ page: 1, limit: 50 })).data.data,
  });
  const organizations =
    orgData?.organizations || (Array.isArray(orgData) ? orgData : []);

  // Projects list
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects", search, status],
    queryFn: async () => {
      const res = await projectApi.list({
        page: 1,
        limit: 50,
        ...(search ? { search } : {}),
        ...(status ? { status } : {}),
      });
      return res.data.data;
    },
  });
  const projects: Project[] =
    data?.projects || (Array.isArray(data) ? data : []);

  // CREATE
  const createMutation = useMutation({
    mutationFn: () =>
      projectApi.create({
        name: name.trim(),
        organizationId,
        description: description.trim() || undefined,
        teamId: teamId.trim() || undefined,
        startDate: startDate ? new Date(startDate).toISOString() : undefined,
        endDate: endDate ? new Date(endDate).toISOString() : undefined,
      }),
    onSuccess: () => {
      toast.success("Project created");
      setOpen(false);
      setName("");
      setOrganizationId("");
      setDescription("");
      setTeamId("");
      setStartDate("");
      setEndDate("");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Create failed"),
  });

  // UPDATE
  const updateMutation = useMutation({
    mutationFn: () =>
      projectApi.update(editing!.id, {
        name: editName.trim(),
        description: editDescription.trim() || undefined,
        status: editStatus,
      }),
    onSuccess: () => {
      toast.success("Project updated");
      setEditing(null);
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Update failed"),
  });

  // DELETE
  const deleteMutation = useMutation({
    mutationFn: (id: string) => projectApi.remove(id),
    onSuccess: () => {
      toast.success("Project deleted");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Delete failed"),
  });

  function startEdit(p: Project) {
    setEditing(p);
    setEditName(p.name);
    setEditDescription(p.description || "");
    setEditStatus(p.status || "ACTIVE");
    setOpen(false);
  }

  // function handleDelete(p: Project) {
  //   if (window.confirm(`Delete project "${p.name}"?`)) {
  //     deleteMutation.mutate(p.id);
  //   }
  // }

  function handleDelete(p: Project) {
  toast(`Delete project "${p.name}"?`, {
    description: "This will soft-delete the project.",
    action: {
      label: "Confirm",
      onClick: () => deleteMutation.mutate(p.id),
    },
    cancel: {
      label: "Cancel",
      onClick: () => {},
    },
    duration: 8000,
  });
}

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Projects</h2>
          <p className="text-sm text-slate-400">Create, update and delete projects</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setOpen((v) => !v);
            setEditing(null);
          }}
        >
          {open ? "Close Form" : "+ Create Project"}
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <input
          className="input max-w-xs"
          placeholder="Search projects..."
          defaultValue={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const v = (e.target as HTMLInputElement).value;
              const p = new URLSearchParams(searchParams.toString());
              if (v) p.set("search", v);
              else p.delete("search");
              router.push(`?${p.toString()}`);
            }
          }}
        />
        <select
          className="input max-w-[160px]"
          value={status}
          onChange={(e) => {
            const p = new URLSearchParams(searchParams.toString());
            if (e.target.value) p.set("status", e.target.value);
            else p.delete("status");
            router.push(`?${p.toString()}`);
          }}
        >
          <option value="">All Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="ARCHIVED">ARCHIVED</option>
        </select>
      </div>

      {/* CREATE FORM */}
      {open && (
        <div className="card p-5 space-y-3 border border-indigo-500/30">
          <h3 className="font-semibold">New Project</h3>

          <div>
            <label className="text-sm text-slate-300">Name *</label>
            <input
              className="input mt-1"
              placeholder="Website Redesign"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Organization *</label>
            <select
              className="input mt-1"
              value={organizationId}
              onChange={(e) => setOrganizationId(e.target.value)}
            >
              <option value="">Select organization</option>
              {organizations.map((org: any) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-slate-300">Description</label>
            <textarea
              className="input mt-1 min-h-20"
              placeholder="Client website redesign"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Team ID (optional)</label>
            <input
              className="input mt-1 "
              placeholder="Not need"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              disabled
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-slate-300">Start Date</label>
              <input
                className="input mt-1 [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">End Date</label>
              <input
                className="input mt-1"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              disabled={
                createMutation.isPending || !name.trim() || !organizationId
              }
              onClick={() => createMutation.mutate()}
            >
              {createMutation.isPending ? "Creating..." : "Create"}
            </button>
            <button className="btn btn-outline" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* EDIT FORM */}
      {editing && (
        <div className="card p-5 space-y-3 border border-amber-500/30">
          <h3 className="font-semibold">Edit Project</h3>
          <input
            className="input"
            placeholder="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
          <textarea
            className="input min-h-20"
            placeholder="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <select
            className="input"
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="ARCHIVED">ARCHIVED</option>
          </select>
          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              disabled={updateMutation.isPending || !editName.trim()}
              onClick={() => updateMutation.mutate()}
            >
              {updateMutation.isPending ? "Saving..." : "Save Changes"}
            </button>
            <button className="btn btn-outline" onClick={() => setEditing(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {isLoading && <p className="text-slate-400">Loading projects...</p>}
      {error && <p className="text-rose-400">Failed to load projects</p>}

      {/* LIST */}
      <div className="grid sm:grid-cols-2 gap-4">
        {!isLoading && projects.length === 0 && (
          <div className="card p-6 text-slate-400 col-span-full">
            No projects found. Click “Create Project”.
          </div>
        )}

        {projects.map((p) => (
          <div key={p.id} className="card p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-slate-400">
                  {p.description || "No description"}
                </p>
              </div>
              <span className="badge bg-emerald-500/15 text-emerald-300">
                {p.status || "ACTIVE"}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 break-all">ID: {p.id}</p>
            <div className="flex gap-2">
              <button className="btn btn-outline text-sm" onClick={() => startEdit(p)}>
                Edit
              </button>
              <button
                className="btn text-sm bg-rose-500/15 text-rose-300 border border-rose-500/30"
                onClick={() => handleDelete(p)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}