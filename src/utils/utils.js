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
