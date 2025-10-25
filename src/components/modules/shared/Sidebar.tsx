"use client";

import Link from "next/link";
import {
  Home,
  PlusCircle,
  FolderPlus,
  FileText,
  FolderCog,
} from "lucide-react";
import clsx from "clsx";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={clsx(
        "fixed top-0 left-0 h-full w-64 bg-[#1E3A8A] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-40",
        {
          "-translate-x-full md:translate-x-0": !isOpen,
          "translate-x-0": isOpen,
        }
      )}
    >
      <div className="p-4 border-b border-white/20">
        <h2 className="text-xl px-3 font-semibold">Dashboard</h2>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black transition-colors"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black transition-colors"
        >
          <PlusCircle className="h-4 w-4" />
          Create Blog
        </Link>

        <Link
          href="/dashboard/create-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black transition-colors"
        >
          <FolderPlus className="h-4 w-4" />
          Create Project
        </Link>

        <Link
          href="/dashboard/manage-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black transition-colors"
        >
          <FileText className="h-4 w-4" />
          Manage Blog
        </Link>

        <Link
          href="/dashboard/manage-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black transition-colors"
        >
          <FolderCog className="h-4 w-4" />
          Manage Project
        </Link>
      </nav>
    </aside>
  );
}
