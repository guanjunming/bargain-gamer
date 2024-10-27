import { createContext, useContext, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getFavorites } from "../api/api";

const UserFavoritesContext = createContext();

export const useUserFavorites = () => {
  return useContext(UserFavoritesContext);
};

export const UserFavoritesProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
    user,
    setUser,
    // favorites,
    // addFavorite,
    // removeFavorite,
  };

  return (
    <UserFavoritesContext.Provider value={userFavoritesCtx}>
      {children}
    </UserFavoritesContext.Provider>
  );
};
