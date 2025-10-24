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
import { updateProject } from "@/actions/create";
import { ProjectCardProps, UpdateProjectFormProps } from "@/types/projectTypes";

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

type UpdateProjectFormData = z.infer<typeof projectSchema>;

const UpdateProjectForm = ({ projectId }: UpdateProjectFormProps) => {
  const [project, setProject] = useState<ProjectCardProps | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
          { cache: "no-store" }
        );
        const result = await res.json();
        setProject(result.data);

        reset({
          title: result.data.title,
          description: result.data.description,
          features: result.data.features?.join(", "),
          technologies: result.data.technologies?.join(", "),
          frontendUrl: result.data.frontendUrl,
          backendUrl: result.data.backendUrl,
          liveUrl: result.data.liveUrl,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchProject();
  }, [projectId, reset]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const onSubmit = async (data: UpdateProjectFormData) => {
    setLoading(true);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]: any) => {
      if (value) formData.append(key, value);
    });

    if (!fileName && project?.thumbnail) {
      formData.set("thumbnail", project.thumbnail);
    }

    try {
      const result = await updateProject(projectId, formData);
      if (result.success) {
        toast.success("Project updated successfully!");
      } else {
        toast.error(result.message || "Failed to update project!");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-50">
      <Card className="w-full max-w-7xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Update Project
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Edit the project details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input id="title" {...register("title")} />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register("description")} />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

       
            <div className="space-y-2">
              <Label htmlFor="features">Features (comma separated)</Label>
              <Input id="features" {...register("features")} />
              {errors.features && (
                <p className="text-red-500 text-sm">
                  {errors.features.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">
                Technologies (comma separated)
              </Label>
              <Input id="technologies" {...register("technologies")} />
              {errors.technologies && (
                <p className="text-red-500 text-sm">
                  {errors.technologies.message}
                </p>
              )}
            </div>

     
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="frontendUrl">Frontend URL</Label>
                <Input
                  id="frontendUrl"
                  placeholder="Frontend URL"
                  {...register("frontendUrl")}
                />
                {errors.frontendUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.frontendUrl.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="backendUrl">Backend URL</Label>
                <Input
                  id="backendUrl"
                  placeholder="Backend URL"
                  {...register("backendUrl")}
                />
                {errors.backendUrl && (
                  <p className="text-red-500 text-sm">
                    {errors.backendUrl.message}
                  </p>
                )}
              </div>
            </div>

        
            <div className="space-y-2">
              <Label htmlFor="liveUrl">Live URL</Label>
              <Input
                id="liveUrl"
                placeholder="Live URL"
                {...register("liveUrl")}
              />
              {errors.liveUrl && (
                <p className="text-red-500 text-sm">{errors.liveUrl.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail Image</Label>
              <div className="flex items-center gap-3">
                {project?.thumbnail && !fileName && (
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden border">
                    <Image
                      src={project.thumbnail}
                      alt="Thumbnail"
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
                  htmlFor="thumbnail"
                  className="flex items-center gap-2 cursor-pointer border border-dashed p-3"
                >
                  <Upload className="w-5 h-5" />
                  <span>{fileName || "Click to upload"}</span>
                  <Input
                    id="thumbnail"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    {...register("thumbnail")}
                    onChange={handleFileChange}
                  />
                </label>
                {errors.thumbnail && (
                  <p className="text-red-500 text-sm">
                    {errors.thumbnail.message as string}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#2563EB] hover:bg-[#2563EB] text-white flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProjectForm;
