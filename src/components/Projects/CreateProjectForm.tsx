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

const CreateProjectForm = () => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
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
          <form className="space-y-6">
           
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                placeholder="Enter your project title"
                className="w-full"
              />
            </div>

            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Write a brief description of your project..."
                className="min-h-[120px]"
              />
            </div>

           
            <div className="space-y-2">
              <Label htmlFor="features">Features (comma separated)</Label>
              <Input
                id="features"
                placeholder="e.g., User Login, Dashboard, Notifications"
              />
            </div>

            
            <div className="space-y-2">
              <Label htmlFor="technologies">Technologies (comma separated)</Label>
              <Input
                id="technologies"
                placeholder="e.g., React, Node.js, MongoDB"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="frontendUrl">Frontend URL</Label>
                <Input
                  id="frontendUrl"
                  placeholder="https://frontend-link.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="backendUrl">Backend URL</Label>
                <Input id="backendUrl" placeholder="https://backend-link.com" />
              </div>
            </div>

         
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail Image</Label>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="thumbnail"
                  className="flex items-center gap-2 cursor-pointer rounded-lg border border-dashed border-gray-300 p-3 w-full hover:bg-gray-50 transition"
                >
                  <Upload className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {fileName || "Click to upload project thumbnail"}
                  </span>
                  <Input
                    id="thumbnail"
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
                type="button"
                className="w-full bg-black text-white hover:bg-gray-800 transition"
              >
                Create Project
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProjectForm;
