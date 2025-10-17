"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPageDetails() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    try {
      console.log("Form Data:", data);
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center   px-4 md:py-12 text-gray-800 dark:text-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold text-blue-500 mb-6 text-center"
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center max-w-2xl text-gray-600 dark:text-gray-300 mb-10"
      >
        Have a question, collaboration idea, or just want to say hi? I’d love to
        hear from you — drop me a message or connect on social media!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col md:flex-row gap-6 justify-center mb-12"
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

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
      >
        <Input
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <Input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <Textarea
          rows={4}
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}

        <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#2563EB] text-white">
          Send Message
        </Button>
      </motion.form>

    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex justify-center gap-6 text-gray-600 dark:text-gray-300 mt-10 "
      >
        <Link
          href="https://github.com/Rohithossain12"
          target="_blank"
          className="text-blue-400 hover:text-blue-600 transition duration-300"
        >
          <Github size={28} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rohit-hossain-4b21281b9/"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <Linkedin size={28} />
        </Link>
        <Link
          href="https://www.facebook.com/rafid.islam.96199"
          target="_blank"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <Facebook size={28} />
        </Link>
        <a
          href="mailto:rafidislamrohit576@gmail.com"
          className="text-blue-400 hover:text-blue-500 transition duration-300"
        >
          <Mail size={28} />
        </a>
      </motion.div>
    </section>
  );
}
