import { Outlet } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div role="banner" className="bg-gray-900">
        <div className="max-w-screen-xl m-auto">
          <HeaderBar />
        </div>
      </div>

      <ScrollToTop />
      <main className="max-w-screen-xl m-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
