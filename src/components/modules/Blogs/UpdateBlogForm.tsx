/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Image from "next/image";
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
import { updateBlog } from "@/actions/create";
import { BlogCardProps, UpdateBlogsFormProps } from "@/types/blogsTypes";

const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(20, "Content must be at least 20 characters"),
  coverUrl: z.any().optional(),
});

type UpdateBlogFormData = z.infer<typeof blogSchema>;

const UpdateBlogForm = ({ blogId }: UpdateBlogsFormProps) => {
  const [blog, setBlog] = useState<BlogCardProps | null>(null);
  const [preview, setPreview] = useState<string>(""); 
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<UpdateBlogFormData>({
    resolver: zodResolver(blogSchema),
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`, { cache: "no-store" });
        const result = await res.json();
        setBlog(result.data);

        reset({
          title: result.data.title,
          excerpt: result.data.excerpt,
          content: result.data.content,
        });

        setPreview(result.data.coverUrl || "");
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [blogId, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data: UpdateBlogFormData) => {
    setLoading(true);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]: any) => {
      if (value) formData.append(key, value);
    });

   
    const fileInput = document.getElementById("coverUrl") as HTMLInputElement;
    if (fileInput?.files?.[0]) {
      formData.append("coverUrl", fileInput.files[0]);
    }

    try {
      const result = await updateBlog(blogId, formData);
      if (result.success) {
        toast.success("Blog updated successfully!");
      } else {
        toast.error(result.message || "Failed to update blog!");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-6 md:py-0 bg-gray-50">
      <Card className="w-full max-w-7xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Update Blog
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Edit the blog details below
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
           
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
            </div>

           
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" {...register("excerpt")} />
              {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt.message}</p>}
            </div>

          
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" {...register("content")} className="min-h-[150px]" />
              {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
            </div>

       
            <div className="space-y-2">
              <Label htmlFor="coverUrl">Cover Image</Label>
              <div className="flex items-center gap-3">
                {preview && (
                  <div className="w-28 h-28 relative rounded-lg overflow-hidden border">
                    <Image src={preview} alt="Cover Preview" fill className="object-cover" />
                  </div>
                )}
                <label htmlFor="coverUrl" className="flex items-center gap-2 cursor-pointer border border-dashed p-3">
                  <Upload className="w-5 h-5" />
                  <span className="text-sm text-gray-600">Click to upload</span>
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
            </div>

            <Button type="submit" className="w-full bg-[#2563EB] hover:bg-[#2563EB] text-white" disabled={loading}>
              {loading ? "Updating..." : "Update Blog"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateBlogForm;
