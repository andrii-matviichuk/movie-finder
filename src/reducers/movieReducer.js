const initState = {
  movieDetails: [],
};

const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movieDetails: action.payload.movieDetails,
        movieCast: action.payload.movieCast,
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
