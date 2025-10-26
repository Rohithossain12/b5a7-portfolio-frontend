/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { createBlog } from "@/actions/create";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  coverUrl: z.any().optional(),
});

type BlogFormData = z.infer<typeof blogSchema>;

const CreateBlogForm = () => {
  const [fileName, setFileName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const onSubmit = async (data: BlogFormData) => {
    setLoading(true);
    const formData = new FormData();

   
    formData.append("title", data.title);
    formData.append("excerpt", data.excerpt);
    formData.append("content", data.content);

    
    const fileInput = document.getElementById("coverUrl") as HTMLInputElement;
    if (fileInput?.files?.[0]) {
      formData.append("coverUrl", fileInput.files[0]);
    }

    try {
      const result = await createBlog(formData);

      if (result?.success) {
        toast.success("Blog created successfully!");
        setTimeout(() => router.push("/blogs"), 1000);
      } else {
        toast.error(result?.message || "Failed to create blog");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex py-6 md:py-0 justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-7xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Create New Blog
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Fill out the form below to create your blog post
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input
                id="title"
                placeholder="Enter your blog title"
                {...register("title")}
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

           
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="Write a short summary of your blog..."
                {...register("excerpt")}
              />
              {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt.message}</p>}
            </div>

         
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Write your full blog content here..."
                className="min-h-[150px]"
                {...register("content")}
              />
              {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
            </div>

          
            <div className="space-y-2">
              <Label htmlFor="coverUrl">Cover Image</Label>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="coverUrl"
                  className="flex items-center gap-2 cursor-pointer rounded-lg border border-dashed p-3 w-full hover:bg-gray-50 transition"
                >
                  <Upload className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {fileName || "Click to upload image"}
                  </span>
                  <Input
                    id="coverUrl"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("coverUrl")}
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {errors.coverUrl && (
                <p className="text-red-500 text-sm">{errors.coverUrl.message as string}</p>
              )}
            </div>

           
            <div className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2563EB] text-white hover:bg-[#2563EB] transition"
              >
                {loading ? "Creating..." : "Create Blog"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlogForm;
