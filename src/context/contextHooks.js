import { useContext } from "react";
import { UserContext } from "./UserContext";
import { FavoritesContext } from "./UserFavoritesContext";

export function useUserContext() {
  return useContext(UserContext);
}

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}
