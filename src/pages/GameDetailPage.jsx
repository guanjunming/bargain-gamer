import { useParams } from "react-router-dom";
import { getGameById } from "../api/api";
import { useQuery } from "@tanstack/react-query";

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

  const { data: game } = useQuery({
    queryKey: ["game", id],
    queryFn: () => getGameById(id),
  });

  return (
    <div className="w-full text-white">
      {game && (
        <div>
          <h1 className="text-2xl">{game.name}</h1>
        </div>
      )}
    </div>
  );
};

export default GameDetailPage;
