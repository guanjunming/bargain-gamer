import SideMenu from "../components/SideMenu";
import GameCard from "../components/GameCard";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { searchGames } from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";

const GamesPage = () => {
  const [searchParams] = useSearchParams();
  const loadMoreRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: loadMoreRef.current,
    threshold: 1,
  });

  const query = searchParams.get("search");

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["games", { search: query, page_size: 20 }],
      queryFn: ({ pageParam = 1 }) =>
        searchGames({ search: query, page_size: 20, page: pageParam }),
      getNextPageParam: (lastPage, pages) => {
        const { next } = lastPage;
        return next ? pages.length + 1 : undefined;
      },
      enabled: !!query,
    });

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, hasNextPage]);

  return (
    <div className="min-h-full flex px-8">
      <SideMenu />

      <div className="w-full flex flex-col">
        <div className="mb-4">
          <h1 className="text-white font-bold text-4xl">
            Search results for: {query}
          </h1>
        </div>

        <div className="my-4">
          {/* <div className="h-10 bg-gray-600 mb-6">Sorting here</div> */}

          <div className="flex flex-col items-center">
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-x-6 gap-y-6">
              {data?.pages.map((page) =>
                page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))
              )}
            </div>

            <div ref={ref} className="flex justify-center py-8 text-white">
              <div className="h-8">
                {isFetchingNextPage && hasNextPage && (
                  <CircularProgress size="2rem" color="inherit" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
