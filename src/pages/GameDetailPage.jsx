import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useFavoritesContext, useUserContext } from "../context/contextHooks";
import ScreenshotSlider from "../components/ScreenshotSlider";
import DOMPurify from "dompurify";
import SystemRequirementsSection from "../components/SystemRequirementsSection";
import GameSummary from "../components/GameSummary";

const GameDetailPage = () => {
  const { id } = useParams();
  const { game, screenshots } = useLoaderData();
  const { user } = useUserContext();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesContext();
  const navigate = useNavigate();

  const cleanDescription = DOMPurify.sanitize(game.description);
  const isGameFavorite = isFavorite(id);

  const handleClickFavorite = () => {
    if (user) {
      if (isGameFavorite) {
        removeFavorite(id);
      } else {
        addFavorite(id);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full text-gray-300 py-2 md:py-4 px-3.5 md:px-5">
      <section className="mb-3">
        <div className="space-x-2 max-[500px]:hidden text-sm">
          <Link to="/explore/all-games" className="hover:text-white">
            All Games
          </Link>
          <span>{">"}</span>
          {game.genres?.length > 0 && (
            <>
              <Link
                to={`/explore/${game.genres[0].slug}`}
                className="hover:text-white"
              >{`${game.genres[0].name} Games`}</Link>
              <span>{">"}</span>
            </>
          )}
          <Link className="hover:text-white">{game.name}</Link>
        </div>
        <h1 className="text-[1.625rem] text-white font-semibold">
          {game.name}
        </h1>
      </section>

      <div className="flex flex-col slg:flex-row-reverse gap-4">
        <div className="w-full slg:w-1/3">
          <GameSummary game={game} />
        </div>
        <div className="w-full slg:w-2/3">
          <ScreenshotSlider gameName={game.name} screenshots={screenshots} />
        </div>
      </div>

      <section className="my-7">
        <h2 className="uppercase text-xl font-medium text-white">
          About This Game
        </h2>
        <hr className="border-gray-600 mb-2" />
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        />
      </section>

      <SystemRequirementsSection platforms={game.platforms} />
    </div>
  );
};

export default GameDetailPage;
