import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import PlatformIcons from "./PlatformIcons";
import { modifyImageUrl } from "../utils/utils";
import imgPlaceholder from "../assets/image_not_available.png";

const GameCard = ({ game }) => {
  return (
    <div className="flex flex-col bg-gray-700 shadow-lg transition duration-300 hover:scale-[1.02]">
      <Link to={`/games/${game.id}/${game.slug}`}>
        <img
          src={
            game.background_image
              ? modifyImageUrl(game.background_image, "medium")
              : imgPlaceholder
          }
          alt={game.name + " Thumbnail"}
          className="aspect-[1.7/1] object-cover bg-center w-full overflow-hidden"
        />
        <div className="flex flex-col gap-2 p-3">
          <h3 className="text-white font-bold text-lg leading-6">
            {game.name}
          </h3>
          <IconContext.Provider value={{ color: "white", size: "0.875rem" }}>
            <PlatformIcons platforms={game.parent_platforms} />
          </IconContext.Provider>
          <p className="text-xs text-gray-300">
            {game.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default GameCard;
