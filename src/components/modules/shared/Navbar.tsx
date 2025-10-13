"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="bg-[#1E3A8A] ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl md:text-2xl font-bold text-white">
          ROHIT HOSSAIN
        </Link>

        <ul className="hidden md:flex space-x-8 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="relative group transition duration-200"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {session?.user ? (
            <>
              <Button
                className="bg-[#2563EB] text-white rounded transition-none hover:bg-[#2563EB]"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button className="bg-[#2563EB] text-white  rounded transition-none hover:bg-[#2563EB]">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>

        <Button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white bg-[#2563EB]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-md shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-indigo-600 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              {session?.user ? (
                <Button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setOpen(false);
                  }}
                  className="bg-[#2563EB] text-white  rounded hover:bg-[#2563EB]"
                >
                  Logout
                </Button>
              ) : (
                <Button className="bg-[#2563EB] text-white  rounded hover:bg-[#2563EB]">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Login
                  </Link>
                </Button>
              )}
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
