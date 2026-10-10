
// //D:\project-management-saas-frontend\src\components\organizations\OrganizationList.tsx

// "use client";

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { orgApi } from "@/lib/api";
// import { toast } from "sonner";
// import { useState } from "react";

// export function OrganizationList() {
//   const queryClient = useQueryClient();
//   const [name, setName] = useState("");
//   const [slug, setSlug] = useState("");
//   const [description, setDescription] = useState("");

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["organizations"],
//     queryFn: async () => {
//       const res = await orgApi.list({ page: 1, limit: 20 });
//       return res.data.data;
//     },
//   });

//   const createMutation = useMutation({
//     mutationFn: () =>
//       orgApi.create({
//         name,
//         slug,
//         description,
//       }),
//     onSuccess: () => {
//       toast.success("Organization created");
//       setName("");
//       setSlug("");
//       setDescription("");
//       queryClient.invalidateQueries({ queryKey: ["organizations"] });
//     },
//     onError: (err: any) => {
//       toast.error(err?.response?.data?.message || "Create failed");
//     },
//   });

//   // Backend response shape: { organizations: [], pagination } অথবা array
//   const organizations =
//     data?.organizations || (Array.isArray(data) ? data : []);

//   if (isLoading) return <p className="text-slate-400">Loading organizations...</p>;
//   if (error) return <p className="text-rose-400">Failed to load organizations</p>;

//   return (
//     <div className="space-y-6">
//       {/* Create Form */}
//       <div className="card p-4 space-y-3">
//         <h3 className="font-semibold">Create Organization</h3>
//         <input
//           className="input"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           className="input"
//           placeholder="Slug (e.g. tech-solutions)"
//           value={slug}
//           onChange={(e) => setSlug(e.target.value)}
//         />
//         <textarea
//           className="input min-h-20"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button
//           className="btn btn-primary"
//           disabled={createMutation.isPending}
//           onClick={() => createMutation.mutate()}
//         >
//           {createMutation.isPending ? "Creating..." : "Create"}
//         </button>
//       </div>

//       {/* List */}
//       <div className="grid gap-3">
//         {organizations.length === 0 && (
//           <div className="card p-6 text-slate-400">No organizations found</div>
//         )}
//         {organizations.map((org: any) => (
//           <div key={org.id} className="card p-4 flex justify-between gap-3">
//             <div>
//               <h4 className="font-semibold">{org.name}</h4>
//               <p className="text-xs text-slate-400">{org.slug}</p>
//               <p className="text-sm text-slate-300 mt-1">
//                 {org.description || "No description"}
//               </p>
//             </div>
//             <span className="badge bg-indigo-500/15 text-indigo-300 h-fit">
//               Org
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { orgApi } from "@/lib/api";
// import { toast } from "sonner";
// import { useState } from "react";

// export function OrganizationList() {
//   const queryClient = useQueryClient();
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [slug, setSlug] = useState("");
//   const [description, setDescription] = useState("");

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["organizations"],
//     queryFn: async () => {
//       const res = await orgApi.list({ page: 1, limit: 50 });
//       return res.data.data;
//     },
//   });

//   const createMutation = useMutation({
//     mutationFn: () =>
//       orgApi.create({
//         name: name.trim(),
//         slug: slug.trim(),
//         description: description.trim() || undefined,
//       }),
//     onSuccess: () => {
//       toast.success("Organization created successfully");
//       setName("");
//       setSlug("");
//       setDescription("");
//       setOpen(false);
//       queryClient.invalidateQueries({ queryKey: ["organizations"] });
//     },
//     onError: (err: any) => {
//       toast.error(err?.response?.data?.message || "Create failed");
//     },
//   });

//   const organizations =
//     data?.organizations || (Array.isArray(data) ? data : []);

//   return (
//     <div className="space-y-6">
//       {/* Header + Create button */}
//       <div className="flex items-center justify-between gap-3">
//         <div>
//           <h2 className="text-lg font-semibold">Organizations</h2>
//           <p className="text-sm text-slate-400">
//             Create and manage your organizations
//           </p>
//         </div>
//         <button className="btn btn-primary" onClick={() => setOpen((v) => !v)}>
//           {open ? "Close Form" : "+ Create Organization"}
//         </button>
//       </div>

//       {/* Create Form (click করলে বের হবে) */}
//       {open && (
//         <div className="card p-5 space-y-3 border border-indigo-500/30">
//           <h3 className="font-semibold">New Organization</h3>

//           <div>
//             <label className="text-sm text-slate-300">Name *</label>
//             <input
//               className="input mt-1"
//               placeholder="Tech Solutions Ltd"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="text-sm text-slate-300">Slug *</label>
//             <input
//               className="input mt-1"
//               placeholder="tech-solutions"
//               value={slug}
//               onChange={(e) =>
//                 setSlug(
//                   e.target.value
//                     .toLowerCase()
//                     .replace(/\s+/g, "-")
//                     .replace(/[^a-z0-9-]/g, "")
//                 )
//               }
//             />
//             <p className="text-xs text-slate-500 mt-1">
//               Unique URL key (e.g. tech-solutions)
//             </p>
//           </div>

//           <div>
//             <label className="text-sm text-slate-300">Description</label>
//             <textarea
//               className="input mt-1 min-h-24"
//               placeholder="Software company"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>

//           <div className="flex gap-2">
//             <button
//               className="btn btn-primary"
//               disabled={
//                 createMutation.isPending || !name.trim() || !slug.trim()
//               }
//               onClick={() => createMutation.mutate()}
//             >
//               {createMutation.isPending ? "Creating..." : "Create"}
//             </button>
//             <button className="btn btn-outline" onClick={() => setOpen(false)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Loading / Error */}
//       {isLoading && <p className="text-slate-400">Loading organizations...</p>}
//       {error && (
//         <p className="text-rose-400">Failed to load organizations</p>
//       )}

//       {/* Cards List */}
//       <div className="grid sm:grid-cols-2 gap-4">
//         {!isLoading && organizations.length === 0 && (
//           <div className="card p-6 text-slate-400 col-span-full">
//             No organizations yet. Click “Create Organization”.
//           </div>
//         )}

//         {organizations.map((org: any) => (
//           <div key={org.id} className="card p-4 space-y-2">
//             <div className="flex items-start justify-between gap-2">
//               <h3 className="font-semibold text-lg">{org.name}</h3>
//               <span className="badge bg-indigo-500/15 text-indigo-300">
//                 Org
//               </span>
//             </div>
//             <p className="text-xs text-slate-400">/{org.slug}</p>
//             <p className="text-sm text-slate-300">
//               {org.description || "No description"}
//             </p>
//             <p className="text-[11px] text-slate-500 break-all">ID: {org.id}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//D:\project-management-saas-frontend\src\components\organizations\OrganizationList.tsx


"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { orgApi } from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";

type Org = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
};

export function OrganizationList() {
  const queryClient = useQueryClient();

  // Create form
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  // Edit form
  const [editing, setEditing] = useState<Org | null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["organizations"],
    queryFn: async () => {
      const res = await orgApi.list({ page: 1, limit: 50 });
      return res.data.data;
    },
  });

  const organizations: Org[] =
    data?.organizations || (Array.isArray(data) ? data : []);

  // CREATE
  const createMutation = useMutation({
    mutationFn: () =>
      orgApi.create({
        name: name.trim(),
        slug: slug.trim(),
        description: description.trim() || undefined,
      }),
    onSuccess: () => {
      toast.success("Organization created");
      setName("");
      setSlug("");
      setDescription("");
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Create failed"),
  });

  // UPDATE  → PATCH /organizations/{id}
  const updateMutation = useMutation({
    mutationFn: () =>
      orgApi.update(editing!.id, {
        name: editName.trim(),
        description: editDescription.trim() || undefined,
      }),
    onSuccess: () => {
      toast.success("Organization updated");
      setEditing(null);
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Update failed"),
  });

  // SOFT DELETE  → DELETE /organizations/{id}
  const deleteMutation = useMutation({
    mutationFn: (id: string) => orgApi.remove(id),
    onSuccess: () => {
      toast.success("Organization deleted");
      queryClient.invalidateQueries({ queryKey: ["organizations"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Delete failed"),
  });

  function startEdit(org: Org) {
    setEditing(org);
    setEditName(org.name);
    setEditDescription(org.description || "");
    setOpen(false);
  }

  // function handleDelete(org: Org) {
  //   const ok = window.confirm(`Delete "${org.name}"? (Soft delete)`);
  //   if (ok) deleteMutation.mutate(org.id);
  // }

  function handleDelete(org: Org) {
  toast(`Delete "${org.name}"?`, {
    description: "This will soft-delete the organization.",
    action: {
      label: "Confirm",
      onClick: () => deleteMutation.mutate(org.id),
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
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Organizations</h2>
          <p className="text-sm text-slate-400">Create, update and delete</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setOpen((v) => !v);
            setEditing(null);
          }}
        >
          {open ? "Close Form" : "+ Create Organization"}
        </button>
      </div>

      {/* CREATE FORM */}
      {open && (
        <div className="card p-5 space-y-3 border border-indigo-500/30">
          <h3 className="font-semibold">New Organization</h3>
          <input
            className="input"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            placeholder="Slug * (unique)"
            value={slug}
            onChange={(e) =>
              setSlug(
                e.target.value
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, "")
              )
            }
          />
          <textarea
            className="input min-h-20"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              disabled={
                createMutation.isPending || !name.trim() || !slug.trim()
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
          <h3 className="font-semibold">Edit Organization</h3>
          <p className="text-xs text-slate-400">ID: {editing.id}</p>
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

      {isLoading && <p className="text-slate-400">Loading...</p>}
      {error && <p className="text-rose-400">Failed to load organizations</p>}

      {/* LIST */}
      <div className="grid sm:grid-cols-2 gap-4">
        {!isLoading && organizations.length === 0 && (
          <div className="card p-6 text-slate-400 col-span-full">
            No organizations found
          </div>
        )}

        {organizations.map((org) => (
          <div key={org.id} className="card p-4 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">{org.name}</h3>
                <p className="text-xs text-slate-400">/{org.slug}</p>
              </div>
              <span className="badge bg-indigo-500/15 text-indigo-300">Org</span>
            </div>

            <p className="text-sm text-slate-300">
              {org.description || "No description"}
            </p>

            <div className="flex gap-2 pt-1">
              <button
                className="btn btn-outline text-sm"
                onClick={() => startEdit(org)}
              >
                Edit
              </button>
              <button
                className="btn text-sm bg-rose-500/15 text-rose-300 border border-rose-500/30"
                disabled={deleteMutation.isPending}
                onClick={() => handleDelete(org)}
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