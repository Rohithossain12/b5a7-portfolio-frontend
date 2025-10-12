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