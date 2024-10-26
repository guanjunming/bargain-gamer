import { useState } from "react";
import {
  exploreLinks,
  categoryLinks,
  genreLinks,
  platformsLinks,
} from "../data/sideMenuData";
import SideMenuLink from "./SideMenuLink";
import { IconContext } from "react-icons";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function SideMenu() {
  const [showAllGenres, setShowAllGenres] = useState(false);

  return (
    <IconContext.Provider value={{ size: "1.2rem" }}>
      <aside className="text-white flex flex-col w-[300px] gap-y-6 py-8">
        <div className="space-y-3">
          <h2 className="font-bold text-xl">Explore</h2>
          <ul className="space-y-3">
            {exploreLinks.map((link) => (
              <SideMenuLink key={link.path} link={link} />
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="font-bold text-xl">Categories</h2>
          <ul className="space-y-3">
            {categoryLinks.map((link) => (
              <SideMenuLink key={link.path} link={link} />
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-bold text-xl">Platforms</h2>
          <ul className="space-y-3">
            {platformsLinks.map((link) => (
              <SideMenuLink key={link.path} link={link} />
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-bold text-xl">Genres</h2>
          <ul className="space-y-3">
            {genreLinks.map((link, index) => {
              return !showAllGenres && index > 4 ? null : (
                <SideMenuLink key={link.path} link={link} />
              );
            })}

            <li
              className="cursor-pointer group"
              onClick={() => setShowAllGenres((prev) => !prev)}
            >
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-md flex place-content-center bg-gray-700 text-gray-400 group-hover:bg-gray-500 group-hover:text-gray-800">
                  {showAllGenres ? <FaAngleUp /> : <FaAngleDown />}
                </span>
                <span className="text-gray-400">
                  {showAllGenres ? "Hide" : "Show all"}
                </span>
              </div>
            </li>
          </ul>

          <button></button>
        </div>
      </aside>
    </IconContext.Provider>
  );
}
