import SideMenu from "../components/SideMenu";
import GameCard from "../components/GameCard";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getGamesList } from "../api/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import { FETCH_PAGE_SIZE } from "../data/constants";
import { exploreQueryMap } from "../data/sideMenuData";

const GamesPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const loadMoreRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: loadMoreRef.current,
    threshold: 1,
  });

  let query = null;
  const searchTerms = searchParams.get("search");
  const exploreQuery = exploreQueryMap[location.pathname];

  if (searchTerms) {
    query = { search: searchTerms, page_size: FETCH_PAGE_SIZE };
  } else if (exploreQuery) {
    query = { ...exploreQuery.query, page_size: FETCH_PAGE_SIZE };
  }

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["games", query],
      queryFn: ({ pageParam = 1 }) =>
        getGamesList({ ...query, page: pageParam }),
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

  if (!query) {
    return <Navigate to="/explore/featured" replace />;
  }

  return (
    <div className="min-h-full flex px-8">
      <SideMenu />

      <div className="w-full flex flex-col">
        <div className="mb-4">
          <h1 className="text-white font-bold text-4xl">
            {searchTerms
              ? `Search results for: ${searchTerms}`
              : exploreQuery
              ? exploreQuery.title
              : "Oops, something went wrong"}
          </h1>
        </div>

        <div className="my-4">
          {/* <div className="h-10 bg-gray-600 mb-6">Sorting here</div> */}

          <div className="flex flex-col items-center">
            {!data && query && (
              <div className="w-full flex justify-center mt-20">
                <CircularProgress size={50} sx={{ color: "white" }} />
              </div>
            )}
            <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-6 gap-y-6">
              {data?.pages.map((page) =>
                page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))
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
      </div>
    </div>
  );
};

export default GamesPage;
