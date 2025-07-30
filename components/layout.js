import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div>
        <Header />
        <Navbar />
            {children}
        <Footer />    
    </div>
  );
}