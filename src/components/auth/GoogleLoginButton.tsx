"use client";

import { useEffect, useRef, useState } from "react";
import { authApi } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { getRoleRedirect } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

declare global {
  interface Window {
    google?: any;
  }
}

export function GoogleLoginButton() {
  const btnRef = useRef<HTMLDivElement>(null);
  const setAuth = useAuthStore((s) => s.setAuth);
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => setReady(true);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [clientId]);

  useEffect(() => {
    if (!ready || !clientId || !btnRef.current || !window.google) return;

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: async (response: { credential: string }) => {
        setLoading(true);
        try {
          const res = await authApi.google(response.credential);
          const data = res.data.data;

          setAuth({
            user: data.user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          });

          // localStorage (যদি store না করে)
          localStorage.setItem("accessToken", data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("user", JSON.stringify(data.user));

          toast.success("Google login successful");
          router.push(getRoleRedirect(data.user.role)); // MEMBER → member dashboard
        } catch (err: any) {
          toast.error(
            err?.response?.data?.message || "Google login failed"
          );
        } finally {
          setLoading(false);
        }
      },
    });

    window.google.accounts.id.renderButton(btnRef.current, {
      theme: "outline",
      size: "large",
      width: 320,
      text: "continue_with",
      shape: "rectangular",
    });
  }, [ready, clientId, setAuth, router]);

  if (!clientId) {
    return (
      <p className="text-xs text-rose-400 text-center">
        Google Client ID missing in .env
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <div className="relative flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-700" />
        <span className="text-xs text-slate-500">OR</span>
        <div className="flex-1 h-px bg-slate-700" />
      </div>
      <div className="flex justify-center">
        {loading ? (
          <p className="text-sm text-slate-400">Signing in with Google...</p>
        ) : (
          <div ref={btnRef} />
        )}
      </div>
      <p className="text-[11px] text-center text-slate-500">
        Google login creates a MEMBER account
      </p>
    </div>
  );
}