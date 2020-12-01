export const updateCompareData = (movieIds) => async (dispatch) => {
  const bestMovie = {
    id: 23,
    title: "Inception",
    overallScore: 100,
  };
  const theMostPopularMovie = {
    id: 23,
    title: "Inception",
    overallScore: 100,
  };
  const bestCast = {
    id: 23,
    title: "Inception",
    overallScore: 100,
  };
  dispatch({
    type: "UPDATE_DATA",
    payload: {
      movieIds: movieIds,
      bestMovie: bestMovie,
      theMostPopularMovie: theMostPopularMovie,
      bestCast: bestCast,
    },
  });
};

export const updateDrag = (movieId) => async (dispatch) => {
  dispatch({
    type: "UPDATE_DRAG",
    payload: {
      currentMovieDragId: movieId,
    },
  });
};
