import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useFavoritesContext, useUserContext } from "../context/contextHooks";
import ScreenshotSlider from "../components/ScreenshotSlider";

const GameDetailPage = () => {
  const { id } = useParams();
  const { game, screenshots } = useLoaderData();
  const { user } = useUserContext();
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesContext();
  const navigate = useNavigate();

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
    <div className="w-full px-4 sm:px-8 py-2 sm:py-4 text-gray-300">
      <div className="mb-3">
        <div className="space-x-2 max-[500px]:hidden text-sm">
          <Link to="/explore/all-time-top" className="hover:text-white">
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
      </div>

      <ScreenshotSlider gameName={game.name} screenshots={screenshots} />

      <button onClick={handleClickFavorite}>
        {isGameFavorite ? "Remove Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default GameDetailPage;
