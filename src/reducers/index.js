import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import searchReducer from "./searchReducer";
import compareReducer from "./compareReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  movie: movieReducer,
  compare: compareReducer,
});

export default rootReducer;
