import { modifyImageUrl, formatDate } from "../utils/utils";
import imgPlaceholder from "../assets/image_not_available.png";
import GameSummaryLabel from "./GameSummaryLabel";

const GameSummary = ({ game }) => {
  return (
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
      </div>
    </div>
  );
};

export default GameSummary;
