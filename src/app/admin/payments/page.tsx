"use client";

import { useQuery } from "@tanstack/react-query";
import { paymentApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
//D:\project-management-saas-frontend\src\app\admin\payments\page.tsx
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

export default function AdminPaymentsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || "1";

  const { data, isLoading, error } = useQuery({
    queryKey: ["admin-payments", page],
    queryFn: async () => {
      const res = await paymentApi.list({ page, limit: 20 });
      return res.data.data;
    },
  });

  const payments =
    data?.payments || (Array.isArray(data) ? data : []);
  const pagination = data?.pagination;

  return (
    <DashboardShell title="Payments" nav={nav} allowedRoles={["ADMIN"]}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-slate-400">All payment records</p>
          <Link href="/pricing" className="btn btn-primary text-sm">
            Buy a Plan
          </Link>
        </div>

        {isLoading && <p className="text-slate-400">Loading payments...</p>}
        {error && <p className="text-rose-400">Failed to load payments</p>}

        <div className="space-y-2">
          {payments.map((p: any) => (
            <div
              key={p.id}
              className="card p-4 flex flex-wrap items-center justify-between gap-3"
            >
              <div>
                <p className="font-semibold">
                  {p.amount} {p.currency || (p.method === "BKASH" ? "BDT" : "USD")}
                </p>
                <p className="text-xs text-slate-400 uppercase mt-0.5">
                  {p.method || "—"} · {p.description || "Payment"}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 break-all">
                  {p.id}
                </p>
              </div>
              <span
                className={`badge ${
                  p.status === "SUCCESS"
                    ? "bg-emerald-500/15 text-emerald-300"
                    : p.status === "FAILED"
                    ? "bg-rose-500/15 text-rose-300"
                    : "bg-amber-500/15 text-amber-300"
                }`}
              >
                {p.status || "PENDING"}
              </span>
            </div>
          ))}

          {!isLoading && payments.length === 0 && (
            <div className="card p-6 text-slate-400">No payments found</div>
          )}
        </div>

        {pagination && (
          <div className="flex gap-2 text-sm">
            <button
              className="btn btn-outline text-xs"
              disabled={Number(page) <= 1}
              onClick={() =>
                router.push(`/admin/payments?page=${Number(page) - 1}`)
              }
            >
              Prev
            </button>
            <button
              className="btn btn-outline text-xs"
              onClick={() =>
                router.push(`/admin/payments?page=${Number(page) + 1}`)
              }
            >
              Next
            </button>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}