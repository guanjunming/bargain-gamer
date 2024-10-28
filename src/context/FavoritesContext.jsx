import { createContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addGameFavorite,
  deleteGameFavorite,
  getGameFavorites,
} from "../api/api";
import { useUserContext } from "./contextHooks";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useUserContext();
  const queryClient = useQueryClient();

  const { data: favorites } = useQuery({
    queryKey: ["favorites", user?.userId],
    queryFn: () => getGameFavorites(user.userId),
    enabled: !!user,
  });

  const {
    mutate: addFavoriteMutate,
    isPending: isAddPending,
    isError: isAddError,
    error: addError,
  } = useMutation({
    mutationFn: addGameFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites", user?.userId] });
    },
  });

  const addFavorite = (gameId) => {
    if (user && !isFavorite(gameId)) {
      addFavoriteMutate({ userId: user.userId, gameId });
    }
  };

  const {
    mutate: deleteFavoriteMutate,
    isPending: isDeletePending,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteGameFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites", user?.userId] });
    },
  });

  const removeFavorite = (gameId) => {
    if (user) {
      const favoriteId = getFavoriteId(gameId);
      if (favoriteId) {
        deleteFavoriteMutate(favoriteId);
      }
    }
  };

  const isFavorite = (gameId) => {
    if (favorites) {
      return favorites.some((fav) => fav.gameId === gameId);
    }
    return false;
  };

  const getFavoriteId = (gameId) => {
    if (favorites) {
      const favorite = favorites.find((fav) => fav.gameId === gameId);
      return favorite ? favorite.favoriteId : null;
    }
    return null;
  };

  const favoritesCtx = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    getFavoriteId,
    isPending: isAddPending || isDeletePending,
    isError: isAddError || isDeleteError,
    error: addError || deleteError,
  };

  return (
    <FavoritesContext.Provider value={favoritesCtx}>
      {children}
    </FavoritesContext.Provider>
  );
};
