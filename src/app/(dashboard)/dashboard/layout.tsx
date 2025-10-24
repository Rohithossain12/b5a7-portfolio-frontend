"use client";

import { useState } from "react";
import Sidebar from "@/components/modules/shared/Sidebar";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen flex bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} />

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      <section className="flex-1 w-full overflow-y-auto md:ml-64">
        <div className="sticky top-0 bg-[#1E3A8A] shadow-sm z-20 flex items-center justify-between p-4 md:hidden">
          <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          <Button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-white bg-[#2563EB]"
          >
            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>

        <div className="p-4 md:p-6  ">{children}</div>
      </section>
    </main>
  );
}
