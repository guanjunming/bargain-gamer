import { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import { FaBars } from "react-icons/fa"; // Import icon for the menu button
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

const MainLayout = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 640px)");
  const location = useLocation();

  useEffect(() => {
    setIsSideMenuOpen(false);
  }, [location]);

  if (isSideMenuOpen && isAboveSmallScreen) {
    setIsSideMenuOpen(false);
  }

  const toggleSideMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex relative">
      <button
        className="sm:hidden p-2 text-gray-800 bg-white rounded-full fixed bottom-4 right-4 z-50"
        onClick={toggleSideMenu}
      >
        <FaBars size={20} />
      </button>

      <div
        className={`fixed sm:relative z-40 top-0 bg-gray-800 h-full sm:h-auto sm:w-auto transform transition-transform duration-300 ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <SideMenu />
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
