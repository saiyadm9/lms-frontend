import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
