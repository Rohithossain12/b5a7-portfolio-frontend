"use client";

import Link from "next/link";
import { Home, PlusCircle, FolderPlus, FileText, FolderCog } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-black text-white">
      <nav className="flex-1 space-y-2 p-4">
        {/* Home */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <Home className="h-4 w-4" />
          Home
        </Link>

        {/* Create Blog */}
        <Link
          href="/dashboard/create-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <PlusCircle className="h-4 w-4" />
          Create Blog
        </Link>

        {/* Create Project */}
        <Link
          href="/dashboard/create-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <FolderPlus className="h-4 w-4" />
          Create Project
        </Link>

        {/* Manage Blog */}
        <Link
          href="/dashboard/manage-blog"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <FileText className="h-4 w-4" />
          Manage Blog
        </Link>

        {/* Manage Project */}
        <Link
          href="/dashboard/manage-project"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
        >
          <FolderCog className="h-4 w-4" />
          Manage Project
        </Link>
      </nav>
    </aside>
  );
}
