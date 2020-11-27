import axios from "axios";
import { getMovieDetailsURL, getMovieCastURL } from "../api";

export const getMovieDetails = (id) => async (dispatch) => {
  const movieDetailsData = await axios.get(getMovieDetailsURL(id));
  const movieCastData = await axios.get(getMovieCastURL(id));
  dispatch({
    type: "FETCH_MOVIE",
    payload: {
      movieDetails: movieDetailsData.data,
      movieCast: movieCastData.data,
    },
  });
};
