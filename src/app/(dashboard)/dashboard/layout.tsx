import Sidebar from "@/components/modules/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="w-full md:w-64 flex-shrink-0">
        <Sidebar />
      </div>
       <section className="flex-1 w-full p-4 md:p-6 lg:p-8 overflow-y-auto">
        {children}
      </section>
    </main>
  );
}
