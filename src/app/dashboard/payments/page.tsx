"use client";

import { useQuery } from "@tanstack/react-query";
import { paymentApi } from "@/lib/api";
import { DashboardShell } from "@/components/layout/DashboardShell";
import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "My Tasks" },
  { href: "/dashboard/tasks", label: "All Tasks" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/payments", label: "Payments" },
];

export default function MemberPaymentsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["my-payments"],
    queryFn: async () => (await paymentApi.list({ page: 1, limit: 20 })).data.data,
  });

  const payments = data?.payments || [];

  return (
    <DashboardShell title="Payments" nav={nav} allowedRoles={["MEMBER", "ADMIN", "OWNER"]}>
      <div className="mb-4">
        <Link href="/pricing" className="btn btn-primary text-sm">
          Buy a Plan
        </Link>
      </div>
      {isLoading && <p className="text-slate-400">Loading payments...</p>}
      <div className="grid gap-3">
        {payments.length === 0 && !isLoading && (
          <div className="card p-6 text-slate-400">No payments yet</div>
        )}
        {payments.map(
          (p: {
            id: string;
            amount: number;
            method: string;
            status: string;
            currency: string;
          }) => (
            <div key={p.id} className="card p-4 flex justify-between">
              <div>
                <p className="font-medium">
                  {p.amount} {p.currency}
                </p>
                <p className="text-xs text-slate-400">{p.method}</p>
              </div>
              <span className="badge bg-emerald-500/15 text-emerald-300">
                {p.status}
              </span>
            </div>
          )
        )}
      </div>
    </DashboardShell>
  );
}
