//URLs
const base_url = "https://api.themoviedb.org/3/";
const image_base_url = "https://image.tmdb.org/t/p/";

//Exports
export const getMovieURL = (searchInput) => {
  return `${base_url}search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}${searchInput}`;
};

export const getImgURL = (imagePath, size) => {
  return `${image_base_url}w${size}${imagePath}`;
};
