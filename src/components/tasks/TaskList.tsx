


// // //D:\project-management-saas-frontend\src\components\tasks\TaskList.tsx
// // "use client";

// // import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// // import { taskApi } from "@/lib/api";
// // import { toast } from "sonner";

// // export function TaskList() {
// //   const queryClient = useQueryClient();

// //   const { data, isLoading } = useQuery({
// //     queryKey: ["tasks"],
// //     queryFn: async () => (await taskApi.list({ page: 1, limit: 20 })).data.data,
// //   });

// //   const statusMutation = useMutation({
// //     mutationFn: ({ id, status }: { id: string; status: string }) =>
// //       taskApi.updateStatus(id, status),
// //     onSuccess: () => {
// //       toast.success("Status updated");
// //       queryClient.invalidateQueries({ queryKey: ["tasks"] });
// //     },
// //     onError: (err: any) =>
// //       toast.error(err?.response?.data?.message || "Update failed"),
// //   });

// //   const tasks = data?.tasks || [];

// //   if (isLoading) return <p className="text-slate-400">Loading tasks...</p>;

// //   return (
// //     <div className="grid gap-3">
// //       {tasks.length === 0 && (
// //         <div className="card p-6 text-slate-400">No tasks found</div>
// //       )}
// //       {tasks.map((t: any) => (
// //         <div key={t.id} className="card p-4 flex flex-wrap justify-between gap-3">
// //           <div>
// //             <h3 className="font-medium">{t.title}</h3>
// //             <p className="text-xs text-slate-400">
// //               {t.priority} · {t.status}
// //             </p>
// //           </div>
// //           <select
// //             className="input max-w-[160px]"
// //             value={t.status}
// //             onChange={(e) =>
// //               statusMutation.mutate({ id: t.id, status: e.target.value })
// //             }
// //           >
// //             <option value="TODO">TODO</option>
// //             <option value="IN_PROGRESS">IN_PROGRESS</option>
// //             <option value="IN_REVIEW">IN_REVIEW</option>
// //             <option value="DONE">DONE</option>
// //             <option value="CANCELLED">CANCELLED</option>
// //           </select>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }



// //D:\project-management-saas-frontend\src\components\tasks\TaskList.tsx

// "use client";

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { taskApi, projectApi } from "@/lib/api";
// import { toast } from "sonner";
// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { TaskComments } from "@/components/tasks/TaskComments";
// type Task = {
//   id: string;
//   title: string;
//   description?: string | null;
//   status: string;
//   priority: string;
//   projectId: string;
//   assigneeId?: string | null;
//   dueDate?: string | null;
// };

// export function TaskList() {
//   const queryClient = useQueryClient();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const status = searchParams.get("status") || "";
//   const priority = searchParams.get("priority") || "";
//   const search = searchParams.get("search") || "";

//   const [open, setOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [projectId, setProjectId] = useState("");
//   const [taskPriority, setTaskPriority] = useState("MEDIUM");
//   const [description, setDescription] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const [editing, setEditing] = useState<Task | null>(null);
//   const [editTitle, setEditTitle] = useState("");
//   const [editDescription, setEditDescription] = useState("");
//   const [editPriority, setEditPriority] = useState("MEDIUM");

//   const { data: projectData } = useQuery({
//     queryKey: ["projects-for-task"],
//     queryFn: async () =>
//       (await projectApi.list({ page: 1, limit: 50 })).data.data,
//   });
//   const projects =
//     projectData?.projects || (Array.isArray(projectData) ? projectData : []);

//   const { data, isLoading, error } = useQuery({
//     queryKey: ["tasks", status, priority, search],
//     queryFn: async () => {
//       const res = await taskApi.list({
//         page: 1,
//         limit: 50,
//         ...(status ? { status } : {}),
//         ...(priority ? { priority } : {}),
//         ...(search ? { search } : {}),
//       });
//       return res.data.data;
//     },
//   });
//   const tasks: Task[] = data?.tasks || (Array.isArray(data) ? data : []);

//   const createMutation = useMutation({
//     mutationFn: () =>
//       taskApi.create({
//         title: title.trim(),
//         projectId,
//         priority: taskPriority,
//         description: description.trim() || undefined,
//         dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
//       }),
//     onSuccess: () => {
//       toast.success("Task created");
//       setOpen(false);
//       setTitle("");
//       setProjectId("");
//       setTaskPriority("MEDIUM");
//       setDescription("");
//       setDueDate("");
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//     },
//     onError: (err: any) =>
//       toast.error(err?.response?.data?.message || "Create failed"),
//   });

//   const updateMutation = useMutation({
//     mutationFn: () =>
//       taskApi.update(editing!.id, {
//         title: editTitle.trim(),
//         description: editDescription.trim() || undefined,
//         priority: editPriority,
//       }),
//     onSuccess: () => {
//       toast.success("Task updated");
//       setEditing(null);
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//     },
//     onError: (err: any) =>
//       toast.error(err?.response?.data?.message || "Update failed"),
//   });

//   const statusMutation = useMutation({
//     mutationFn: ({ id, status }: { id: string; status: string }) =>
//       taskApi.updateStatus(id, status),
//     onSuccess: () => {
//       toast.success("Status updated");
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//     },
//     onError: (err: any) =>
//       toast.error(err?.response?.data?.message || "Status update failed"),
//   });

//   const deleteMutation = useMutation({
//     mutationFn: (id: string) => taskApi.remove(id),
//     onSuccess: () => {
//       toast.success("Task deleted");
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//     },
//     onError: (err: any) =>
//       toast.error(err?.response?.data?.message || "Delete failed"),
//   });

//   function startEdit(t: Task) {
//     setEditing(t);
//     setEditTitle(t.title);
//     setEditDescription(t.description || "");
//     setEditPriority(t.priority || "MEDIUM");
//     setOpen(false);
//   }

//   function handleDelete(t: Task) {
//     if (window.confirm(`Delete task "${t.title}"?`)) {
//       deleteMutation.mutate(t.id);
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-wrap items-center justify-between gap-3">
//         <div>
//           <h2 className="text-lg font-semibold">Tasks</h2>
//           <p className="text-sm text-slate-400">
//             Create, update status, edit and delete tasks
//           </p>
//         </div>
//         <button
//           className="btn btn-primary"
//           onClick={() => {
//             setOpen((v) => !v);
//             setEditing(null);
//           }}
//         >
//           {open ? "Close Form" : "+ Create Task"}
//         </button>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         <input
//           className="input max-w-xs"
//           placeholder="Search tasks..."
//           defaultValue={search}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               const v = (e.target as HTMLInputElement).value;
//               const p = new URLSearchParams(searchParams.toString());
//               if (v) p.set("search", v);
//               else p.delete("search");
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
//           <option value="TODO">TODO</option>
//           <option value="IN_PROGRESS">IN_PROGRESS</option>
//           <option value="IN_REVIEW">IN_REVIEW</option>
//           <option value="DONE">DONE</option>
//           <option value="CANCELLED">CANCELLED</option>
//         </select>
//         <select
//           className="input max-w-[160px]"
//           value={priority}
//           onChange={(e) => {
//             const p = new URLSearchParams(searchParams.toString());
//             if (e.target.value) p.set("priority", e.target.value);
//             else p.delete("priority");
//             router.push(`?${p.toString()}`);
//           }}
//         >
//           <option value="">All Priority</option>
//           <option value="LOW">LOW</option>
//           <option value="MEDIUM">MEDIUM</option>
//           <option value="HIGH">HIGH</option>
//           <option value="URGENT">URGENT</option>
//         </select>
//       </div>

//       {open && (
//         <div className="card p-5 space-y-3 border border-indigo-500/30">
//           <h3 className="font-semibold">New Task</h3>
//           <div>
//             <label className="text-sm text-slate-300">Title *</label>
//             <input
//               className="input mt-1"
//               placeholder="Design Homepage"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="text-sm text-slate-300">Project *</label>
//             <select
//               className="input mt-1"
//               value={projectId}
//               onChange={(e) => setProjectId(e.target.value)}
//             >
//               <option value="">Select project</option>
//               {projects.map((p: any) => (
//                 <option key={p.id} value={p.id}>
//                   {p.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label className="text-sm text-slate-300">Priority *</label>
//             <select
//               className="input mt-1"
//               value={taskPriority}
//               onChange={(e) => setTaskPriority(e.target.value)}
//             >
//               <option value="LOW">LOW</option>
//               <option value="MEDIUM">MEDIUM</option>
//               <option value="HIGH">HIGH</option>
//               <option value="URGENT">URGENT</option>
//             </select>
//           </div>
//           <div>
//             <label className="text-sm text-slate-300">Description</label>
//             <textarea
//               className="input mt-1 min-h-20"
//               placeholder="Create modern homepage UI"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//           <div>
//             <label className="text-sm text-slate-300">Due Date</label>
//             <input
//               className="input mt-1"
//               type="date"
//               value={dueDate}
//               onChange={(e) => setDueDate(e.target.value)}
//             />
//           </div>
//           <div className="flex gap-2">
//             <button
//               className="btn btn-primary"
//               disabled={
//                 createMutation.isPending || !title.trim() || !projectId
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

//       {editing && (
//         <div className="card p-5 space-y-3 border border-amber-500/30">
//           <h3 className="font-semibold">Edit Task</h3>
//           <input
//             className="input"
//             value={editTitle}
//             onChange={(e) => setEditTitle(e.target.value)}
//             placeholder="Title"
//           />
//           <textarea
//             className="input min-h-20"
//             value={editDescription}
//             onChange={(e) => setEditDescription(e.target.value)}
//             placeholder="Description"
//           />
//           <select
//             className="input"
//             value={editPriority}
//             onChange={(e) => setEditPriority(e.target.value)}
//           >
//             <option value="LOW">LOW</option>
//             <option value="MEDIUM">MEDIUM</option>
//             <option value="HIGH">HIGH</option>
//             <option value="URGENT">URGENT</option>
//           </select>
//           <div className="flex gap-2">
//             <button
//               className="btn btn-primary"
//               disabled={updateMutation.isPending || !editTitle.trim()}
//               onClick={() => updateMutation.mutate()}
//             >
//               {updateMutation.isPending ? "Saving..." : "Save Changes"}
//             </button>
//             <button className="btn btn-outline" onClick={() => setEditing(null)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {isLoading && <p className="text-slate-400">Loading tasks...</p>}
//       {error && <p className="text-rose-400">Failed to load tasks</p>}

//       <div className="grid gap-3">
//         {!isLoading && tasks.length === 0 && (
//           <div className="card p-6 text-slate-400">
//             No tasks found. Create a project first, then add tasks.
//           </div>
//         )}

//         {tasks.map((t) => (
//           <div key={t.id} className="card p-4 space-y-3">
//             <div className="flex flex-wrap items-start justify-between gap-3">
//               <div>
//                 <h3 className="font-semibold">{t.title}</h3>
//                 <p className="text-sm text-slate-400">
//                   {t.description || "No description"}
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 <span className="badge bg-slate-500/20 text-slate-300">
//                   {t.priority}
//                 </span>
//                 <span className="badge bg-indigo-500/15 text-indigo-300">
//                   {t.status}
//                 </span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 items-center">
//               <select
//                 className="input max-w-[180px]"
//                 value={t.status}
//                 onChange={(e) =>
//                   statusMutation.mutate({ id: t.id, status: e.target.value })
//                 }
//               >
//                 <option value="TODO">TODO</option>
//                 <option value="IN_PROGRESS">IN_PROGRESS</option>
//                 <option value="IN_REVIEW">IN_REVIEW</option>
//                 <option value="DONE">DONE</option>
//                 <option value="CANCELLED">CANCELLED</option>
//               </select>
//               <button
//                 className="btn btn-outline text-sm"
//                 onClick={() => startEdit(t)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="btn text-sm bg-rose-500/15 text-rose-300 border border-rose-500/30"
//                 onClick={() => handleDelete(t)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


//D:\project-management-saas-frontend\src\components\tasks\TaskList.tsx

"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { taskApi, projectApi } from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TaskComments } from "@/components/tasks/TaskComments";

type Task = {
  id: string;
  title: string;
  description?: string | null;
  status: string;
  priority: string;
  projectId: string;
  assigneeId?: string | null;
  dueDate?: string | null;
};

export function TaskList() {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  const status = searchParams.get("status") || "";
  const priority = searchParams.get("priority") || "";
  const search = searchParams.get("search") || "";

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [projectId, setProjectId] = useState("");
  const [taskPriority, setTaskPriority] = useState("MEDIUM");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [editing, setEditing] = useState<Task | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPriority, setEditPriority] = useState("MEDIUM");

  const { data: projectData } = useQuery({
    queryKey: ["projects-for-task"],
    queryFn: async () =>
      (await projectApi.list({ page: 1, limit: 50 })).data.data,
  });
  const projects =
    projectData?.projects || (Array.isArray(projectData) ? projectData : []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks", status, priority, search],
    queryFn: async () => {
      const res = await taskApi.list({
        page: 1,
        limit: 50,
        ...(status ? { status } : {}),
        ...(priority ? { priority } : {}),
        ...(search ? { search } : {}),
      });
      return res.data.data;
    },
  });
  const tasks: Task[] = data?.tasks || (Array.isArray(data) ? data : []);

  const createMutation = useMutation({
    mutationFn: () =>
      taskApi.create({
        title: title.trim(),
        projectId,
        priority: taskPriority,
        description: description.trim() || undefined,
        dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
      }),
    onSuccess: () => {
      toast.success("Task created");
      setOpen(false);
      setTitle("");
      setProjectId("");
      setTaskPriority("MEDIUM");
      setDescription("");
      setDueDate("");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Create failed"),
  });

  const updateMutation = useMutation({
    mutationFn: () =>
      taskApi.update(editing!.id, {
        title: editTitle.trim(),
        description: editDescription.trim() || undefined,
        priority: editPriority,
      }),
    onSuccess: () => {
      toast.success("Task updated");
      setEditing(null);
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Update failed"),
  });

  const statusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      taskApi.updateStatus(id, status),
    onSuccess: () => {
      toast.success("Status updated");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Status update failed"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => taskApi.remove(id),
    onSuccess: () => {
      toast.success("Task deleted");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Delete failed"),
  });

  function startEdit(t: Task) {
    setEditing(t);
    setEditTitle(t.title);
    setEditDescription(t.description || "");
    setEditPriority(t.priority || "MEDIUM");
    setOpen(false);
  }

  // function handleDelete(t: Task) {
  //   if (window.confirm(`Delete task "${t.title}"?`)) {
  //     deleteMutation.mutate(t.id);
  //   }
  // }

  function handleDelete(t: Task) {
  toast(`Delete task "${t.title}"?`, {
    description: "This will soft-delete the task.",
    action: {
      label: "Confirm",
      onClick: () => deleteMutation.mutate(t.id),
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
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Tasks</h2>
          <p className="text-sm text-slate-400">
            Create, update status, edit, delete and comment on tasks
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setOpen((v) => !v);
            setEditing(null);
          }}
        >
          {open ? "Close Form" : "+ Create Task"}
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        <input
          className="input max-w-xs"
          placeholder="Search tasks..."
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
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="IN_REVIEW">IN_REVIEW</option>
          <option value="DONE">DONE</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
        <select
          className="input max-w-[160px]"
          value={priority}
          onChange={(e) => {
            const p = new URLSearchParams(searchParams.toString());
            if (e.target.value) p.set("priority", e.target.value);
            else p.delete("priority");
            router.push(`?${p.toString()}`);
          }}
        >
          <option value="">All Priority</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
          <option value="URGENT">URGENT</option>
        </select>
      </div>

      {open && (
        <div className="card p-5 space-y-3 border border-indigo-500/30">
          <h3 className="font-semibold">New Task</h3>
          <div>
            <label className="text-sm text-slate-300">Title *</label>
            <input
              className="input mt-1"
              placeholder="Design Homepage"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Project *</label>
            <select
              className="input mt-1"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
            >
              <option value="">Select project</option>
              {projects.map((p: any) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-300">Priority *</label>
            <select
              className="input mt-1"
              value={taskPriority}
              onChange={(e) => setTaskPriority(e.target.value)}
            >
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
              <option value="URGENT">URGENT</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-300">Description</label>
            <textarea
              className="input mt-1 min-h-20"
              placeholder="Create modern homepage UI"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-slate-300">Due Date</label>
            <input
              className="input mt-1"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              disabled={
                createMutation.isPending || !title.trim() || !projectId
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

      {editing && (
        <div className="card p-5 space-y-3 border border-amber-500/30">
          <h3 className="font-semibold">Edit Task</h3>
          <input
            className="input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className="input min-h-20"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description"
          />
          <select
            className="input"
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
            <option value="URGENT">URGENT</option>
          </select>
          <div className="flex gap-2">
            <button
              className="btn btn-primary"
              disabled={updateMutation.isPending || !editTitle.trim()}
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

      {isLoading && <p className="text-slate-400">Loading tasks...</p>}
      {error && <p className="text-rose-400">Failed to load tasks</p>}

      <div className="grid gap-3">
        {!isLoading && tasks.length === 0 && (
          <div className="card p-6 text-slate-400">
            No tasks found. Create a project first, then add tasks.
          </div>
        )}

        {tasks.map((t) => (
          <div key={t.id} className="card p-4 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm text-slate-400">
                  {t.description || "No description"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="badge bg-slate-500/20 text-slate-300">
                  {t.priority}
                </span>
                <span className="badge bg-indigo-500/15 text-indigo-300">
                  {t.status}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <select
                className="input max-w-[180px]"
                value={t.status}
                onChange={(e) =>
                  statusMutation.mutate({ id: t.id, status: e.target.value })
                }
              >
                <option value="TODO">TODO</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="IN_REVIEW">IN_REVIEW</option>
                <option value="DONE">DONE</option>
                <option value="CANCELLED">CANCELLED</option>
              </select>
              <button
                className="btn btn-outline text-sm"
                onClick={() => startEdit(t)}
              >
                Edit
              </button>
              <button
                className="btn text-sm bg-rose-500/15 text-rose-300 border border-rose-500/30"
                onClick={() => handleDelete(t)}
              >
                Delete
              </button>
            </div>

            {/* Comments — এখানেই বসানো */}
            <TaskComments taskId={t.id} />
          </div>
        ))}
      </div>
    </div>
  );
}