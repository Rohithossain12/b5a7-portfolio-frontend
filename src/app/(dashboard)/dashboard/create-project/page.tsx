import CreateProjectForm from "@/components/Projects/CreateProjectForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Create Project | Rohit Portfolio",
  description:
    "Add a new project in Md Rohit Hossain's portfolio dashboard. Only authorized users can manage projects and showcase them publicly.",
};

const CreateProjectPage = () => {
  return (
    <div>
      <CreateProjectForm />
    </div>
  );
};

export default CreateProjectPage;
