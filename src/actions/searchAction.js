import axios from "axios";
import { getMovieURL } from "../api";

export const findMovie = (searchInputValue) => async (dispatch) => {
  const searchData = await axios.get(getMovieURL(searchInputValue));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      search: searchData.data.results,
    },
  });
};
