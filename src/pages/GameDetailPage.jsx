import { useNavigate, useParams } from "react-router-dom";
import { getGameById } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { useFavoritesContext, useUserContext } from "../context/contextHooks";

export const loader =
  (queryClient) =>
  ({ params }) => {
    return queryClient.fetchQuery({
      queryKey: ["game", params.id],
      queryFn: () => getGameById(params.id),
    });
  };

const GameDetailPage = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  const { addFavorite, removeFavorite, isFavorite, isPending } =
    useFavoritesContext();
  const navigate = useNavigate();

  const { data: game } = useQuery({
    queryKey: ["game", id],
    queryFn: () => getGameById(id),
  });

  const isGameFavorite = isFavorite(game.id);

  const handleClickFavorite = () => {
    if (user) {
      if (isGameFavorite) {
        removeFavorite(game.id);
      } else {
        addFavorite(game.id);
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
