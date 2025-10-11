"use client";

import { useState } from "react";
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

const CreateBlogForm = () => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
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
          <form className="space-y-6">
           
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input
                id="title"
                placeholder="Enter your blog title"
                className="w-full"
              />
            </div>

          
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="Write a short summary of your blog..."
                className="min-h-[100px]"
              />
            </div>

          
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Write your full blog content here..."
                className="min-h-[150px]"
              />
            </div>

           
            <div className="space-y-2">
              <Label htmlFor="coverUrl">Cover Image</Label>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="coverUrl"
                  className="flex items-center gap-2 cursor-pointer rounded-lg border border-dashed border-gray-300 p-3 w-full hover:bg-gray-50 transition"
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
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

          
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-800 transition"
              >
                Create Blog
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlogForm;
