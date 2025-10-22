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
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateBlogFormData>({
    resolver: zodResolver(blogSchema),
  });


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
          { cache: "no-store" }
        );
        const result = await res.json();
        setBlog(result.data);

        reset({
          title: result.data.title,
          excerpt: result.data.excerpt,
          content: result.data.content,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [blogId, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const onSubmit = async (data: UpdateBlogFormData) => {
    setLoading(true);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]: any) => {
      if (value) formData.append(key, value);
    });

 
    if (!fileName && blog?.coverUrl) {
      formData.set("coverUrl", blog.coverUrl);
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
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <Card className="w-full max-w-2xl shadow-lg border border-gray-200">
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
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea id="excerpt" {...register("excerpt")} />
              {errors.excerpt && (
                <p className="text-red-500 text-sm">{errors.excerpt.message}</p>
              )}
            </div>

          
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                {...register("content")}
                className="min-h-[150px]"
              />
              {errors.content && (
                <p className="text-red-500 text-sm">{errors.content.message}</p>
              )}
            </div>

          
            <div className="space-y-2">
              <Label htmlFor="coverUrl">Cover Image</Label>
              <div className="flex items-center gap-3">
                {blog?.coverUrl && !fileName && (
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden border">
                    <Image
                      src={blog.coverUrl}
                      alt="Cover Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {fileName && (
                  <div className="w-20 h-20 flex items-center justify-center border rounded-lg bg-gray-100">
                    <span className="text-sm text-gray-700">{fileName}</span>
                  </div>
                )}
                <label
                  htmlFor="coverUrl"
                  className="flex items-center gap-2 cursor-pointer border border-dashed p-3"
                >
                  <Upload className="w-5 h-5" />
                  <span>{fileName || "Click to upload"}</span>
                  <Input
                    id="coverUrl"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    {...register("coverUrl")}
                    onChange={handleFileChange}
                  />
                </label>
                {errors.coverUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.coverUrl.message as string}
                  </p>
                )}
              </div>
            </div>

        
            <Button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#2563EB] text-white flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Blog"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateBlogForm;
