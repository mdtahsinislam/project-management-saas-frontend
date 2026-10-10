


// //D:\project-management-saas-frontend\src\app\pricing\page.tsx

// "use client";

// import { useState } from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { paymentApi } from "@/lib/api";
// import { toast } from "sonner";
// import { useAuthStore } from "@/store/authStore";
// import { useRouter } from "next/navigation";
// import { Footer } from "@/components/layout/Footer";

// // const plans = [
// //   {
// //     name: "Starter",
// //     price: 10,
// //     desc: "For individuals getting started",
// //   },
// //   {
// //     name: "Pro",
// //     price: 29,
// //     desc: "For growing teams",
// //   },
// //   {
// //     name: "Business",
// //     price: 79,
// //     desc: "For organizations",
// //   },
// // ];

// const plans = [
//   {
//     name: "Free",
//     price: 0,
//     desc: "Basic features for personal use",
//   },
//   {
//     name: "Starter",
//     price: 10,
//     desc: "For individuals getting started",
//   },
//   {
//     name: "Student",
//     price: 5,
//     desc: "Special plan for students",
//   },
//   {
//     name: "Freelancer",
//     price: 15,
//     desc: "Perfect for independent professionals",
//   },
//   {
//     name: "Pro",
//     price: 29,
//     desc: "For growing teams",
//   },
//   {
//     name: "Team",
//     price: 39,
//     desc: "Collaborate with small teams",
//   },
//   {
//     name: "Startup",
//     price: 49,
//     desc: "Built for early-stage startups",
//   },
//   {
//     name: "Business",
//     price: 79,
//     desc: "For organizations",
//   },
//   {
//     name: "Company",
//     price: 99,
//     desc: "Advanced tools for companies",
//   },
//   {
//     name: "Agency",
//     price: 119,
//     desc: "Manage multiple client projects",
//   },
//   {
//     name: "Enterprise",
//     price: 149,
//     desc: "For large companies with advanced needs",
//   },
//   {
//     name: "Corporate",
//     price: 199,
//     desc: "Full suite for corporate teams",
//   },
//   {
//     name: "Premium",
//     price: 249,
//     desc: "Premium support and unlimited projects",
//   },
//   {
//     name: "Ultimate",
//     price: 299,
//     desc: "All features unlocked",
//   },
//   {
//     name: "Global",
//     price: 349,
//     desc: "Multi-region team management",
//   },
//   {
//     name: "Scale",
//     price: 399,
//     desc: "High-scale operations and analytics",
//   },
//   {
//     name: "Partner",
//     price: 449,
//     desc: "Partner program with priority access",
//   },
//   {
//     name: "Custom",
//     price: 499,
//     desc: "Custom workflows and integrations",
//   },
//   {
//     name: "Unlimited",
//     price: 599,
//     desc: "Unlimited users, projects and storage",
//   },
//   {
//     name: "Lifetime",
//     price: 999,
//     desc: "One-time lifetime access plan",
//   },
// ];

// export default function PricingPage() {
//   const [loading, setLoading] = useState<string | null>(null);
//   const user = useAuthStore((s) => s.user);
//   const router = useRouter();

//   async function pay(method: "STRIPE" | "BKASH", amount: number, plan: string) {
//     if (!user) {
//       toast.error("Please login first");
//       router.push("/login");
//       return;
//     }

//     try {
//       setLoading(`${method}-${plan}`);
//       const res = await paymentApi.initiate({
//         amount,
//         method,
//         description: `${plan} Plan Subscription`,
//       });
//       const data = res.data.data;

//       if (method === "STRIPE" && data.checkoutUrl) {
//         window.location.href = data.checkoutUrl;
//         return;
//       }

//       if (method === "BKASH" && data.bkashURL) {
//         window.location.href = data.bkashURL;
//         return;
//       }

//       toast.success("Payment initiated");
//     } catch (err: unknown) {
//       const message =
//         (err as { response?: { data?: { message?: string } } })?.response?.data
//           ?.message || "Payment failed";
//       toast.error(message);
//     } finally {
//       setLoading(null);
//     }
//   }

//   return (
//     <div>
//       <Navbar />
//       <main className="mx-auto max-w-6xl px-4 py-12">
//         <h1 className="text-3xl font-bold text-center mb-2">Pricing</h1>
//         <p className="text-center text-slate-400 mb-10">
//           Pay with Stripe or bKash (Test / Sandbox)
//         </p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {plans.map((plan) => (
//             <div key={plan.name} className="card p-6 space-y-4">
//               <h2 className="text-xl font-semibold">{plan.name}</h2>
//               <p className="text-3xl font-bold">
//                 ${plan.price}
//                 <span className="text-sm text-slate-400">/mo</span>
//               </p>
//               <p className="text-sm text-slate-400">{plan.desc}</p>
//               <button
//                 className="btn btn-primary w-full"
//                 disabled={!!loading}
//                 onClick={() => pay("STRIPE", plan.price, plan.name)}
//               >
//                 {loading === `STRIPE-${plan.name}`
//                   ? "Redirecting..."
//                   : "Pay with Stripe"}
//               </button>
//               <button
//                 className="btn btn-outline w-full"
//                 disabled={!!loading}
//                 onClick={() => pay("BKASH", plan.price * 100, plan.name)}
//               >
//                 {loading === `BKASH-${plan.name}`
//                   ? "Redirecting..."
//                   : "Pay with bKash"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer/>
//     </div>
//   );
// }



//gpt

"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { paymentApi } from "@/lib/api";
import { toast } from "sonner";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

type PaymentMethod = "STRIPE" | "BKASH";

type PaymentResponse = {
  paymentId?: string;
  method?: PaymentMethod;
  checkoutUrl?: string | null;
  bkashURL?: string | null;
  paymentID?: string;
  sessionId?: string;
};

const plans = [
  {
    name: "Free",
    price: 0,
    desc: "Basic features for personal use",
  },
  {
    name: "Starter",
    price: 10,
    desc: "For individuals getting started",
  },
  {
    name: "Student",
    price: 5,
    desc: "Special plan for students",
  },
  {
    name: "Freelancer",
    price: 15,
    desc: "Perfect for independent professionals",
  },
  {
    name: "Pro",
    price: 29,
    desc: "For growing teams",
  },
  {
    name: "Team",
    price: 39,
    desc: "Collaborate with small teams",
  },
  {
    name: "Startup",
    price: 49,
    desc: "Built for early-stage startups",
  },
  {
    name: "Business",
    price: 79,
    desc: "For organizations",
  },
  {
    name: "Company",
    price: 99,
    desc: "Advanced tools for companies",
  },
  {
    name: "Agency",
    price: 119,
    desc: "Manage multiple client projects",
  },
  {
    name: "Enterprise",
    price: 149,
    desc: "For large companies with advanced needs",
  },
  {
    name: "Corporate",
    price: 199,
    desc: "Full suite for corporate teams",
  },
  {
    name: "Premium",
    price: 249,
    desc: "Premium support and unlimited projects",
  },
  {
    name: "Ultimate",
    price: 299,
    desc: "All features unlocked",
  },
  {
    name: "Global",
    price: 349,
    desc: "Multi-region team management",
  },
  {
    name: "Scale",
    price: 399,
    desc: "High-scale operations and analytics",
  },
  {
    name: "Partner",
    price: 449,
    desc: "Partner program with priority access",
  },
  {
    name: "Custom",
    price: 499,
    desc: "Custom workflows and integrations",
  },
  {
    name: "Unlimited",
    price: 599,
    desc: "Unlimited users, projects and storage",
  },
  {
    name: "Lifetime",
    price: 999,
    desc: "One-time lifetime access plan",
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  async function pay(
    method: PaymentMethod,
    amount: number,
    plan: string
  ) {
    if (!user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    if (amount <= 0) {
      toast.error("Please select a paid plan.");
      return;
    }

    if (loading) return;

    const loadingKey = `${method}-${plan}`;

    try {
      setLoading(loadingKey);

      const res = await paymentApi.initiate({
        amount,
        method,
        description: `${plan} Plan Subscription`,
      });

      const data = res?.data?.data as PaymentResponse | undefined;

      if (!data) {
        console.error("Payment API response:", res?.data);
        throw new Error("Invalid payment API response.");
      }

      if (method === "STRIPE") {
        if (!data.checkoutUrl) {
          console.error("Stripe checkout URL missing:", res.data);

          throw new Error(
            "Stripe checkout URL পাওয়া যায়নি। Backend response পরীক্ষা করুন।"
          );
        }

        // Redirect to Stripe Checkout
        window.location.assign(data.checkoutUrl);
        return;
      }

      if (method === "BKASH") {
        if (!data.bkashURL) {
          console.error("bKash checkout URL missing:", res.data);

          throw new Error(
            "bKash payment URL পাওয়া যায়নি। Live Backend configuration পরীক্ষা করুন।"
          );
        }

        // Redirect to the bKash hosted checkout page
        window.location.assign(data.bkashURL);
        return;
      }

      throw new Error("Unsupported payment method.");
    } catch (err: unknown) {
      console.error(`${method} payment initiation error:`, err);

      const apiMessage = (
        err as {
          response?: {
            data?: {
              message?: string;
            };
          };
        }
      )?.response?.data?.message;

      const message =
        apiMessage ||
        (err instanceof Error ? err.message : null) ||
        "Payment failed. Please try again.";

      toast.error(message);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Pricing
        </h1>

        <p className="mb-10 text-center text-slate-400">
          Pay with Stripe or bKash (Test / Sandbox)
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const stripeLoading =
              loading === `STRIPE-${plan.name}`;

            const bkashLoading =
              loading === `BKASH-${plan.name}`;

            const isFree = plan.price === 0;

            return (
              <div
                key={plan.name}
                className="card space-y-4 p-6"
              >
                <h2 className="text-xl font-semibold">
                  {plan.name}
                </h2>

                <p className="text-3xl font-bold">
                  ${plan.price}
                  <span className="text-sm text-slate-400">
                    /mo
                  </span>
                </p>

                <p className="text-sm text-slate-400">
                  {plan.desc}
                </p>

                <button
                  type="button"
                  className="btn btn-primary w-full"
                  disabled={!!loading || isFree}
                  onClick={() =>
                    pay("STRIPE", plan.price, plan.name)
                  }
                >
                  {stripeLoading
                    ? "Redirecting..."
                    : isFree
                      ? "Free Plan"
                      : "Pay with Stripe"}
                </button>

                <button
                  type="button"
                  className="btn btn-outline w-full"
                  disabled={!!loading || isFree}
                  onClick={() =>
                    pay("BKASH", plan.price * 100, plan.name)
                  }
                >
                  {bkashLoading
                    ? "Redirecting..."
                    : isFree
                      ? "Free Plan"
                      : "Pay with bKash"}
                </button>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}