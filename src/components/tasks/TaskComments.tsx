"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { taskApi } from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";

type Comment = {
  id: string;
  content: string;
  createdAt: string;
  author?: {
    id: string;
    name: string;
  };
};

export function TaskComments({ taskId }: { taskId: string }) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["task-comments", taskId],
    queryFn: async () => {
      const res = await taskApi.comments(taskId);
      return res.data.data;
    },
    enabled: open, // শুধু open হলে load
  });

  const comments: Comment[] =
    data?.comments || (Array.isArray(data) ? data : []);

  const addMutation = useMutation({
    mutationFn: () => taskApi.addComment(taskId, content.trim()),
    onSuccess: () => {
      toast.success("Comment added");
      setContent("");
      queryClient.invalidateQueries({ queryKey: ["task-comments", taskId] });
    },
    onError: (err: any) =>
      toast.error(err?.response?.data?.message || "Failed to add comment"),
  });

  return (
    <div className="mt-3 border-t border-[var(--border)] pt-3">
      <button
        className="btn btn-outline text-sm"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Hide Comments" : "Comments"}
      </button>

      {open && (
        <div className="mt-3 space-y-3">
          {/* Add Comment */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              className="input flex-1"
              placeholder="Write a comment..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && content.trim()) {
                  addMutation.mutate();
                }
              }}
            />
            <button
              className="btn btn-primary text-sm"
              disabled={addMutation.isPending || !content.trim()}
              onClick={() => addMutation.mutate()}
            >
              {addMutation.isPending ? "Posting..." : "Add Comment"}
            </button>
          </div>

          {/* List */}
          {isLoading && (
            <p className="text-sm text-slate-400">Loading comments...</p>
          )}

          {!isLoading && comments.length === 0 && (
            <p className="text-sm text-slate-400">No comments yet</p>
          )}

          <div className="space-y-2">
            {comments.map((c) => (
              <div
                key={c.id}
                className="rounded-lg bg-[#0f172a] border border-[var(--border)] p-3"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-medium text-indigo-300">
                    {c.author?.name || "User"}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {c.createdAt
                      ? new Date(c.createdAt).toLocaleString()
                      : ""}
                  </span>
                </div>
                <p className="text-sm text-slate-300">{c.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}