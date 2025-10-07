import Link from "next/link";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A8A] text-white py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-white">
        <div>
          <h2 className=" text-xl md:text-2xl font-bold mb-3">Rohit Hossain</h2>
          <p className="text-sm text-gray-200">
            A creative developer passionate about building modern web apps and
            beautiful user experiences.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Connect With Me</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Rohithossain12"
              target="_blank"
              className="hover:text-gray-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-hossain-4b21281b9"
              target="_blank"
              className="hover:text-gray-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/rafid.islam.96199"
              target="_blank"
              className="hover:text-gray-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="rafidislamrohit576@gmail.com"
              className="hover:text-gray-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm text-gray-200">
        © {year} Rohit Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
