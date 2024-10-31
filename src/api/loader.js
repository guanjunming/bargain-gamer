import { HOME_CAROUSEL_SIZE } from "../data/constants";
import { exploreQueryMap } from "../data/sideMenuData";
import { getGameById, getGameScreenshots, getGamesList } from "./api";

export const gameDetailLoader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;

    const [game, screenshots] = await Promise.all([
      queryClient.fetchQuery({
        queryKey: ["game", id],
        queryFn: () => getGameById(id),
      }),
      queryClient.fetchQuery({
        queryKey: ["screenshots", id],
        queryFn: () => getGameScreenshots(id),
      }),
    ]);

    return { game, screenshots };
  };

export const homeLoader = (queryClient) => async () => {
  const featuredQuery = {
    ...exploreQueryMap["/explore/featured"].query,
    page_size: HOME_CAROUSEL_SIZE,
    page: 2,
  };
  const popularQuery = {
    ...exploreQueryMap["/explore/popular"].query,
    page_size: HOME_CAROUSEL_SIZE,
    page: 3,
  };
  const newReleaseQuery = {
    ...exploreQueryMap["/explore/new-releases"].query,
    page_size: HOME_CAROUSEL_SIZE,
  };

  const queries = [
    {
      key: ["games", featuredQuery],
      queryFn: () => getGamesList(featuredQuery),
    },
    {
      key: ["games", popularQuery],
      queryFn: () => getGamesList(popularQuery),
    },
    {
      key: ["games", newReleaseQuery],
      queryFn: () => getGamesList(newReleaseQuery),
    },
  ];

  await Promise.all(
    queries.map((query) =>
      queryClient.prefetchQuery({
        queryKey: query.key,
        queryFn: query.queryFn,
        staleTime: 10 * 60 * 1000,
      })
    )
  );

  return {
    featuredRes: queryClient.getQueryData(["games", featuredQuery]),
    popularRes: queryClient.getQueryData(["games", popularQuery]),
    newReleaseRes: queryClient.getQueryData(["games", newReleaseQuery]),
  };
};
