import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";
import Avatar from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";
import { useUserContext } from "../context/contextHooks";
import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";

const HeaderBar = () => {
  const { user, logoutUser } = useUserContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setDropdownOpen(false));

  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className=" w-full flex items-center justify-between gap-4 py-6 px-3.5 md:px-5">
      <Link to="/">
        <div className="flex items-center gap-2 transition-all hover:scale-[1.02]">
          <img src={logo} alt="Logo" className="h-10 w-10 min-w-10" />
          <h1 className="text-white text-2xl font-bold">GameHaven</h1>
        </div>
      </Link>

      <div className="hidden sm:block w-full max-w-sm">
        <SearchBar />
      </div>

      {!user ? (
        <div className="w-auto md:w-52">
          <Link to="/login">
            <h2 className="text-right text-gray-300 hover:text-white font-medium">
              Login
            </h2>
          </Link>
        </div>
      ) : (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 group"
          >
            <h2 className="max-w-36 text-gray-300 group-hover:text-white font-medium hidden md:block truncate">
              {user.username}
            </h2>
            <Avatar sx={{ bgcolor: blueGrey[700], width: 40, height: 40 }}>
              <span className="text-lg uppercase">{user.username[0]}</span>
            </Avatar>
          </button>

          <div
            className={`absolute right-0 mt-1 w-36 bg-gray-700 shadow-md z-10 transition-opacity duration-300 ease-in-out ${
              dropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Link
              to="/favorites"
              onClick={() => setDropdownOpen(false)}
              className="block px-5 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700 hover:font-medium"
            >
              My Favorites
            </Link>
            <button
              onClick={() => {
                logoutUser();
                setDropdownOpen(false);
              }}
              className="w-full text-left px-5 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-700 hover:font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default HeaderBar;
