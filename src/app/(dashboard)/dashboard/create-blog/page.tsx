import CreateBlogForm from '@/components/modules/Blogs/CreateBlogForm';
import { Metadata } from 'next';





export const metadata: Metadata = {
  title: "Create Blog | Rohit Portfolio",
  description:
    "Create a new blog post in Md Rohit Hossain's portfolio dashboard. Only authorized users can add and manage blogs.",
};

const CreateBlogPage = () => {
    return (
        <div className="">
          <CreateBlogForm/>
        </div>
    );
};

export default CreateBlogPage;