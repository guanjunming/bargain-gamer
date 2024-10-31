import { useNavigate } from "react-router-dom";
import { useFavoritesContext, useUserContext } from "../context/contextHooks";
import { CircularProgress } from "@mui/material";

const FavoriteButton = ({ gameId }) => {
  const { user } = useUserContext();
  const { addFavorite, removeFavorite, isFavorite, isPending, isError } =
    useFavoritesContext();
  const navigate = useNavigate();

  // convert to string as gameId is stored as string
  const id = gameId.toString();

  const handleClick = () => {
    if (user) {
      if (isFavorite(id)) {
        removeFavorite(id);
      } else {
        addFavorite(id);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full slg:w-auto text-sm">
      <button
        onClick={handleClick}
        className="w-full px-3 py-2 text-gray-200 font-medium hover:text-white shadow-lg text-shadow rounded-sm bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500"
      >
        {isPending && (
          <CircularProgress
            size={14}
            sx={{ color: "white", marginBottom: "-2px" }}
            className="mr-2"
          />
        )}
        {isFavorite(id) ? "Remove from favorites" : "Add to favorites"}
      </button>
      {isError && <div className="mt-0.5 font-medium">Oops, sorry!</div>}
    </div>
  );
};

export default FavoriteButton;
