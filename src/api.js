//URLs
const base_url = "https://api.themoviedb.org/3/";
const image_base_url = "https://image.tmdb.org/t/p/";

//Exports
export const getMovieURL = (searchInput) => {
  return `${base_url}search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}${searchInput}`;
};

export const getImgURL = (imagePath, size) => {
  if (imagePath) {
    return `${image_base_url}${size}${imagePath}`;
  }
  return null;
};

export const getMovieDetailsURL = (id) => {
  return `${base_url}movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
};

export const getMovieCastURL = (id) => {
  return `${base_url}movie/${id}/credits?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
};

export const getGenresList = () => {
  return `${base_url}genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
};

export const getActorsMovies = (id) => {
  return `${base_url}person/${id}/movie_credits?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
};
