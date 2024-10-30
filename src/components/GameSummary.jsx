import { modifyImageUrl, formatDate } from "../utils/utils";
import imgPlaceholder from "../assets/image_not_available.png";
import GameSummaryLabel from "./GameSummaryLabel";
import { Link } from "react-router-dom";
import PlatformIcons from "./PlatformIcons";
import { IconContext } from "react-icons";

const GameSummary = ({ game }) => {
  const filteredTags = game.tags.filter((tag) => tag.language === "eng");

  return (
    <>
      <div className="w-full flex flex-row slg:flex-col gap-2">
        <div className="w-1/2 slg:w-full">
          <img
            src={
              game.background_image
                ? modifyImageUrl(game.background_image, "small")
                : imgPlaceholder
            }
            alt={game.name + " header image"}
            className="aspect-[1.8/1] object-cover bg-center"
          />
        </div>

        <div className="w-1/2 slg:w-full text-sm flex flex-col gap-1">
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
        </div>
      </div>

      {filteredTags.length > 0 && (
        <div className="my-2">
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
    </>
  );
};

export default GameSummary;
