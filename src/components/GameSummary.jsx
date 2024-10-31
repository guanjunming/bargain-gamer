import { modifyImageUrl, formatDate } from "../utils/utils";
import imgPlaceholder from "../assets/image_not_available.png";
import GameSummaryLabel from "./GameSummaryLabel";
import { Link } from "react-router-dom";
import PlatformIcons from "./PlatformIcons";
import { IconContext } from "react-icons";
import FavoriteButton from "./FavoriteButton";

const GameSummary = ({ game }) => {
  const filteredTags = game.tags.filter((tag) => tag.language === "eng");

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="w-full flex flex-col sm:max-ml:flex-row gap-2">
        <div className="w-full sm:max-ml:w-1/2">
          <img
            src={
              game.background_image
                ? modifyImageUrl(game.background_image, "small")
                : imgPlaceholder
            }
            alt={game.name + " header image"}
            className="aspect-[1.8/1] object-cover bg-center w-full"
          />
        </div>

        <div className="w-full sm:max-ml:w-1/2 text-sm flex flex-col gap-1">
          <GameSummaryLabel label="Genre">
            {game.genres.map((genre) => genre.name).join(", ")}
          </GameSummaryLabel>

          <GameSummaryLabel label="Developer" textClassName="truncate">
            {game.developers.length > 0
              ? game.developers[0].name
              : "To be announced"}
          </GameSummaryLabel>

          <GameSummaryLabel label="Publisher" textClassName="truncate">
            {game.publishers.length > 0
              ? game.publishers[0].name
              : "To be announced"}
          </GameSummaryLabel>

          <GameSummaryLabel label="Release Date" textClassName="truncate">
            {game.released ? formatDate(game.released) : "To be announced"}
          </GameSummaryLabel>

          <GameSummaryLabel label="Platforms" textClassName="truncate">
            {game.parent_platforms.length > 0 ? (
              <IconContext.Provider value={{ size: "1rem" }}>
                <PlatformIcons platforms={game.parent_platforms} />
              </IconContext.Provider>
            ) : (
              "To be announced"
            )}
          </GameSummaryLabel>

          <div className="hidden sm:max-ml:flex mt-auto">
            <FavoriteButton gameId={game.id} />
          </div>
        </div>
      </div>

      {filteredTags.length > 0 && (
        <div>
          <div className="text-sm mb-1">Used-defined tags for this game:</div>
          <div className="flex flex-wrap gap-1 overflow-hidden max-h-[calc(2*theme('spacing.6'))]">
            {filteredTags.map((tag) => (
              <Link
                key={tag.id}
                to={`/games?tags=${tag.slug}`}
                className="text-xs bg-blue-600/20 hover:bg-blue-500 hover:text-white rounded-sm py-0.5 px-1 max-w-48 truncate"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex sm:max-ml:hidden mt-auto">
        <FavoriteButton gameId={game.id} />
      </div>
    </div>
  );
};

export default GameSummary;
