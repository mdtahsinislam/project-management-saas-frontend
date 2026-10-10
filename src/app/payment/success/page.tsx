// // // // import Link from "next/link";

// // // // export default function PaymentSuccessPage() {
// // // //   return (
// // // //     <main className="min-h-screen grid place-items-center px-4">
// // // //       <div className="card p-8 max-w-md text-center space-y-4">
// // // //         <h1 className="text-2xl font-bold text-emerald-400">Payment Successful</h1>
// // // //         <p className="text-slate-300">
// // // //           Your payment was completed. You can return to your dashboard.
// // // //         </p>
// // // //         <Link href="/dashboard/payments" className="btn btn-primary">
// // // //           View Payments
// // // //         </Link>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }


// // // //D:\project-management-saas-frontend\src\app\payment\success\page.tsx
// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useSearchParams } from "next/navigation";
// // // import Link from "next/link";
// // // import { Navbar } from "@/components/layout/Navbar";
// // // import { paymentApi } from "@/lib/api";
// // // import { toast } from "sonner";

// // // export default function PaymentSuccessPage() {
// // //   const searchParams = useSearchParams();
// // //   const sessionId = searchParams.get("session_id");
// // //   const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

// // //   useEffect(() => {
// // //     async function confirm() {
// // //       try {
// // //         // Backend-এ confirm endpoint থাকলে call করুন
// // //         // না থাকলে শুধু success UI দেখান
// // //         if (sessionId) {
// // //           // optional: await paymentApi.confirmStripe?.({ sessionId });
// // //         }
// // //         setStatus("ok");
// // //         toast.success("Payment successful!");
// // //       } catch {
// // //         setStatus("error");
// // //       }
// // //     }
// // //     confirm();
// // //   }, [sessionId]);

// // //   return (
// // //     <div>
// // //       <Navbar />
// // //       <main className="mx-auto max-w-lg px-4 py-16 text-center">
// // //         <div className="card p-8 space-y-4">
// // //           {status === "loading" && (
// // //             <p className="text-slate-400">Confirming payment...</p>
// // //           )}
// // //           {status === "ok" && (
// // //             <>
// // //               <h1 className="text-2xl font-bold text-emerald-400">
// // //                 Payment Successful
// // //               </h1>
// // //               <p className="text-slate-400">
// // //                 Thank you! Your payment has been processed.
// // //               </p>
// // //               {sessionId && (
// // //                 <p className="text-xs text-slate-500 break-all">
// // //                   Session: {sessionId}
// // //                 </p>
// // //               )}
// // //             </>
// // //           )}
// // //           {status === "error" && (
// // //             <h1 className="text-2xl font-bold text-rose-400">
// // //               Something went wrong
// // //             </h1>
// // //           )}
// // //           <div className="flex flex-col gap-2 pt-4">
// // //             <Link href="/dashboard/payments" className="btn btn-primary">
// // //               View Payments
// // //             </Link>
// // //             <Link href="/pricing" className="btn btn-outline">
// // //               Back to Pricing
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import { useSearchParams } from "next/navigation";
// // import Link from "next/link";
// // import { Navbar } from "@/components/layout/Navbar";

// // export default function PaymentSuccessPage() {
// //   const searchParams = useSearchParams();
// //   const sessionId = searchParams.get("session_id");
// //   const paymentId = searchParams.get("payment_id");

// //   return (
// //     <div>
// //       <Navbar />
// //       <main className="mx-auto max-w-lg px-4 py-16 text-center">
// //         <div className="card p-8 space-y-4">
// //           <h1 className="text-2xl font-bold text-emerald-400">
// //             Payment Successful
// //           </h1>
// //           <p className="text-slate-400">
// //             Thank you! Your payment has been processed.
// //           </p>
// //           {paymentId && (
// //             <p className="text-xs text-slate-500">Payment ID: {paymentId}</p>
// //           )}
// //           {sessionId && (
// //             <p className="text-xs text-slate-500 break-all">
// //               Session: {sessionId}
// //             </p>
// //           )}
// //           <div className="flex flex-col gap-2 pt-4">
// //             <Link href="/dashboard/payments" className="btn btn-primary">
// //               View Payments
// //             </Link>
// //             <Link href="/pricing" className="btn btn-outline">
// //               Back to Pricing
// //             </Link>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { api } from "@/lib/api";
// import Link from "next/link";

// export default function PaymentSuccessPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

//   const sessionId = searchParams.get("session_id");
//   const paymentId = searchParams.get("payment_id");

//   useEffect(() => {
//     async function confirm() {
//       if (!sessionId && !paymentId) {
//         setStatus("error");
//         return;
//       }
//       try {
//         await api.post("/payments/confirm-stripe", {
//           sessionId,
//           paymentId,
//         });
//         setStatus("ok");
//       } catch {
//         // আগেই SUCCESS হলেও ok দেখাতে পারেন
//         setStatus("ok");
//       }
//     }
//     confirm();
//   }, [sessionId, paymentId]);

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <div className="card p-8 max-w-md w-full text-center space-y-4">
//         <h1 className="text-2xl font-bold text-emerald-400">
//           Payment Successful
//         </h1>
//         <p className="text-slate-300">
//           {status === "loading"
//             ? "Confirming payment..."
//             : "Thank you! Your payment has been processed."}
//         </p>
//         {paymentId && (
//           <p className="text-xs text-slate-500 break-all">
//             Payment ID: {paymentId}
//           </p>
//         )}
//         <div className="flex flex-col gap-2 pt-2">
//           <Link href="/dashboard/payments" className="btn btn-primary">
//             View Payments
//           </Link>
//           <Link href="/pricing" className="btn btn-outline">
//             Back to Pricing
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { api } from "@/lib/api";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  const sessionId = searchParams.get("session_id");
  const paymentId = searchParams.get("payment_id");

  useEffect(() => {
    async function confirm() {
      if (!sessionId && !paymentId) {
        setStatus("error");
        return;
      }
      try {
        await api.post("/payments/confirm-stripe", {
          sessionId,
          paymentId,
        });
        setStatus("ok");
      } catch {
        // আগেই SUCCESS হলেও ok দেখাতে পারেন
        setStatus("ok");
      }
    }
    confirm();
  }, [sessionId, paymentId]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card p-8 max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-bold text-emerald-400">
          Payment Successful
        </h1>
        <p className="text-slate-300">
          {status === "loading"
            ? "Confirming payment..."
            : "Thank you! Your payment has been processed."}
        </p>
        {paymentId && (
          <p className="text-xs text-slate-500 break-all">
            Payment ID: {paymentId}
          </p>
        )}
        <div className="flex flex-col gap-2 pt-2">
          <Link href="/dashboard/payments" className="btn btn-primary">
            View Payments
          </Link>
          <Link href="/pricing" className="btn btn-outline">
            Back to Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}