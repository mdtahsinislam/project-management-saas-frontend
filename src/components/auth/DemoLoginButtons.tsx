"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authApi } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { getRoleRedirect } from "@/lib/utils";
import { Shield, Building2, User } from "lucide-react";

const demos = [
  {
    role: "ADMIN",
    email: "admin@demo.com",
    password: "Admin@123",
    icon: Shield,
    color: "from-rose-500 to-orange-500",
  },
  {
    role: "OWNER",
    email: "owner@demo.com",
    password: "Owner@123",
    icon: Building2,
    color: "from-indigo-500 to-cyan-500",
  },
  {
    role: "MEMBER",
    email: "member@demo.com",
    password: "Member@123",
    icon: User,
    color: "from-emerald-500 to-teal-500",
  },
] as const;

export function DemoLoginButtons() {
  const [loading, setLoading] = useState<string | null>(null);
  const setAuth = useAuthStore((s) => s.setAuth);
  const router = useRouter();

  async function handleDemo(email: string, password: string, role: string) {
    try {
      setLoading(role);
      const res = await authApi.login({ email, password });
      const data = res.data.data;
      setAuth({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
      toast.success(`Logged in as ${role}`);
      router.push(getRoleRedirect(data.user.role));
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Demo login failed";
      toast.error(message);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-3">
      <p className="text-center text-sm text-slate-400">— Quick Demo Login —</p>
      <div className="grid gap-3">
        {demos.map((d) => {
          const Icon = d.icon;
          return (
            <button
              key={d.role}
              disabled={!!loading}
              onClick={() => handleDemo(d.email, d.password, d.role)}
              className={`w-full rounded-xl p-[1px] bg-gradient-to-r ${d.color}`}
            >
              <div className="flex items-center justify-center gap-2 rounded-[11px] bg-[#0f172a] px-4 py-3 text-sm font-semibold hover:bg-[#132036]">
                <Icon size={16} />
                {loading === d.role ? "Logging in..." : `Login as ${d.role}`}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
