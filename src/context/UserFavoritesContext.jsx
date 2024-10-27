import { createContext, useContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getFavorites } from "../api/api";
import { useUserContext } from "./contextHooks";

export const FavoritesContext = createContext();

export const UserFavoritesProvider = ({ children }) => {
  const { user } = useUserContext();
  const [favorites, setFavorites] = useState([]);

  // const { data: favorites, refetch } = useQuery({
  //   queryKey: ["favorites", userId],
  //   queryFn: () => getFavorites(userId),
  //   enabled: !!userId,
  // });

  // const mutationAddFavorite = useMutation(addFavorite, {
  //   onSuccess: () => {
  //     refetch(); // Refetch favorites after adding
  //   },
  // });

  // const mutationRemoveFavorite = useMutation(removeFavorite, {
  //   onSuccess: () => {
  //     refetch(); // Refetch favorites after removal
  //   },
  // });

  // const addFavorite = (game) => {
  //   mutationAddFavorite.mutate({ game, userId });
  // };

  // const removeFavorite = (favoriteId) => {
  //   mutationRemoveFavorite.mutate(favoriteId);
  // };

  const userFavoritesCtx = {
    favorites,
    // addFavorite,
    // removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={userFavoritesCtx}>
      {children}
    </FavoritesContext.Provider>
  );
};
