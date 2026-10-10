


// //D:\project-management-saas-frontend\src\app\login\page.tsx
// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema, type LoginInput } from "@/validators/auth.schema";
// import { authApi } from "@/lib/api";
// import { useAuthStore } from "@/store/authStore";
// import { getRoleRedirect } from "@/lib/utils";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import Link from "next/link";
// import { DemoLoginButtons } from "@/components/auth/DemoLoginButtons";
// import { Navbar } from "@/components/layout/Navbar";

// export default function LoginPage() {
//   const setAuth = useAuthStore((s) => s.setAuth);
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<LoginInput>({
//     resolver: zodResolver(loginSchema),
//   });

//   async function onSubmit(values: LoginInput) {
//     try {
//       const res = await authApi.login(values);
//       const data = res.data.data;
//       setAuth({
//         user: data.user,
//         accessToken: data.accessToken,
//         refreshToken: data.refreshToken,
//       });
//       toast.success("Login successful");
//       router.push(getRoleRedirect(data.user.role));
//     } catch (err: unknown) {
//       const message =
//         (err as { response?: { data?: { message?: string } } })?.response?.data
//           ?.message || "Login failed";
//       toast.error(message);
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       <main className="mx-auto max-w-md px-4 py-12">
//         <div className="card p-6 space-y-6">
//           <div className="text-center space-y-1">
//             <h1 className="text-2xl font-bold">Welcome Back</h1>
//             <p className="text-sm text-slate-400">Login to your account</p>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//             <div>
//               <label className="text-sm text-slate-300">Email</label>
//               <input className="input mt-1" type="email" {...register("email")} />
//               {errors.email && (
//                 <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
//               )}
//             </div>
//             <div>
//               <label className="text-sm text-slate-300">Password</label>
//               <input
//                 className="input mt-1"
//                 type="password"
//                 {...register("password")}
//               />
//               {errors.password && (
//                 <p className="text-xs text-rose-400 mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//             <button className="btn btn-primary w-full" disabled={isSubmitting}>
//               {isSubmitting ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <DemoLoginButtons />

//           <p className="text-center text-sm text-slate-400">
//             No account?{" "}
//             <Link href="/register" className=" text-green-700">
//             <span className="text-blue-700">  Register</span>
//             </Link>
//               </p>
// <button>google icon button</button>

//         </div>
//       </main>
//     </div>
//   );
// }


//D:\project-management-saas-frontend\src\app\login\page.tsx

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/validators/auth.schema";
import { authApi } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import { getRoleRedirect } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { DemoLoginButtons } from "@/components/auth/DemoLoginButtons";
import { GoogleLoginButton } from "@/components/auth/GoogleLoginButton";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LoginPage() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(values: LoginInput) {
    try {
      const res = await authApi.login(values);
      const data = res.data.data;
      setAuth({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Login successful");
      router.push(getRoleRedirect(data.user.role));
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message || "Login failed";
      toast.error(message);
    }
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-md px-4 py-12">
        <div className="card p-6 space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-sm text-slate-400">Login to your account</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input className="input mt-1" type="email" {...register("email")} />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm text-slate-300">Password</label>
              <input
                className="input mt-1"
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs text-rose-400 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <GoogleLoginButton />
          <DemoLoginButtons />

          <p className="text-center text-sm text-slate-400">
            No account?{" "}
            <Link href="/register" className="text-indigo-400 hover:underline">
             <span className="text-cyan-300 text-shadow-black"> Register</span>
            </Link>
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}