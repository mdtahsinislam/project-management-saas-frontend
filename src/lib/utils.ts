


// //D:\project-management-saas-frontend\src\lib\utils.ts
// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export function formatDate(date?: string | null) {
//   if (!date) return "-";
//   return new Date(date).toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
// }

// export function getRoleRedirect(role: string) {
//   if (role === "ADMIN") return "/admin";
//   if (role === "OWNER") return "/owner";
//   return "/dashboard";
// }


//D:\project-management-saas-frontend\src\lib\utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date?: string | null) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getRoleRedirect(role: string) {
  if (role === "ADMIN") return "/admin";
  if (role === "OWNER") return "/owner";
  if (role === "MEMBER") return "/member";
  return "/dashboard";
}