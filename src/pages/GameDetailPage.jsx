import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getGameById } from "../api/api";
import { useFavoritesContext, useUserContext } from "../context/contextHooks";

export const gameDetailLoader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;

    return queryClient.fetchQuery({
      queryKey: ["game", id],
      queryFn: () => getGameById(id),
    });
  };

const GameDetailPage = () => {
  const { id } = useParams();
  const game = useLoaderData();
  const { user } = useUserContext();
  const { addFavorite, removeFavorite, isFavorite, isPending } =
    useFavoritesContext();
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
    <div className="w-full text-white">
      {game && (
        <div>
          <h1 className="text-2xl">{game.name}</h1>
          <p> {isPending ? "Processing" : "Ok"}</p>
          <button onClick={handleClickFavorite}>
            {isGameFavorite ? "Remove Favorites" : "Add to Favorites"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GameDetailPage;
