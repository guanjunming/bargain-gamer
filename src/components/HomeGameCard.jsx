import { Link } from "react-router-dom";
import { modifyImageUrl } from "../utils/utils";
import imgPlaceholder from "../assets/image_not_available.png";

const HomeGameCard = ({ game }) => {
  return (
    <div className="flex flex-col bg-gray-700 card-box-shadow">
      <Link to={`/games/${game.id}/${game.slug}`}>
        <div className="overflow-hidden">
          <img
            src={
              game.background_image
                ? modifyImageUrl(game.background_image, "small")
                : imgPlaceholder
            }
            alt={game.name + " Thumbnail"}
            className="aspect-[1.8/1] object-cover bg-center w-full h-auto"
            loading="lazy"
          />
        </div>

        <div className="p-1.5 text-xs">
          <div className="text-white truncate font-medium">{game.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default HomeGameCard;
