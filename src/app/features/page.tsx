import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata = {
  title: "Features | ProjectFlow",
};

export default function FeaturesPage() {
  const features = [
    "Role-based dashboards (ADMIN / OWNER / MEMBER)",
    "Organizations, Projects and Tasks",
    "Task status, assign and comments",
    "Stripe + bKash payments",
    "Admin analytics and audit logs",
    "JWT auth with refresh token",
  ];

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Features</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f} className="card p-4 text-slate-200">
              ✅ {f}
            </div>
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
