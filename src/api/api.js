const URL = "https://api.rawg.io/api/";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const searchGames = async (params) => {
  const searchParams = new URLSearchParams(params).toString();
  const response = await fetch(`${URL}games?key=${API_KEY}&${searchParams}`);

  if (!response.ok) {
    console.log("has error");
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getGameById = async (id) => {
  const response = await fetch(`${URL}games/${id}?key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
