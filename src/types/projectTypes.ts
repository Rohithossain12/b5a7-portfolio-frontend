export interface ProjectCardProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  features?: string[];
  technologies?: string[];
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  thumbnail?: string;
}



export interface UpdateProjectFormProps {
  projectId: string;
}


export interface ProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    frontendUrl?: string;
    backendUrl?: string;
    liveUrl?: string;
    thumbnail?: string;
    createdAt: string;
    updatedAt: string;
  };
}