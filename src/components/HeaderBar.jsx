import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.svg";
import Avatar from "@mui/material/Avatar";
import { blueGrey } from "@mui/material/colors";
import { useUserFavorites } from "../context/UserFavoritesContext";
import { getAvatarInitials } from "../utils/utils";

const HeaderBar = () => {
  const { user } = useUserFavorites();

  return (
    <nav className=" w-full flex items-center gap-4 py-6 px-8 justify-between bg-gray-800">
      <Link to="/">
        <div className="flex items-center gap-2 transition-all hover:scale-105">
          <img src={logo} alt="Logo" className="h-10 w-10 min-w-10" />
          <h1 className="hidden md:block text-white text-2xl font-bold">
            Game Haven
          </h1>
        </div>
      </Link>

      <SearchBar />

      {!user && (
        <Link to="/signup">
          <h2 className="text-gray-300 hover:text-white font-medium">Log In</h2>
        </Link>
      )}

      {user && (
        <div className="flex items-center gap-2 group">
          <h2 className="text-gray-300 group-hover:text-white font-medium hidden md:block">
            {user.username}
          </h2>
          <Avatar sx={{ bgcolor: blueGrey[700], width: 40, height: 40 }}>
            <span className="text-lg uppercase">
              {getAvatarInitials(user.username)}
            </span>
          </Avatar>
        </div>
      )}
    </nav>
  );
};

export default HeaderBar;
