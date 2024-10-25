import SideMenu from "../components/SideMenu";
import GameCard from "../components/GameCard";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchGames } from "../api/api";

const GamesPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  const { data } = useQuery({
    queryKey: ["games", { search: query, page_size: 20 }],
    queryFn: () => searchGames({ search: query, page_size: 20 }),
    enabled: !!query,
  });

  return (
    <div className="flex">
      <SideMenu />
      <div className="py-8 px-6 w-full grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-8 gap-y-6">
        {data &&
          data.results.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default GamesPage;
