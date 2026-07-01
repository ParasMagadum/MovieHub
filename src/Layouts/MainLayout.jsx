import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="bg-[#141414] text-white min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default MainLayout;