/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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

const CreateBlogForm = () => {
  const [fileName, setFileName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    try {
      const result = await createBlog(formData);

      if (result?.success) {
        toast.success("Blog created successfully!");
        setTimeout(() => {
          router.push("/blogs");
        }, 1000);
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
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <Card className="w-full max-w-2xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">
            Create New Blog
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Fill out the form below to create your blog post
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
          
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter your blog title"
                required
              />
            </div>

         
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                placeholder="Write a short summary of your blog..."
                className="min-h-[100px]"
                required
              />
            </div>

           
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your full blog content here..."
                className="min-h-[150px]"
                required
              />
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
                    name="coverUrl"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
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
