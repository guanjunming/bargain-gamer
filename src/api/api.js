const URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const AIRTABLE_URL = "https://api.airtable.com/v0/appwHzAhArvZ2bkjm";

const FAVORITES_API_URL = `${AIRTABLE_URL}/Favorites`;
const AIRTABLE_API_TOKEN =
  "patA1Ja9CdQYM11YP.0ddacd2068a75d1891f6a6224cf8ef6200dad334767964094c81216e48cf31de";

export const getGamesList = async (params) => {
  let filteredParams = params;
  if (!("parent_platforms" in params) && !("platforms" in params)) {
    filteredParams = { ...params, platforms: "4,5,6" };
  }

  const searchParams = new URLSearchParams(filteredParams).toString();
  const response = await fetch(`${URL}/games?key=${API_KEY}&${searchParams}`);

  if (!response.ok) {
    console.log("has error");
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const getGameById = async (id) => {
  const response = await fetch(`${URL}/games/${id}?key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const getFavorites = async (userId) => {
  const response = await fetch(
    `${FAVORITES_API_URL}?filterByFormula=UserId="${userId}"`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data.records.map((record) => record.fields);
};

export const createUser = async ({ username, password }) => {
  const response = await fetch(`${AIRTABLE_URL}/Users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        Username: username,
        Password: password,
      },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create user.");
  }

  const data = await response.json();
  return data;
};

export const addFavorite = async (userId, gameId) => {
  const response = await fetch(FAVORITES_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: {
        UserId: userId,
        GameId: gameId,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const removeFavorite = async (favoriteId) => {
  const response = await fetch(`${FAVORITES_API_URL}/${favoriteId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
    },
  });

  return response.json();
};
