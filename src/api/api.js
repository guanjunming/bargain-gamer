const RAWG_URL = "https://api.rawg.io/api";
const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const AIRTABLE_URL = "https://api.airtable.com/v0";
const AIRTABLE_API_TOKEN = import.meta.env.VITE_AIRTABLE_API_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

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
    console.log("has error");
    throw new Error(response.statusText);
  }

  const result = await response.json();
  return result;
};

export const getGameById = async (id) => {
  const response = await fetch(`${RAWG_URL}/games/${id}?key=${RAWG_API_KEY}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const result = await response.json();
  return result;
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

  return resultsProcessed;
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

  const result = await response.json();
  return result;
};
