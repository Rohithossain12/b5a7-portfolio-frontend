export type BlogCardProps = {
  id: string;
  title: string;
  excerpt: string;
  content:string
  coverUrl: string;
  createdAt: string;
};

export interface UpdateBlogsFormProps {
  blogId: string;
}