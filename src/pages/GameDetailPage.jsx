import { useLoaderData } from "react-router-dom";
import ScreenshotSlider from "../components/ScreenshotSlider";
import DOMPurify from "dompurify";
import SystemRequirementsSection from "../components/SystemRequirementsSection";
import GameSummary from "../components/GameSummary";
import Breadcrumbs from "../components/Breadcrumbs";
import GameDeals from "../components/GameDeals";

const GameDetailPage = () => {
  const { game, screenshots } = useLoaderData();

  const cleanDescription = DOMPurify.sanitize(game.description);

  return (
    <div className="w-full text-gray-300 py-2 md:py-4 px-3.5 md:px-5">
      <section className="mb-3">
        <Breadcrumbs game={game} />
        <h1 className="text-[1.625rem] text-white font-semibold">
          {game.name}
        </h1>
      </section>

      <section className="flex flex-col ml:flex-row-reverse gap-2.5">
        <div className="w-full ml:w-1/3">
          <GameSummary game={game} />
        </div>
        <div className="w-full ml:w-2/3">
          <ScreenshotSlider gameName={game.name} screenshots={screenshots} />
        </div>
      </section>

      <div className="flex flex-col ml:flex-row-reverse gap-4 justify-between">
        <div className="w-full ml:w-2/5">
          <GameDeals game={game} />
        </div>

        <div className="w-full ml:w-3/5">
          <section className="my-8">
            <h2 className="uppercase text-xl font-medium text-white">
              About This Game
            </h2>
            <hr className="border-gray-600 mb-2" />
            <div
              className="space-y-4 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: cleanDescription }}
            />
          </section>

          <SystemRequirementsSection platforms={game.platforms} />
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
