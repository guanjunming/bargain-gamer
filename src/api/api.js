import { FETCH_PAGE_SIZE } from "../data/constants";

const RAWG_URL = "https://api.rawg.io/api";
const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const AIRTABLE_URL = "https://api.airtable.com/v0";
const AIRTABLE_API_TOKEN = import.meta.env.VITE_AIRTABLE_API_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const CHEAPSHARK_URL = "https://www.cheapshark.com/api/1.0";

export const getGamesList = async (params) => {
  let filteredParams = params;
  if (!("parent_platforms" in params) && !("platforms" in params)) {
    filteredParams = { ...params, platforms: "4,5,6" };
  }

  const searchParams = new URLSearchParams(filteredParams).toString();
  const response = await fetch(
    `${RAWG_URL}/games?key=${RAWG_API_KEY}&${searchParams}`
  );

  if (!response.ok) {
    throw new Error("Failed to retrieve games list.");
  }

  const result = await response.json();
  return result;
};

export const getGameById = async (id) => {
  const response = await fetch(`${RAWG_URL}/games/${id}?key=${RAWG_API_KEY}`);

  if (!response.ok) {
    throw new Error("Failed to retrieve game data.");
  }

  const result = await response.json();
  return result;
};

export const getGameScreenshots = async (id) => {
  const response = await fetch(
    `${RAWG_URL}/games/${id}/screenshots?key=${RAWG_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to retrieve screenshots");
  }

  const result = await response.json();
  return result.results;
};

export const createUser = async ({ username, password }) => {
  const response = await fetch(`${AIRTABLE_URL}/${AIRTABLE_BASE_ID}/Users`, {
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

  const result = await response.json();
  return result;
};

export const authenticateUser = async ({ username, password }) => {
  const queryParams = encodeURIComponent(
    `AND({Username}="${username}",{Password}="${password}")`
  );
  const response = await fetch(
    `${AIRTABLE_URL}/${AIRTABLE_BASE_ID}/Users?filterByFormula=${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to login user.");
  }

  const result = await response.json();

  if (result.records.length > 0) {
    return result.records[0];
  } else {
    throw new Error("Please check you username and password and try again.");
  }
};

export const getFavoriteGamesData = async ({ pageParam = 0, queryKey }) => {
  const [, favorites] = queryKey;
  const pageSize = FETCH_PAGE_SIZE;

  const currentFavs = favorites.slice(pageParam, pageParam + pageSize);

  const results = await Promise.all(
    currentFavs.map((fav) => getGameById(fav.gameId))
  );

  return {
    results: results,
    nextPage: pageParam + pageSize,
    hasNextPage: pageParam + pageSize < favorites.length,
  };
};

export const getGameFavorites = async (userId) => {
  const queryParams = encodeURIComponent(`UserId="${userId}"`);
  const response = await fetch(
    `${AIRTABLE_URL}/${AIRTABLE_BASE_ID}/Favorites/?filterByFormula=${queryParams}`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to retrieve user favorites.");
  }

  const result = await response.json();

  const resultsProcessed = result.records.map((record) => {
    return {
      favoriteId: record.id,
      gameId: record.fields.GameId,
      createdTime: record.createdTime,
    };
  });

  return resultsProcessed.sort(
    (a, b) => new Date(b.createdTime) - new Date(a.createdTime)
  );
};

export const addGameFavorite = async ({ userId, gameId }) => {
  const response = await fetch(
    `${AIRTABLE_URL}/${AIRTABLE_BASE_ID}/Favorites`,
    {
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
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add user favorite.");
  }

  const result = await response.json();
  return result;
};

export const deleteGameFavorite = async (favoriteId) => {
  const response = await fetch(
    `${AIRTABLE_URL}/${AIRTABLE_BASE_ID}/Favorites/${favoriteId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete user favorite.");
  }

  const result = await response.json();
  return result;
};

export const getGameIdByName = async (name, slug) => {
  const nameResponse = await fetch(
    `${CHEAPSHARK_URL}/games?title=${encodeURIComponent(name)}&limit=1`
  );

  if (!nameResponse.ok) {
    throw new Error("Failed to retrieve game data.");
  }

  const nameResult = await nameResponse.json();
  if (nameResult.length > 0) {
    return nameResult[0].gameID;
  }

  const slugResponse = await fetch(
    `${CHEAPSHARK_URL}/games?title=${encodeURIComponent(slug)}&limit=1`
  );

  if (!slugResponse.ok) {
    throw new Error("Failed to retrieve game data.");
  }

  const slugResult = await slugResponse.json();
  if (slugResult.length > 0) {
    return slugResult[0].gameID;
  }

  throw new Error("Failed to retrieve game data.");
};

export const getDealsByGameId = async (gameId) => {
  const response = await fetch(`${CHEAPSHARK_URL}/games?id=${gameId}`);

  if (!response.ok) {
    throw new Error("Failed to retrieve game deals.");
  }

  const result = await response.json();
  return result.deals;
};
