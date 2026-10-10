"use client";

import { create } from "zustand";
import { User, Role } from "@/types";

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isHydrated: boolean;
  setAuth: (payload: {
    user: User;
    accessToken: string;
    refreshToken: string;
  }) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
  hydrate: () => void;
  hasRole: (...roles: Role[]) => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isHydrated: false,

  setAuth: ({ user, accessToken, refreshToken }) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(user));
    set({ user, accessToken, refreshToken });
  },

  setUser: (user) => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
    set({ user });
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    set({ user: null, accessToken: null, refreshToken: null });
  },

  hydrate: () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const raw = localStorage.getItem("user");
      const user = raw ? (JSON.parse(raw) as User) : null;
      set({ accessToken, refreshToken, user, isHydrated: true });
    } catch {
      set({ isHydrated: true });
    }
  },

  hasRole: (...roles) => {
    const role = get().user?.role;
    return !!role && roles.includes(role);
  },
}));
