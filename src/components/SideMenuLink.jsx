import { NavLink } from "react-router-dom";

const SideMenuLink = ({ link }) => {
  return (
    <li>
      <NavLink to={link.path} className="group">
        {({ isActive }) => (
          <div className="flex items-center gap-2">
            <span
              className={`${
                isActive
                  ? "bg-white text-gray-800"
                  : "bg-gray-700 group-hover:bg-white group-hover:text-gray-800"
              } p-2 rounded-md flex place-content-center`}
            >
              {link.icon}
            </span>
            <span className={`${isActive && "font-bold"}`}>{link.name}</span>
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default SideMenuLink;
