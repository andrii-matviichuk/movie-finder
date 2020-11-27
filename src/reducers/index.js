import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  movie: movieReducer,
});

export default rootReducer;
