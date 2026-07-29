import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";


const MainLayout = () => {
  return (
    <div className="min-h-screen min-h-screen bg-[#FAF3E1] text-[#264653]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;