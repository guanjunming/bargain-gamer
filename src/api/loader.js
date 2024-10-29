import { getGameById, getGameScreenshots } from "./api";

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
