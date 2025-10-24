"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className=" py-5 md:py-10 bg-white  ">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-3xl font-bold mb-8 text-blue-500"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
        >
          I’d love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi — feel free to reach out anytime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2">
            <Mail className="text-blue-500" />
            <span>rafidislamrohit576@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-blue-500" />
            <span>+8801646151022</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-blue-500" />
            <span>Pabna, Dhaka, Bangladesh</span>
          </div>
        </motion.div>

       

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#2563EB] text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
