import { getActorsMovies, getMovieCastURL, getMovieDetailsURL } from "../api";
import axios from "axios";

export const updateCompareData = (movieIds) => async (dispatch) => {
  let bestCastMovieId = -1;
  let bestCastRating = 0;
  let theMostPopularMovieId = -1;
  let theMostPopularMoviePopularity = 0;
  let bestVoteAvgMovieId = -1;
  let bestVoteAvg = 0;
  for (const movieId of movieIds) {
    const movieDetails = (await axios.get(getMovieDetailsURL(movieId))).data;
    //The best avg vote movie
    if (movieDetails.vote_average > bestVoteAvg) {
      bestVoteAvgMovieId = movieId;
      bestVoteAvg = movieDetails.vote_average;
    }
    //The most popular movie
    if (movieDetails.popularity > theMostPopularMoviePopularity) {
      theMostPopularMovieId = movieId;
      theMostPopularMoviePopularity = movieDetails.popularity;
    }
    //Best Cast
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

  const moviePoints = {};
  moviePoints[bestVoteAvgMovieId] = 10;
  moviePoints[bestCastMovieId] = 7;
  moviePoints[theMostPopularMovieId] = 5;

  const max = Object.keys(moviePoints).reduce(
    (a, v) => Math.max(a, moviePoints[v]),
    -Infinity
  );
  const bestMovieId = parseInt(
    Object.keys(moviePoints).find((v) => moviePoints[v] === max)
  );
  dispatch({
    type: "UPDATE_DATA",
    payload: {
      movieIds: movieIds,
      bestMovie: bestMovieId,
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
