import GameCard from "../components/GameCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getFavoriteGamesData } from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import { useFavoritesContext, useUserContext } from "../context/contextHooks";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const { user } = useUserContext();
  const { favorites } = useFavoritesContext();
  const loadMoreRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: loadMoreRef.current,
    threshold: 1,
  });

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["favoriteGames", favorites],
      queryFn: getFavoriteGamesData,
      getNextPageParam: (lastPage) => {
        return lastPage.hasNextPage ? lastPage.nextPage : undefined;
      },
      enabled: !!user && favorites?.length > 0,
    });

  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, hasNextPage]);

  return (
    <section className="w-full flex flex-col pt-4">
      <div className="mb-4">
        <h1 className="text-white font-bold text-4xl">My Favorites</h1>
      </div>

      <div className="my-4">
        {!user && (
          <p className="text-gray-300 text-lg">
            <Link to="/login" className="text-white hover:text-blue-200">
              Sign in
            </Link>{" "}
            to add games to your favorites.
          </p>
        )}

        {user && favorites?.length === 0 && (
          <p className="text-gray-300 text-lg">
            Nothing to show here, try adding games to your favorites.
          </p>
        )}

        <div className="flex flex-col items-center">
          {user && favorites?.length > 0 && !data && (
            <div className="w-full flex justify-center mt-20">
              <CircularProgress size={50} sx={{ color: "white" }} />
            </div>
          )}
          <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-4 gap-y-4">
            {data?.pages.map((page) =>
              page.results.map((game) => <GameCard key={game.id} game={game} />)
            )}
          </div>

          <div ref={ref} className="flex justify-center py-8">
            <div className="h-8">
              {isFetchingNextPage && hasNextPage && (
                <CircularProgress size={30} sx={{ color: "white" }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
