import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <Navigation />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
