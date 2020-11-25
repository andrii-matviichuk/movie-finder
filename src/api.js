//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

//URLs
const base_url = "https://api.themoviedb.org/3/";
const image_base_url = "https://image.tmdb.org/t/p/";

//Exports
export const findMovieURL = (searchInput) => {
  return `${base_url}search/movie?api_key=${
    process.env.REACT_APP_MOVIEDB_API_KEY
  }&query=${searchInput.replace(" ", "+")}`;
};

export const getImgURL = (imagePath, size) => {
  return `${image_base_url}w${size}${imagePath}`;
};
