const initState = {
  movieIds: [],
  bestMovie: {},
  theMostPopularMovie: {},
  bestCast: {},
  currentMovieDragId: null,
};

const compareReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        movieIds: action.payload.movieIds,
        bestMovie: action.payload.bestMovie,
        theMostPopularMovie: action.payload.theMostPopularMovie,
        bestCast: action.payload.bestCast,
      };
    case "UPDATE_DRAG":
      return {
        ...state,
        currentMovieDragId: action.payload.currentMovieDragId,
      };
    default:
      return { ...state };
  }
};

export default compareReducer;
