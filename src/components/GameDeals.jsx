import { useQuery } from "@tanstack/react-query";
import { getDealsByGameId, getGameIdByName } from "../api/api";
import DealCard from "./DealCard";

const GameDeals = ({ game }) => {
  const { data: gameId } = useQuery({
    queryKey: ["gameId", game.id],
    queryFn: () => getGameIdByName(game.name, game.slug),
  });

  const { data: deals } = useQuery({
    queryKey: ["deals", gameId],
    queryFn: () => getDealsByGameId(gameId),
    enabled: !!gameId,
  });

  if (!deals || deals.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <h2 className="uppercase text-xl font-medium text-white">Where to buy</h2>
      <hr className="border-gray-600 mb-2" />
      <div className="w-full space-y-1 ">
        {deals.map((deal) => (
          <DealCard key={deal.storeID} deal={deal} />
        ))}
      </div>
    </section>
  );
};

export default GameDeals;
