import { useParams } from "react-router-dom";
import { getGameById } from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";

const GameDetailPage = () => {
  const { id } = useParams();

  const { data: game, isPending } = useQuery({
    queryKey: ["game", id],
    queryFn: () => getGameById(id),
  });

  console.log("ispending", isPending);

  return (
    <div className="w-full text-white">
      {isPending && (
        <div className="flex justify-center">
          <CircularProgress size={50} sx={{ color: "white" }} />
        </div>
      )}
      {game && (
        <div>
          <h1 className="text-2xl">{game.name}</h1>
        </div>
      )}
    </div>
  );
};

export default GameDetailPage;
