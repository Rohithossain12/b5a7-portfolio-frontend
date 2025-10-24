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
import { createProject } from "@/actions/create";

const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  features: z.string().optional(),
  technologies: z.string().optional(),
  frontendUrl: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  backendUrl: z
    .string()
    .url("Must be a valid URL")
    .optional()
    .or(z.literal("")),
  liveUrl: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  thumbnail: z.any().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

const CreateProjectForm = () => {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]: any) => {
      if (value) formData.append(key, value);
    });

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-6 md:py-0 bg-gray-50">
      <Card className="w-full max-w-7xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Create New Project
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Fill out the form below to add your project details
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                placeholder="Enter your project title"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title?.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Write a brief description..."
                {...register("description")}
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Features (comma separated)</Label>
              <Input
                id="features"
                placeholder="e.g., User Login, Dashboard"
                {...register("features")}
              />
              {errors.features && (
                <p className="text-red-500 text-sm">
                  {errors.features?.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">
                Technologies (comma separated)
              </Label>
              <Input
                id="technologies"
                placeholder="e.g., React, Node.js"
                {...register("technologies")}
              />
              {errors.technologies && (
                <p className="text-red-500 text-sm">
                  {errors.technologies?.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="frontendUrl">Frontend URL</Label>
                <Input
                  id="frontendUrl"
                  placeholder="https://frontend-link.com"
                  {...register("frontendUrl")}
                />
                {errors.frontendUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.frontendUrl?.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="backendUrl">Backend URL</Label>
                <Input
                  id="backendUrl"
                  placeholder="https://backend-link.com"
                  {...register("backendUrl")}
                />
                {errors.backendUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.backendUrl?.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="liveUrl">Live URL</Label>
              <Input
                id="liveUrl"
                placeholder="https://your-live-site.com"
                {...register("liveUrl")}
              />
              {errors.liveUrl && (
                <p className="text-red-500 text-sm">
                  {errors.liveUrl?.message}
                </p>
              )}
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
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("thumbnail")}
                    onChange={handleFileChange}
                  />
                </label>
                {errors.thumbnail && (
                  <p className="text-red-500 text-sm">
                    {errors.thumbnail?.message as string}
                  </p>
                )}
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
