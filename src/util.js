export const getGenreNamesByIds = (genresList, ids) => {
  const genreNames = [];
  if (!genresList || !ids) return [];
  genresList.forEach((genre) => {
    if (genreNames.length === ids.length) {
      return genreNames;
    } else {
      if (ids.includes(genre.id)) {
        genreNames.push(genre.name);
      }
    }
  });
  return genreNames;
};
