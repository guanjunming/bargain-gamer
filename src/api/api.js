const URL = "https://api.rawg.io/api/";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const getGamesList = async (params) => {
  let filteredParams = params;
  if (!("parent_platforms" in params) && !("platforms" in params)) {
    filteredParams = { ...params, platforms: "4,5,6" };
  }

  const searchParams = new URLSearchParams(filteredParams).toString();
  const response = await fetch(`${URL}games?key=${API_KEY}&${searchParams}`);

  if (!response.ok) {
    console.log("has error");
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const getGameById = async (id) => {
  const response = await fetch(`${URL}games/${id}?key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};
