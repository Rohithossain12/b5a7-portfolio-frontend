import ContactPageDetails from "@/components/modules/Contact/ContactPageDetails";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact | Rohit Portfolio",
  description:
    "Get in touch with Md Rohit Hossain — Full Stack Developer. Reach out for collaborations, projects, or inquiries.",
};


const ContactPage = () => {
    return (
        <div>
           <ContactPageDetails/>
        </div>
    );
};

export default ContactPage;