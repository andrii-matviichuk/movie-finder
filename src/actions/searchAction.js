import axios from "axios";
import { findMovieURL } from "../api";

export const findMovie = (searchInputValue) => async (dispatch) => {
  const searchData = await axios.get(findMovieURL(searchInputValue));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchData.data.results,
    },
  });
};
