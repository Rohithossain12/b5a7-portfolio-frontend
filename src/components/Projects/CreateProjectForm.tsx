/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { createProject } from "@/actions/create";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const CreateProjectForm = () => {
  const [fileName, setFileName] = useState("");
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
      const result = await createProject(formData);

      if (result?.success) {
        toast.success("Project created successfully!");
        setTimeout(() => {
          router.push("/projects");
        }, 1000);
      } else {
        toast.error(result?.message || "Failed to create project");
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
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Create New Project
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Fill out the form below to add your project details
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter your project title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Write a brief description..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Features (comma separated)</Label>
              <Input
                id="features"
                name="features"
                placeholder="e.g., User Login, Dashboard"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">
                Technologies (comma separated)
              </Label>
              <Input
                id="technologies"
                name="technologies"
                placeholder="e.g., React, Node.js"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="frontendUrl">Frontend URL</Label>
                <Input
                  id="frontendUrl"
                  name="frontendUrl"
                  placeholder="https://frontend-link.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="backendUrl">Backend URL</Label>
                <Input
                  id="backendUrl"
                  name="backendUrl"
                  placeholder="https://backend-link.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="liveUrl">Live URL</Label>
              <Input
                id="liveUrl"
                name="liveUrl"
                placeholder="https://your-live-site.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail Image</Label>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="thumbnail"
                  className="flex items-center gap-2 cursor-pointer border border-dashed p-3 w-full"
                >
                  <Upload className="w-5 h-5" />
                  <span>{fileName || "Click to upload"}</span>
                  <Input
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#2563EB] text-white flex items-center justify-center gap-2"
              disabled={loading} 
            >
              {loading ? "Creating..." : "Create Project"} 
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProjectForm;
