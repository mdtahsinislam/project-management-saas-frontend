// // import Link from "next/link";

// // export default function PaymentCancelPage() {
// //   return (
// //     <main className="min-h-screen grid place-items-center px-4">
// //       <div className="card p-8 max-w-md text-center space-y-4">
// //         <h1 className="text-2xl font-bold text-rose-400">Payment Cancelled</h1>
// //         <p className="text-slate-300">
// //           You cancelled the payment. You can try again anytime.
// //         </p>
// //         <Link href="/pricing" className="btn btn-primary">
// //           Back to Pricing
// //         </Link>
// //       </div>
// //     </main>
// //   );
// // }

// //D:\project-management-saas-frontend\src\app\payment\cancel\page.tsx

// "use client";

// import Link from "next/link";
// import { Navbar } from "@/components/layout/Navbar";

// export default function PaymentCancelPage() {
//   return (
//     <div>
//       <Navbar />
//       <main className="mx-auto max-w-lg px-4 py-16 text-center">
//         <div className="card p-8 space-y-4">
//           <h1 className="text-2xl font-bold text-amber-400">Payment Cancelled</h1>
//           <p className="text-slate-400">You cancelled the payment.</p>
//           <Link href="/pricing" className="btn btn-primary">
//             Try Again
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function PaymentCancelPage() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="card p-8 space-y-4">
          <h1 className="text-2xl font-bold text-amber-400">Payment Cancelled</h1>
          <p className="text-slate-400">You cancelled the payment.</p>
          <Link href="/pricing" className="btn btn-primary">
            Try Again
          </Link>
        </div>
      </main>
    </div>
  );
}