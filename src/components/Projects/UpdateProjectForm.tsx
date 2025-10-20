/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
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
import Image from "next/image";
import { updateProject } from "@/actions/create";
import { toast } from "sonner";

interface UpdateProjectFormProps {
  projectId: string;
}

interface ProjectData {
  title: string;
  description?: string;
  features?: string[];
  technologies?: string[];
  frontendUrl?: string;
  backendUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
}

const UpdateProjectForm = ({ projectId }: UpdateProjectFormProps) => {
  const [project, setProject] = useState<ProjectData | null>(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
          { cache: "no-store" }
        );
        const result = await res.json();
        setProject(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.currentTarget);

 
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

  if (!project) return <p className="text-center py-10">Loading project...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <Card className="w-full max-w-2xl shadow-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">
            Update Project
          </CardTitle>
          <CardDescription className="text-center text-gray-500">
            Edit the project details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                name="title"
                defaultValue={project.title}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                defaultValue={project.description}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Features (comma separated)</Label>
              <Input
                id="features"
                name="features"
                defaultValue={project.features?.join(", ")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="technologies">
                Technologies (comma separated)
              </Label>
              <Input
                id="technologies"
                name="technologies"
                defaultValue={project.technologies?.join(", ")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                id="frontendUrl"
                name="frontendUrl"
                defaultValue={project.frontendUrl}
                placeholder="Frontend URL"
              />
              <Input
                id="backendUrl"
                name="backendUrl"
                defaultValue={project.backendUrl}
                placeholder="Backend URL"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="liveUrl">Live URL</Label>
              <Input
                id="liveUrl"
                name="liveUrl"
                defaultValue={project.liveUrl}
                placeholder="Live URL"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail Image</Label>
              <div className="flex items-center gap-3">
                {project.thumbnail && !fileName && (
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
                    name="thumbnail"
                    type="file"
                    className="hidden"
                    accept="image/*"
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
              {loading ? "Updating..." : "Update Project"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProjectForm;
