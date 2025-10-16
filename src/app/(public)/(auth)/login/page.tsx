import LoginForm from "@/components/modules/Auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Rohit Portfolio",
  description:
    "Login to your account on Md Rohit Hossain's portfolio to manage projects, blogs, and dashboard content.",
};


const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;