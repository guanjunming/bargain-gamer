import { Outlet } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <HeaderBar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
