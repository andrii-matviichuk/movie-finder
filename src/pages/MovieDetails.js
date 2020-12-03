import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getMovieDetails } from "../actions/movieAction";
import { getImgURL } from "../api";
import Actor from "../components/Actor";
import noImage from "../img/no-image.png";

function MovieDetails() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getMovieDetails(location.pathname.replace("/movie/", ""))); // eslint-disable-next-line
  }, [location]);
  const movieDetails = useSelector((state) => state.movie.movieDetails);
  const movieCast = useSelector((state) => state.movie.movieCast);
  return (
    <div className="movie-details">
      <div
        className="header"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${getImgURL(
            movieDetails.backdrop_path,
            "original"
          )}") center center/cover`,
        }}
      >
        <h1>{movieDetails.title}</h1>
        {getImgURL(movieDetails.poster_path, "w1280") ? (
          <div className="poster">
            <img src={getImgURL(movieDetails.poster_path, "w200")} alt="" />
          </div>
        ) : (
          <div className="poster">
            <img src={noImage} alt="" />
          </div>
        )}
        <h3
          className={
            movieDetails.vote_average >= 7
              ? "green"
              : movieDetails.vote_average >= 5
              ? "gray"
              : "red"
          }
        >
          {movieDetails.vote_average}
        </h3>
      </div>
      <div className="description">
        <p>{movieDetails.overview}</p>
      </div>
      <div className="cast">
        {movieCast.cast
          ? movieCast.cast.map((actor) => (
              <Actor id={actor.id} key={actor.id} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default MovieDetails;
