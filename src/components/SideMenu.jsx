import { useState } from "react";
import {
  exploreLinks,
  categoryLinks,
  genreLinks,
  platformsLinks,
} from "../data/sideMenuData";
import SideMenuLink from "./SideMenuLink";
import { IconContext } from "react-icons";
import ShowAllButton from "./ShowAllButton";

export default function SideMenu() {
  const [showAllGenres, setShowAllGenres] = useState(false);

  return (
    <IconContext.Provider value={{ size: "1.2rem" }}>
      <aside className="text-white hidden sm:flex flex-col w-[300px] gap-y-6 py-8">
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

            <ShowAllButton
              showAllGenres={showAllGenres}
              setShowAllGenres={setShowAllGenres}
            />
          </ul>

          <button></button>
        </div>
      </aside>
    </IconContext.Provider>
  );
}
