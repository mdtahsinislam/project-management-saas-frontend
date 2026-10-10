

// //D:\project-management-saas-frontend\src\app\register\page.tsx

// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { registerSchema, type RegisterInput } from "@/validators/auth.schema";
// import { authApi } from "@/lib/api";
// import { useAuthStore } from "@/store/authStore";
// import { getRoleRedirect } from "@/lib/utils";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import Link from "next/link";
// import { Navbar } from "@/components/layout/Navbar";

// export default function RegisterPage() {
//   const setAuth = useAuthStore((s) => s.setAuth);
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<RegisterInput>({
//     resolver: zodResolver(registerSchema),
//     defaultValues: { role: "MEMBER" },
//   });

//   async function onSubmit(values: RegisterInput) {
//     try {
//       const res = await authApi.register(values);
//       const data = res.data.data;
//       setAuth({
//         user: data.user,
//         accessToken: data.accessToken,
//         refreshToken: data.refreshToken,
//       });
//       toast.success("Registration successful");
//       router.push(getRoleRedirect(data.user.role));
//     } catch (err: unknown) {
//       const message =
//         (err as { response?: { data?: { message?: string } } })?.response?.data
//           ?.message || "Registration failed";
//       toast.error(message);
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       <main className="mx-auto max-w-md px-4 py-12">
//         <div className="card p-6 space-y-4">
//           <h1 className="text-2xl font-bold text-center">Create Account</h1>
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <label className="text-sm">Name</label>
//               <input className="input mt-1" {...register("name")} />
//               {errors.name && (
//                 <p className="text-xs text-rose-400">{errors.name.message}</p>
//               )}
//             </div>
//             <div>
//               <label className="text-sm">Email</label>
//               <input className="input mt-1" type="email" {...register("email")} />
//               {errors.email && (
//                 <p className="text-xs text-rose-400">{errors.email.message}</p>
//               )}
//             </div>
//             <div>
//               <label className="text-sm">Password</label>
//               <input
//                 className="input mt-1"
//                 type="password"
//                 {...register("password")}
//               />
//               {errors.password && (
//                 <p className="text-xs text-rose-400">{errors.password.message}</p>
//               )}
//             </div>
//             <div>
//               <label className="text-sm">Role</label>
//               <select className="input mt-1" {...register("role")}>
//                 <option value="MEMBER">MEMBER</option>
//                 <option value="OWNER">OWNER</option>
//                 <option value="ADMIN">ADMIN</option>
//               </select>
//             </div>
//             <button className="btn btn-primary w-full" disabled={isSubmitting}>
//               {isSubmitting ? "Creating..." : "Register"}
//             </button>
//           </form>
//           <p className="text-center text-sm text-slate-400">
//             Already have an account?{" "}
//             <Link href="/login" className="text-indigo-400">
//              <span className="text-blue-700"> Login</span>
//             </Link>
//           </p>
//           <button>google icon button</button>
//         </div>
//       </main>
//     </div>
//   );
// }

//D:\project-management-saas-frontend\src\app\register\page.tsx

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "@/validators/auth.schema";
import { authApi } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { getRoleRedirect } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { GoogleLoginButton } from "@/components/auth/GoogleLoginButton";
import { Footer } from "@/components/layout/Footer";

export default function RegisterPage() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { role: "MEMBER" },
  });

  async function onSubmit(values: RegisterInput) {
    try {
      const res = await authApi.register(values);
      const data = res.data.data;
      setAuth({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Registration successful");
      router.push(getRoleRedirect(data.user.role));
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Registration failed";
      toast.error(message);
    }
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-md px-4 py-12">
        <div className="card p-6 space-y-4">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm">Name</label>
              <input className="input mt-1" {...register("name")} />
              {errors.name && (
                <p className="text-xs text-rose-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input className="input mt-1" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-xs text-rose-400">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm">Password</label>
              <input
                className="input mt-1"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs text-rose-400">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm">Role</label>
              <select className="input mt-1" {...register("role")}>
                <option value="MEMBER">MEMBER</option>
                <option value="OWNER">OWNER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <button className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Register"}
            </button>
          </form>

          <GoogleLoginButton />

          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:underline">
             <span className="text-cyan-300 text-shadow-black"> Login</span>
            </Link>
          </p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}