export const modifyImageUrl = (imageUrl, size) => {
  if (!imageUrl) {
    return null;
  }

  const urlSplit = imageUrl.split("/");
  const index = urlSplit.findIndex(
    (segment) => segment === "games" || segment === "screenshots"
  );

  if (index !== -1) {
    urlSplit.splice(
      index,
      0,
      size === "small" ? "resize/420/-" : "crop/600/400"
    );
    return urlSplit.join("/");
  }

  return imageUrl;
};

export const getFeaturedDates = () => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setMonth(today.getMonth() - 3);

  const startDate = pastDate.toISOString().split("T")[0];
  const endDate = today.toISOString().split("T")[0];

  return startDate + "," + endDate;
};

export const getPopularDates = () => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setFullYear(today.getFullYear() - 2);

  const startDate = pastDate.toISOString().split("T")[0];
  const endDate = today.toISOString().split("T")[0];

  return startDate + "," + endDate;
};

export const getNewReleaseDates = () => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setMonth(today.getMonth() - 1);

  const startDate = pastDate.toISOString().split("T")[0];
  const endDate = today.toISOString().split("T")[0];

  return startDate + "," + endDate;
};

export const getUpcomingDates = () => {
  const today = new Date();
  const upcomingDate = new Date(today);
  upcomingDate.setMonth(today.getMonth() + 1);

  const startDate = today.toISOString().split("T")[0];
  const endDate = upcomingDate.toISOString().split("T")[0];

  return startDate + "," + endDate;
};

export const isObjectNullOrEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0;
};
