

// // // //D:\project-management-saas-frontend\src\app\contact\page.tsx

// // // "use client";

// // // import { Footer } from "@/components/layout/Footer";
// // // import { Navbar } from "@/components/layout/Navbar";
// // // import { toast } from "sonner";

// // // export default function ContactPage() {
// // //   return (
// // //     <div>
// // //       <Navbar />
// // //       <main className="mx-auto max-w-lg px-4 py-12">
// // //         <div className="card p-6 space-y-4">
// // //           <h1 className="text-2xl font-bold">Contact</h1>
// // //           <input className="input" placeholder="Your name" />
// // //           <input className="input" placeholder="Email" type="email" />
// // //           <textarea className="input min-h-28" placeholder="Message" />
// // //           <button
// // //             className="btn btn-primary w-full"
// // //             onClick={() => toast.success("Message sent (demo)")}
// // //           >
// // //             Send Message
// // //           </button>
// // //         </div>
// // //       </main>
// // //         <Footer/>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import { useState, type FormEvent } from "react";
// // import { Footer } from "@/components/layout/Footer";
// // import { Navbar } from "@/components/layout/Navbar";
// // import { toast } from "sonner";

// // interface ContactFormData {
// //   name: string;
// //   email: string;
// //   message: string;
// // }

// // const initialFormData: ContactFormData = {
// //   name: "",
// //   email: "",
// //   message: "",
// // };

// // export default function ContactPage() {
// //   const [formData, setFormData] =
// //     useState<ContactFormData>(initialFormData);

// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// //   ) => {
// //     const { name, value } = e.target;

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     if (isSubmitting) return;

// //     const name = formData.name.trim();
// //     const email = formData.email.trim();
// //     const message = formData.message.trim();

// //     if (!name || !email || !message) {
// //       toast.error("Please fill in all fields.");
// //       return;
// //     }

// //     setIsSubmitting(true);

// //     try {
// //       // Set NEXT_PUBLIC_API_URL to your backend base URL.
// //       // Example: http://localhost:5000/api/v1
// //       const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

// //       if (!apiBaseUrl) {
// //         throw new Error(
// //           "Backend API URL is not configured. Please set NEXT_PUBLIC_API_URL."
// //         );
// //       }

// //       const response = await fetch(
// //         `${apiBaseUrl.replace(/\/+$/, "")}/contact`,
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             name,
// //             email,
// //             message,
// //           }),
// //         }
// //       );

// //       const result = await response.json().catch(() => null);

// //       if (!response.ok) {
// //         throw new Error(
// //           result?.message || "Failed to send your message."
// //         );
// //       }

// //       // Clear the input fields only after the server confirms success.
// //       setFormData(initialFormData);

// //       toast.success(
// //         result?.message || "Your message has been sent successfully!"
// //       );
// //     } catch (error) {
// //       console.error("Contact form submission error:", error);

// //       toast.error(
// //         error instanceof Error
// //           ? error.message
// //           : "Something went wrong. Please try again."
// //       );
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-screen flex-col">
// //       <Navbar />

// //       <main className="mx-auto w-full max-w-lg flex-1 px-4 py-12">
// //         <div className="card space-y-5 p-6">
// //           <div>
// //             <h1 className="text-2xl font-bold">Contact</h1>
// //             <p className="mt-2 text-sm text-gray-500">
// //               Send us a message. We will get back to you as soon as possible.
// //             </p>
// //           </div>

// //           <form onSubmit={handleSubmit} className="space-y-4">
// //             <div className="space-y-1">
// //               <label htmlFor="name" className="text-sm font-medium">
// //                 Your name
// //               </label>

// //               <input
// //                 id="name"
// //                 name="name"
// //                 type="text"
// //                 className="input w-full"
// //                 placeholder="Your name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 autoComplete="name"
// //                 maxLength={100}
// //                 required
// //                 disabled={isSubmitting}
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label htmlFor="email" className="text-sm font-medium">
// //                 Email
// //               </label>

// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 className="input w-full"
// //                 placeholder="Email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 autoComplete="email"
// //                 maxLength={254}
// //                 required
// //                 disabled={isSubmitting}
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label htmlFor="message" className="text-sm font-medium">
// //                 Message
// //               </label>

// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 className="input min-h-28 w-full"
// //                 placeholder="Write your message..."
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 maxLength={5000}
// //                 required
// //                 disabled={isSubmitting}
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               className="btn btn-primary w-full"
// //               disabled={isSubmitting}
// //             >
// //               {isSubmitting ? "Sending..." : "Send Message"}
// //             </button>
// //           </form>
// //         </div>
// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }



// //send Messages  button এ click করলে info database এ যাবে input fild এ থাকবে না...give me the full code file   

// //D:\project-management-saas-frontend\src\app\contact\page.tsx

// "use client";

// import { Footer } from "@/components/layout/Footer";
// import { Navbar } from "@/components/layout/Navbar";
// import { toast } from "sonner";

// export default function ContactPage() {
//   return (
//     <div>
//       <Navbar />
//       <main className="mx-auto max-w-lg px-4 py-12">
//         <div className="card p-6 space-y-4">
//           <h1 className="text-2xl font-bold">Contact</h1>
//           <input className="input" placeholder="Your name" />
//           <input className="input" placeholder="Email" type="email" />
//           <textarea className="input min-h-28" placeholder="Message" />
//           <button
//             className="btn btn-primary w-full"
//             onClick={() => toast.success("Message sent (demo)")}
//           >
//             Send Message
//           </button>
//         </div>
//       </main>
//         <Footer/>
//     </div>
//   );
// }
// //this code is correct add this feature info go database not show input fild


"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { contactApi } from "@/lib/api";
import { toast } from "sonner";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      await contactApi.send({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      toast.success("Message sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message || "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-lg px-4 py-12">
        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          <h1 className="text-2xl font-bold">Contact</h1>

          <div>
            <label className="text-sm text-slate-300">Your name</label>
            <input
              className="input mt-1"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input
              className="input mt-1"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
 {/* Solve Message pass error */}
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea
              className="input mt-1 min-h-28"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}