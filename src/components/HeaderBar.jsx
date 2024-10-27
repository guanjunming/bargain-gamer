import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.svg";

const HeaderBar = () => {
  return (
    <nav className=" w-full flex items-center py-6 px-8 justify-between bg-gray-800">
      <Link to="/">
        <div className="flex items-center gap-2 transition-all hover:scale-105">
          <img src={logo} alt="Logo" className="h-10 w-10 min-w-10" />
          <h1 className="hidden md:block text-white text-2xl font-bold">
            Game Haven
          </h1>
        </div>
      </Link>

      <SearchBar />
      <div className="w-6">User</div>
    </nav>
  );
};

export default HeaderBar;
