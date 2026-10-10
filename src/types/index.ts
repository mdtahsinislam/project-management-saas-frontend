export type Role = "ADMIN" | "OWNER" | "MEMBER";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string | null;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
  errors?: unknown[];
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  ownerId: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description?: string | null;
  status: "ACTIVE" | "ARCHIVED" | "COMPLETED";
  organizationId: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string | null;
  status: "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE" | "CANCELLED";
  priority: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  projectId: string;
  assigneeId?: string | null;
  creatorId: string;
  dueDate?: string | null;
  createdAt: string;
}

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";
  method: "STRIPE" | "BKASH";
  userId: string;
  createdAt: string;
}
