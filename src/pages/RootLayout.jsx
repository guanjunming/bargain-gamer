import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
