const initState = {
  searchResults: [],
  searchHistory: [],
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return {
        ...state,
        searchResults: action.payload.search,
        searchHistory: [...state.searchHistory, ...action.payload.search],
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
