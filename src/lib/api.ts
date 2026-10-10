
// // // // // // //D:\project-management-saas-frontend\src\lib\api.ts

// // // // // // import axios from "axios";

// // // // // // const API_BASE =
// // // // // //   process.env.NEXT_PUBLIC_API_BASE_URL ||
// // // // // //   "https://project-management-saas-eta.vercel.app/api/v1";

// // // // // // export const api = axios.create({
// // // // // //   baseURL: API_BASE,
// // // // // //   headers: {
// // // // // //     "Content-Type": "application/json",
// // // // // //   },
// // // // // // });

// // // // // // api.interceptors.request.use((config) => {
// // // // // //   if (typeof window !== "undefined") {
// // // // // //     const token = localStorage.getItem("accessToken");
// // // // // //     if (token) {
// // // // // //       config.headers.Authorization = `Bearer ${token}`;
// // // // // //     }
// // // // // //   }
// // // // // //   return config;
// // // // // // });

// // // // // // api.interceptors.response.use(
// // // // // //   (response) => response,
// // // // // //   async (error) => {
// // // // // //     const original = error.config;
// // // // // //     if (error.response?.status === 401 && !original._retry) {
// // // // // //       original._retry = true;
// // // // // //       try {
// // // // // //         const refreshToken = localStorage.getItem("refreshToken");
// // // // // //         if (!refreshToken) throw new Error("No refresh token");

// // // // // //         const res = await axios.post(`${API_BASE}/auth/refresh`, {
// // // // // //           refreshToken,
// // // // // //         });

// // // // // //         const newAccess = res.data?.data?.accessToken;
// // // // // //         if (newAccess) {
// // // // // //           localStorage.setItem("accessToken", newAccess);
// // // // // //           original.headers.Authorization = `Bearer ${newAccess}`;
// // // // // //           return api(original);
// // // // // //         }
// // // // // //       } catch {
// // // // // //         localStorage.removeItem("accessToken");
// // // // // //         localStorage.removeItem("refreshToken");
// // // // // //         localStorage.removeItem("user");
// // // // // //         if (typeof window !== "undefined") {
// // // // // //           window.location.href = "/login";
// // // // // //         }
// // // // // //       }
// // // // // //     }
// // // // // //     return Promise.reject(error);
// // // // // //   }
// // // // // // );

// // // // // // // ---------- Auth ----------
// // // // // // export const authApi = {
// // // // // //   login: (data: { email: string; password: string }) =>
// // // // // //     api.post("/auth/login", data),
// // // // // //   register: (data: {
// // // // // //     name: string;
// // // // // //     email: string;
// // // // // //     password: string;
// // // // // //     role?: string;
// // // // // //   }) => api.post("/auth/register", data),
// // // // // //   me: () => api.get("/auth/me"),
// // // // // //   logout: () => api.post("/auth/logout"),
// // // // // //   refresh: (refreshToken: string) =>
// // // // // //     api.post("/auth/refresh", { refreshToken }),
// // // // // // };

// // // // // // // ---------- Core ----------
// // // // // // export const orgApi = {
// // // // // //   list: (params?: Record<string, string | number>) =>
// // // // // //     api.get("/organizations", { params }),
// // // // // //   create: (data: unknown) => api.post("/organizations", data),
// // // // // //   get: (id: string) => api.get(`/organizations/${id}`),
// // // // // // };

// // // // // // export const projectApi = {
// // // // // //   list: (params?: Record<string, string | number>) =>
// // // // // //     api.get("/projects", { params }),
// // // // // //   create: (data: unknown) => api.post("/projects", data),
// // // // // //   get: (id: string) => api.get(`/projects/${id}`),
// // // // // //   update: (id: string, data: unknown) => api.patch(`/projects/${id}`, data),
// // // // // //   remove: (id: string) => api.delete(`/projects/${id}`),
// // // // // // };

// // // // // // export const taskApi = {
// // // // // //   list: (params?: Record<string, string | number>) =>
// // // // // //     api.get("/tasks", { params }),
// // // // // //   create: (data: unknown) => api.post("/tasks", data),
// // // // // //   get: (id: string) => api.get(`/tasks/${id}`),
// // // // // //   update: (id: string, data: unknown) => api.patch(`/tasks/${id}`, data),
// // // // // //   updateStatus: (id: string, status: string) =>
// // // // // //     api.patch(`/tasks/${id}/status`, { status }),
// // // // // //   assign: (id: string, assigneeId: string | null) =>
// // // // // //     api.patch(`/tasks/${id}/assign`, { assigneeId }),
// // // // // //   comments: (id: string) => api.get(`/tasks/${id}/comments`),
// // // // // //   addComment: (id: string, content: string) =>
// // // // // //     api.post(`/tasks/${id}/comments`, { content }),
// // // // // //   remove: (id: string) => api.delete(`/tasks/${id}`),
// // // // // // };

// // // // // // export const paymentApi = {
// // // // // //   initiate: (data: {
// // // // // //     amount: number;
// // // // // //     method: "STRIPE" | "BKASH";
// // // // // //     description?: string;
// // // // // //     organizationId?: string;
// // // // // //   }) => api.post("/payments/initiate", data),
// // // // // //   list: (params?: Record<string, string | number>) =>
// // // // // //     api.get("/payments", { params }),
// // // // // //   get: (id: string) => api.get(`/payments/${id}`),
// // // // // // };

// // // // // // export const adminApi = {
// // // // // //   dashboard: () => api.get("/admin/dashboard"),
// // // // // //   users: (params?: Record<string, string | number>) =>
// // // // // //     api.get("/admin/users", { params }),
// // // // // //   auditLogs: (params?: Record<string, string | number>) =>
// // // // // //     api.get("/admin/audit-logs", { params }),
// // // // // // };


// // // // // //

// // // // // import axios from "axios";

// // // // // const API_BASE =
// // // // //   process.env.NEXT_PUBLIC_API_BASE_URL ||
// // // // //   "https://project-management-saas-eta.vercel.app/api/v1";

// // // // // export const api = axios.create({
// // // // //   baseURL: API_BASE,
// // // // //   headers: {
// // // // //     "Content-Type": "application/json",
// // // // //   },
// // // // // });

// // // // // api.interceptors.request.use((config) => {
// // // // //   if (typeof window !== "undefined") {
// // // // //     const token = localStorage.getItem("accessToken");
// // // // //     if (token) {
// // // // //       config.headers.Authorization = `Bearer ${token}`;
// // // // //     }
// // // // //   }
// // // // //   return config;
// // // // // });

// // // // // api.interceptors.response.use(
// // // // //   (response) => response,
// // // // //   async (error) => {
// // // // //     const original = error.config;
// // // // //     if (error.response?.status === 401 && !original._retry) {
// // // // //       original._retry = true;
// // // // //       try {
// // // // //         const refreshToken = localStorage.getItem("refreshToken");
// // // // //         if (!refreshToken) throw new Error("No refresh token");

// // // // //         const res = await axios.post(`${API_BASE}/auth/refresh`, {
// // // // //           refreshToken,
// // // // //         });

// // // // //         const newAccess = res.data?.data?.accessToken;
// // // // //         if (newAccess) {
// // // // //           localStorage.setItem("accessToken", newAccess);
// // // // //           original.headers.Authorization = `Bearer ${newAccess}`;
// // // // //           return api(original);
// // // // //         }
// // // // //       } catch {
// // // // //         localStorage.removeItem("accessToken");
// // // // //         localStorage.removeItem("refreshToken");
// // // // //         localStorage.removeItem("user");
// // // // //         if (typeof window !== "undefined") {
// // // // //           window.location.href = "/login";
// // // // //         }
// // // // //       }
// // // // //     }
// // // // //     return Promise.reject(error);
// // // // //   }
// // // // // );

// // // // // // ---------- Auth ----------
// // // // // export const authApi = {
// // // // //   login: (data: { email: string; password: string }) =>
// // // // //     api.post("/auth/login", data),
// // // // //   register: (data: {
// // // // //     name: string;
// // // // //     email: string;
// // // // //     password: string;
// // // // //     role?: string;
// // // // //   }) => api.post("/auth/register", data),
// // // // //   me: () => api.get("/auth/me"),
// // // // //   logout: () => api.post("/auth/logout"),
// // // // //   refresh: (refreshToken: string) =>
// // // // //     api.post("/auth/refresh", { refreshToken }),
// // // // // };

// // // // // // ---------- Organizations ----------
// // // // // export const orgApi = {
// // // // //   list: (params?: Record<string, string | number>) =>
// // // // //     api.get("/organizations", { params }),
// // // // //   create: (data: unknown) => api.post("/organizations", data),
// // // // //   get: (id: string) => api.get(`/organizations/${id}`),
// // // // //   update: (id: string, data: unknown) =>
// // // // //     api.patch(`/organizations/${id}`, data),
// // // // //   remove: (id: string) => api.delete(`/organizations/${id}`),
// // // // // };

// // // // // // ---------- Projects ----------
// // // // // export const projectApi = {
// // // // //   list: (params?: Record<string, string | number>) =>
// // // // //     api.get("/projects", { params }),
// // // // //   create: (data: unknown) => api.post("/projects", data),
// // // // //   get: (id: string) => api.get(`/projects/${id}`),
// // // // //   update: (id: string, data: unknown) => api.patch(`/projects/${id}`, data),
// // // // //   remove: (id: string) => api.delete(`/projects/${id}`),
// // // // // };

// // // // // // ---------- Tasks ----------
// // // // // export const taskApi = {
// // // // //   list: (params?: Record<string, string | number>) =>
// // // // //     api.get("/tasks", { params }),
// // // // //   create: (data: unknown) => api.post("/tasks", data),
// // // // //   get: (id: string) => api.get(`/tasks/${id}`),
// // // // //   update: (id: string, data: unknown) => api.patch(`/tasks/${id}`, data),
// // // // //   updateStatus: (id: string, status: string) =>
// // // // //     api.patch(`/tasks/${id}/status`, { status }),
// // // // //   assign: (id: string, assigneeId: string | null) =>
// // // // //     api.patch(`/tasks/${id}/assign`, { assigneeId }),
// // // // //   comments: (id: string) => api.get(`/tasks/${id}/comments`),
// // // // //   addComment: (id: string, content: string) =>
// // // // //     api.post(`/tasks/${id}/comments`, { content }),
// // // // //   remove: (id: string) => api.delete(`/tasks/${id}`),
// // // // // };

// // // // // // ---------- Payments ----------
// // // // // export const paymentApi = {
// // // // //   initiate: (data: {
// // // // //     amount: number;
// // // // //     method: "STRIPE" | "BKASH";
// // // // //     description?: string;
// // // // //     organizationId?: string;
// // // // //   }) => api.post("/payments/initiate", data),
// // // // //   list: (params?: Record<string, string | number>) =>
// // // // //     api.get("/payments", { params }),
// // // // //   get: (id: string) => api.get(`/payments/${id}`),
// // // // // };

// // // // // // ---------- Admin ----------
// // // // // export const adminApi = {
// // // // //   dashboard: () => api.get("/admin/dashboard"),
// // // // //   users: (params?: Record<string, string | number>) =>
// // // // //     api.get("/admin/users", { params }),
// // // // //   auditLogs: (params?: Record<string, string | number>) =>
// // // // //     api.get("/admin/audit-logs", { params }),
// // // // // };




// // // // //D:\project-management-saas-frontend\src\lib\api.ts
// // // // import axios from "axios";
// // // // const API_BASE =
// // // //   process.env.NEXT_PUBLIC_API_BASE_URL ||
// // // //   "https://project-management-saas-eta.vercel.app/api/v1";
// // // // export const api = axios.create({
// // // //   baseURL: API_BASE,
// // // //   headers: {
// // // //     "Content-Type": "application/json",
// // // //   },
// // // // });
// // // // api.interceptors.request.use((config) => {
// // // //   if (typeof window !== "undefined") {
// // // //     const token = localStorage.getItem("accessToken");
// // // //     if (token) {
// // // //       config.headers.Authorization = `Bearer ${token}`;
// // // //     }
// // // //   }
// // // //   return config;
// // // // });
// // // // api.interceptors.response.use(
// // // //   (response) => response,
// // // //   async (error) => {
// // // //     const original = error.config;
// // // //     if (error.response?.status === 401 && !original._retry) {
// // // //       original._retry = true;
// // // //       try {
// // // //         const refreshToken = localStorage.getItem("refreshToken");
// // // //         if (!refreshToken) throw new Error("No refresh token");
// // // //         const res = await axios.post(`${API_BASE}/auth/refresh`, {
// // // //           refreshToken,
// // // //         });
// // // //         const newAccess = res.data?.data?.accessToken;
// // // //         if (newAccess) {
// // // //           localStorage.setItem("accessToken", newAccess);
// // // //           original.headers.Authorization = `Bearer ${newAccess}`;
// // // //           return api(original);
// // // //         }
// // // //       } catch {
// // // //         localStorage.removeItem("accessToken");
// // // //         localStorage.removeItem("refreshToken");
// // // //         localStorage.removeItem("user");
// // // //         if (typeof window !== "undefined") {
// // // //           window.location.href = "/login";
// // // //         }
// // // //       }
// // // //     }
// // // //     return Promise.reject(error);
// // // //   }
// // // // );
// // // // // ---------- Auth ----------
// // // // export const authApi = {
// // // //   login: (data: { email: string; password: string }) =>
// // // //     api.post("/auth/login", data),
// // // //   register: (data: {
// // // //     name: string;
// // // //     email: string;
// // // //     password: string;
// // // //     role?: string;
// // // //   }) => api.post("/auth/register", data),
// // // //   me: () => api.get("/auth/me"),
// // // //   logout: () => api.post("/auth/logout"),
// // // //   refresh: (refreshToken: string) =>
// // // //     api.post("/auth/refresh", { refreshToken }),
// // // // };
// // // // // ---------- Core ----------
// // // // export const orgApi = {
// // // //   list: (params?: Record<string, string | number>) =>
// // // //     api.get("/organizations", { params }),
// // // //   create: (data: unknown) => api.post("/organizations", data),
// // // //   get: (id: string) => api.get(`/organizations/${id}`),
// // // // };
// // // // export const projectApi = {
// // // //   list: (params?: Record<string, string | number>) =>
// // // //     api.get("/projects", { params }),
// // // //   create: (data: unknown) => api.post("/projects", data),
// // // //   get: (id: string) => api.get(`/projects/${id}`),
// // // //   update: (id: string, data: unknown) => api.patch(`/projects/${id}`, data),
// // // //   remove: (id: string) => api.delete(`/projects/${id}`),
// // // // };
// // // // export const taskApi = {
// // // //   list: (params?: Record<string, string | number>) =>
// // // //     api.get("/tasks", { params }),
// // // //   create: (data: unknown) => api.post("/tasks", data),
// // // //   get: (id: string) => api.get(`/tasks/${id}`),
// // // //   update: (id: string, data: unknown) => api.patch(`/tasks/${id}`, data),
// // // //   updateStatus: (id: string, status: string) =>
// // // //     api.patch(`/tasks/${id}/status`, { status }),
// // // //   assign: (id: string, assigneeId: string | null) =>
// // // //     api.patch(`/tasks/${id}/assign`, { assigneeId }),
// // // //   comments: (id: string) => api.get(`/tasks/${id}/comments`),
// // // //   addComment: (id: string, content: string) =>
// // // //     api.post(`/tasks/${id}/comments`, { content }),
// // // //   remove: (id: string) => api.delete(`/tasks/${id}`),
// // // // };
// // // // export const paymentApi = {
// // // //   initiate: (data: {
// // // //     amount: number;
// // // //     method: "STRIPE" | "BKASH";
// // // //     description?: string;
// // // //     organizationId?: string;
// // // //   }) => api.post("/payments/initiate", data),
// // // //   list: (params?: Record<string, string | number>) =>
// // // //     api.get("/payments", { params }),
// // // //   get: (id: string) => api.get(`/payments/${id}`),
// // // // };
// // // // export const adminApi = {
// // // //   dashboard: () => api.get("/admin/dashboard"),
// // // //   users: (params?: Record<string, string | number>) =>
// // // //     api.get("/admin/users", { params }),
// // // //   auditLogs: (params?: Record<string, string | number>) =>
// // // //     api.get("/admin/audit-logs", { params }),
// // // // };



// // // //D:\project-management-saas-frontend\src\lib\api.ts


// // // import axios from "axios";

// // // const API_BASE =
// // //   process.env.NEXT_PUBLIC_API_BASE_URL ||
// // //   "https://project-management-saas-eta.vercel.app/api/v1";

// // // export const api = axios.create({
// // //   baseURL: API_BASE,
// // //   headers: {
// // //     "Content-Type": "application/json",
// // //   },
// // // });

// // // api.interceptors.request.use((config) => {
// // //   if (typeof window !== "undefined") {
// // //     const token = localStorage.getItem("accessToken");
// // //     if (token) {
// // //       config.headers.Authorization = `Bearer ${token}`;
// // //     }
// // //   }
// // //   return config;
// // // });

// // // api.interceptors.response.use(
// // //   (response) => response,
// // //   async (error) => {
// // //     const original = error.config;
// // //     if (error.response?.status === 401 && !original._retry) {
// // //       original._retry = true;
// // //       try {
// // //         const refreshToken = localStorage.getItem("refreshToken");
// // //         if (!refreshToken) throw new Error("No refresh token");

// // //         const res = await axios.post(`${API_BASE}/auth/refresh`, {
// // //           refreshToken,
// // //         });

// // //         const newAccess = res.data?.data?.accessToken;
// // //         if (newAccess) {
// // //           localStorage.setItem("accessToken", newAccess);
// // //           original.headers.Authorization = `Bearer ${newAccess}`;
// // //           return api(original);
// // //         }
// // //       } catch {
// // //         localStorage.removeItem("accessToken");
// // //         localStorage.removeItem("refreshToken");
// // //         localStorage.removeItem("user");
// // //         if (typeof window !== "undefined") {
// // //           window.location.href = "/login";
// // //         }
// // //       }
// // //     }
// // //     return Promise.reject(error);
// // //   }
// // // );

// // // // ---------- Auth ----------
// // // export const authApi = {
// // //   login: (data: { email: string; password: string }) =>
// // //     api.post("/auth/login", data),
// // //   register: (data: {
// // //     name: string;
// // //     email: string;
// // //     password: string;
// // //     role?: string;
// // //   }) => api.post("/auth/register", data),
// // //   me: () => api.get("/auth/me"),
// // //   logout: () => api.post("/auth/logout"),
// // //   refresh: (refreshToken: string) =>
// // //     api.post("/auth/refresh", { refreshToken }),
// // // };

// // // // ---------- Organizations ----------
// // // export const orgApi = {
// // //   list: (params?: Record<string, string | number>) =>
// // //     api.get("/organizations", { params }),
// // //   create: (data: unknown) => api.post("/organizations", data),
// // //   get: (id: string) => api.get(`/organizations/${id}`),
// // //   update: (id: string, data: unknown) =>
// // //     api.patch(`/organizations/${id}`, data),
// // //   remove: (id: string) => api.delete(`/organizations/${id}`),
// // // };

// // // // ---------- Projects ----------
// // // export const projectApi = {
// // //   list: (params?: Record<string, string | number>) =>
// // //     api.get("/projects", { params }),
// // //   create: (data: unknown) => api.post("/projects", data),
// // //   get: (id: string) => api.get(`/projects/${id}`),
// // //   update: (id: string, data: unknown) => api.patch(`/projects/${id}`, data),
// // //   remove: (id: string) => api.delete(`/projects/${id}`),
// // // };

// // // // ---------- Tasks ----------
// // // export const taskApi = {
// // //   list: (params?: Record<string, string | number>) =>
// // //     api.get("/tasks", { params }),
// // //   create: (data: unknown) => api.post("/tasks", data),
// // //   get: (id: string) => api.get(`/tasks/${id}`),
// // //   update: (id: string, data: unknown) => api.patch(`/tasks/${id}`, data),
// // //   updateStatus: (id: string, status: string) =>
// // //     api.patch(`/tasks/${id}/status`, { status }),
// // //   assign: (id: string, assigneeId: string | null) =>
// // //     api.patch(`/tasks/${id}/assign`, { assigneeId }),
// // //   comments: (id: string) => api.get(`/tasks/${id}/comments`),
// // //   addComment: (id: string, content: string) =>
// // //     api.post(`/tasks/${id}/comments`, { content }),
// // //   remove: (id: string) => api.delete(`/tasks/${id}`),
// // // };

// // // // ---------- Payments ----------
// // // export const paymentApi = {
// // //   initiate: (data: {
// // //     amount: number;
// // //     method: "STRIPE" | "BKASH";
// // //     description?: string;
// // //     organizationId?: string;
// // //   }) => api.post("/payments/initiate", data),
// // //   list: (params?: Record<string, string | number>) =>
// // //     api.get("/payments", { params }),
// // //   get: (id: string) => api.get(`/payments/${id}`),
// // // };

// // // // ---------- Admin ----------
// // // export const adminApi = {
// // //   dashboard: () => api.get("/admin/dashboard"),
// // //   users: (params?: Record<string, string | number>) =>
// // //     api.get("/admin/users", { params }),
// // //   auditLogs: (params?: Record<string, string | number>) =>
// // //     api.get("/admin/audit-logs", { params }),
// // // };

// // //D:\project-management-saas-frontend\src\lib\api.ts

// // import axios from "axios";

// // const API_BASE =
// //   process.env.NEXT_PUBLIC_API_BASE_URL ||
// //   "https://project-management-saas-eta.vercel.app/api/v1";

// // export const api = axios.create({
// //   baseURL: API_BASE,
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// //   timeout: 60000,
// // });

// // api.interceptors.request.use((config) => {
// //   if (typeof window !== "undefined") {
// //     const token = localStorage.getItem("accessToken");
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //     }
// //   }
// //   return config;
// // });

// // api.interceptors.response.use(
// //   (response) => response,
// //   async (error) => {
// //     const original = error.config;
// //     if (error.response?.status === 401 && !original._retry) {
// //       original._retry = true;
// //       try {
// //         const refreshToken = localStorage.getItem("refreshToken");
// //         if (!refreshToken) throw new Error("No refresh token");

// //         const res = await axios.post(`${API_BASE}/auth/refresh`, {
// //           refreshToken,
// //         });

// //         const newAccess = res.data?.data?.accessToken;
// //         if (newAccess) {
// //           localStorage.setItem("accessToken", newAccess);
// //           original.headers.Authorization = `Bearer ${newAccess}`;
// //           return api(original);
// //         }
// //       } catch {
// //         localStorage.removeItem("accessToken");
// //         localStorage.removeItem("refreshToken");
// //         localStorage.removeItem("user");
// //         if (typeof window !== "undefined") {
// //           window.location.href = "/login";
// //         }
// //       }
// //     }
// //     return Promise.reject(error);
// //   }
// // );

// // // ---------- Auth ----------
// // export const authApi = {
// //   login: (data: { email: string; password: string }) =>
// //     api.post("/auth/login", data),
// //   register: (data: {
// //     name: string;
// //     email: string;
// //     password: string;
// //     role?: string;
// //   }) => api.post("/auth/register", data),
// //   me: () => api.get("/auth/me"),
// //   logout: () => api.post("/auth/logout"),
// //   refresh: (refreshToken: string) =>
// //     api.post("/auth/refresh", { refreshToken }),
// // };

// // // ---------- Organizations ----------
// // export const orgApi = {
// //   list: (params?: Record<string, string | number>) =>
// //     api.get("/organizations", { params }),
// //   create: (data: unknown) => api.post("/organizations", data),
// //   get: (id: string) => api.get(`/organizations/${id}`),
// //   update: (id: string, data: unknown) =>
// //     api.patch(`/organizations/${id}`, data),
// //   remove: (id: string) => api.delete(`/organizations/${id}`),
// // };

// // // ---------- Projects ----------
// // export const projectApi = {
// //   list: (params?: Record<string, string | number>) =>
// //     api.get("/projects", { params }),
// //   create: (data: unknown) => api.post("/projects", data),
// //   get: (id: string) => api.get(`/projects/${id}`),
// //   update: (id: string, data: unknown) => api.patch(`/projects/${id}`, data),
// //   remove: (id: string) => api.delete(`/projects/${id}`),
// // };

// // // ---------- Tasks ----------
// // export const taskApi = {
// //   list: (params?: Record<string, string | number>) =>
// //     api.get("/tasks", { params }),
// //   create: (data: unknown) => api.post("/tasks", data),
// //   get: (id: string) => api.get(`/tasks/${id}`),
// //   update: (id: string, data: unknown) => api.patch(`/tasks/${id}`, data),
// //   updateStatus: (id: string, status: string) =>
// //     api.patch(`/tasks/${id}/status`, { status }),
// //   assign: (id: string, assigneeId: string | null) =>
// //     api.patch(`/tasks/${id}/assign`, { assigneeId }),
// //   comments: (id: string) => api.get(`/tasks/${id}/comments`),
// //   addComment: (id: string, content: string) =>
// //     api.post(`/tasks/${id}/comments`, { content }),
// //   remove: (id: string) => api.delete(`/tasks/${id}`),
// // };

// // // ---------- Payments ----------
// // export const paymentApi = {
// //   initiate: (data: {
// //     amount: number;
// //     method: "STRIPE" | "BKASH";
// //     description?: string;
// //     organizationId?: string;
// //   }) => api.post("/payments/initiate", data),
// //   list: (params?: Record<string, string | number>) =>
// //     api.get("/payments", { params }),
// //   get: (id: string) => api.get(`/payments/${id}`),
// //   confirmStripe: (data: { sessionId?: string; paymentId?: string }) =>
// //     api.post("/payments/confirm-stripe", data),
// // };

// // // ---------- Admin ----------
// // export const adminApi = {
// //   dashboard: () => api.get("/admin/dashboard"),
// //   users: (params?: Record<string, string | number>) =>
// //     api.get("/admin/users", { params }),
// //   auditLogs: (params?: Record<string, string | number>) =>
// //     api.get("/admin/audit-logs", { params }),
// // };





// //D:\project-management-saas-frontend\src\lib\api.ts
// import axios from "axios";

// const API_BASE =
//   process.env.NEXT_PUBLIC_API_BASE_URL ||
//   "https://project-management-saas-eta.vercel.app/api/v1";

// export const api = axios.create({
//   baseURL: API_BASE,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   timeout: 60000,
// });

// api.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }
//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const original = error.config;
//     if (error.response?.status === 401 && !original._retry) {
//       original._retry = true;
//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         if (!refreshToken) throw new Error("No refresh token");

//         const res = await axios.post(`${API_BASE}/auth/refresh`, {
//           refreshToken,
//         });

//         const newAccess = res.data?.data?.accessToken;
//         if (newAccess) {
//           localStorage.setItem("accessToken", newAccess);
//           original.headers.Authorization = `Bearer ${newAccess}`;
//           return api(original);
//         }
//       } catch {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");
//         localStorage.removeItem("user");
//         if (typeof window !== "undefined") {
//           window.location.href = "/login";
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// // ---------- Auth ----------
// export const authApi = {
//   login: (data: { email: string; password: string }) =>
//     api.post("/auth/login", data),
//   register: (data: {
//     name: string;
//     email: string;
//     password: string;
//     role?: string;
//   }) => api.post("/auth/register", data),
//   google: (idToken: string) => api.post("/auth/google", { idToken }),
//   me: () => api.get("/auth/me"),
//   logout: () => api.post("/auth/logout"),
//   refresh: (refreshToken: string) =>
//     api.post("/auth/refresh", { refreshToken }),
// };

// // ---------- Organizations ----------
// export const orgApi = {
//   list: (params?: Record<string, string | number>) =>
//     api.get("/organizations", { params }),
//   create: (data: unknown) => api.post("/organizations", data),
//   get: (id: string) => api.get(`/organizations/${id}`),
//   update: (id: string, data: unknown) =>
//     api.patch(`/organizations/${id}`, data),
//   remove: (id: string) => api.delete(`/organizations/${id}`),
// };

// // ---------- Projects ----------
// export const projectApi = {
//   list: (params?: Record<string, string | number>) =>
//     api.get("/projects", { params }),
//   create: (data: unknown) => api.post("/projects", data),
//   get: (id: string) => api.get(`/projects/${id}`),
//   update: (id: string, data: unknown) => api.patch(`/projects/${id}`, data),
//   remove: (id: string) => api.delete(`/projects/${id}`),
// };

// // ---------- Tasks ----------
// export const taskApi = {
//   list: (params?: Record<string, string | number>) =>
//     api.get("/tasks", { params }),
//   create: (data: unknown) => api.post("/tasks", data),
//   get: (id: string) => api.get(`/tasks/${id}`),
//   update: (id: string, data: unknown) => api.patch(`/tasks/${id}`, data),
//   updateStatus: (id: string, status: string) =>
//     api.patch(`/tasks/${id}/status`, { status }),
//   assign: (id: string, assigneeId: string | null) =>
//     api.patch(`/tasks/${id}/assign`, { assigneeId }),
//   comments: (id: string) => api.get(`/tasks/${id}/comments`),
//   addComment: (id: string, content: string) =>
//     api.post(`/tasks/${id}/comments`, { content }),
//   remove: (id: string) => api.delete(`/tasks/${id}`),
// };

// // ---------- Payments ----------
// export const paymentApi = {
//   initiate: (data: {
//     amount: number;
//     method: "STRIPE" | "BKASH";
//     description?: string;
//     organizationId?: string;
//   }) => api.post("/payments/initiate", data),
//   list: (params?: Record<string, string | number>) =>
//     api.get("/payments", { params }),
//   get: (id: string) => api.get(`/payments/${id}`),
//   confirmStripe: (data: { sessionId?: string; paymentId?: string }) =>
//     api.post("/payments/confirm-stripe", data),
// };

// // ---------- Admin ----------
// export const adminApi = {
//   dashboard: () => api.get("/admin/dashboard"),
//   users: (params?: Record<string, string | number>) =>
//     api.get("/admin/users", { params }),
//   auditLogs: (params?: Record<string, string | number>) =>
//     api.get("/admin/audit-logs", { params }),
// };







import axios from "axios";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://project-management-saas-eta.vercel.app/api/v1";

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 60000,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token");

        const res = await axios.post(`${API_BASE}/auth/refresh`, {
          refreshToken,
        });

        const newAccess = res.data?.data?.accessToken;
        if (newAccess) {
          localStorage.setItem("accessToken", newAccess);
          original.headers.Authorization = `Bearer ${newAccess}`;
          return api(original);
        }
      } catch {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);

// ---------- Auth ----------
export const authApi = {
  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data),
  register: (data: {
    name: string;
    email: string;
    password: string;
    role?: string;
  }) => api.post("/auth/register", data),
  google: (idToken: string) => api.post("/auth/google", { idToken }),
  me: () => api.get("/auth/me"),
  logout: () => api.post("/auth/logout"),
  refresh: (refreshToken: string) =>
    api.post("/auth/refresh", { refreshToken }),
};

// ---------- Organizations ----------
export const orgApi = {
  list: (params?: Record<string, string | number>) =>
    api.get("/organizations", { params }),
  create: (data: unknown) => api.post("/organizations", data),
  get: (id: string) => api.get(`/organizations/${id}`),
  update: (id: string, data: unknown) =>
    api.patch(`/organizations/${id}`, data),
  remove: (id: string) => api.delete(`/organizations/${id}`),
};

// ---------- Projects ----------
export const projectApi = {
  list: (params?: Record<string, string | number>) =>
    api.get("/projects", { params }),
  create: (data: unknown) => api.post("/projects", data),
  get: (id: string) => api.get(`/projects/${id}`),
  update: (id: string, data: unknown) => api.patch(`/projects/${id}`, data),
  remove: (id: string) => api.delete(`/projects/${id}`),
};

// ---------- Tasks ----------
export const taskApi = {
  list: (params?: Record<string, string | number>) =>
    api.get("/tasks", { params }),
  create: (data: unknown) => api.post("/tasks", data),
  get: (id: string) => api.get(`/tasks/${id}`),
  update: (id: string, data: unknown) => api.patch(`/tasks/${id}`, data),
  updateStatus: (id: string, status: string) =>
    api.patch(`/tasks/${id}/status`, { status }),
  assign: (id: string, assigneeId: string | null) =>
    api.patch(`/tasks/${id}/assign`, { assigneeId }),
  comments: (id: string) => api.get(`/tasks/${id}/comments`),
  addComment: (id: string, content: string) =>
    api.post(`/tasks/${id}/comments`, { content }),
  remove: (id: string) => api.delete(`/tasks/${id}`),
};

// ---------- Payments ----------
export const paymentApi = {
  initiate: (data: {
    amount: number;
    method: "STRIPE" | "BKASH";
    description?: string;
    organizationId?: string;
  }) => api.post("/payments/initiate", data),
  list: (params?: Record<string, string | number>) =>
    api.get("/payments", { params }),
  get: (id: string) => api.get(`/payments/${id}`),
  confirmStripe: (data: { sessionId?: string; paymentId?: string }) =>
    api.post("/payments/confirm-stripe", data),
};

// ---------- Contact ----------
export const contactApi = {
  send: (data: { name: string; email: string; message: string }) =>
    api.post("/contact", data),
};

// ---------- Admin ----------
export const adminApi = {
  dashboard: () => api.get("/admin/dashboard"),
  users: (params?: Record<string, string | number>) =>
    api.get("/admin/users", { params }),
  auditLogs: (params?: Record<string, string | number>) =>
    api.get("/admin/audit-logs", { params }),
};