import { getActorsMovies, getMovieCastURL } from "../api";
import axios from "axios";

export const updateCompareData = (movieIds) => async (dispatch) => {
  let bestCastMovieId = -1;
  let bestCastRating = 0;
  for (const movieId of movieIds) {
    const movieCast = (await axios.get(getMovieCastURL(movieId))).data.cast;
    let actorCount = 0;
    let actorsAvgMovieRatingsSum = 0;
    for (const actor of movieCast) {
      if (actorCount > 12) break;
      const actorMovies = (await axios.get(getActorsMovies(actor.id))).data
        .cast;
      let voteSum = 0;
      let movieAmount = 0;
      actorMovies.forEach((movie) => {
        if (movie.vote_average !== 0) {
          voteSum += movie.vote_average;
          movieAmount++;
        }
      });
      actorsAvgMovieRatingsSum += voteSum / movieAmount;
      actorCount++;
    }
    if (actorsAvgMovieRatingsSum / actorCount > bestCastRating) {
      bestCastRating = actorsAvgMovieRatingsSum / actorCount;
      bestCastMovieId = movieId;
    }
  }
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

  dispatch({
    type: "UPDATE_DATA",
    payload: {
      movieIds: movieIds,
      bestMovie: bestMovie,
      theMostPopularMovie: theMostPopularMovie,
      bestCast: bestCastMovieId,
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
