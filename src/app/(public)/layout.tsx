import Footer from "@/components/modules/shared/Footer";
import Navbar from "@/components/modules/shared/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-180px)] bg-[#F9FAFB]">{children}</main>
      <Footer />
    </>
  );
}
