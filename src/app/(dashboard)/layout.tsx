import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Sidebar />
      <main className="ml-56 mt-14 min-h-[calc(100vh-3.5rem)]">
        <div className="max-w-4xl mx-auto px-8 py-10">{children}</div>
      </main>
    </div>
  );
}
