import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getImgURL, getGenresList } from "../api";
import { getGenreNamesByIds } from "../util";
import { updateDrag } from "../actions/compareAction";
import { updateCompareData } from "../actions/compareAction";
import noImage from "../img/no-image.png";

function Movie({ id, size }) {
  const dispatch = useDispatch();
  const [genresNames, setGenresNames] = useState([]);
  const history = useHistory();

  const movieIds = useSelector((state) => state.compare.movieIds);
  const movieData = useSelector((state) => state.search.searchResults).find(
    (movie) => movie.id === id
  );
  const compareMovieData = useSelector(
    (state) => state.search.searchHistory
  ).find((movie) => movie.id === id);

  useEffect(() => {
    const fetchGenres = async () => {
      let mounted = true;
      if (mounted) {
        const genresNamesData = await axios.get(getGenresList());
        if (movieData) {
          setGenresNames((oldArr) => [
            ...getGenreNamesByIds(
              genresNamesData.data.genres,
              movieData.genre_ids
            ),
          ]);
        }
      }
      return () => (mounted = false); //eslint-disable-next-line
    };
    fetchGenres();
  }, [movieData]);

  //Handlers
  const movieOnClickHandler = (e) => {
    if (!(e.target.classList[0] === "btn")) history.push(`/movie/${id}`);
  };

  const onDragStartHandler = () => {
    dispatch(updateDrag(id));
  };

  const removeCompareMovieHanler = () => {
    if (movieIds.includes(id)) {
      movieIds.splice(movieIds.indexOf(id), 1);
    }
    dispatch(updateCompareData(movieIds));
    dispatch(updateDrag(null));
    dispatch(updateDrag(id));
  };

  if (size === "small") {
    console.log();
    return (
      <div className="movie small" onClick={movieOnClickHandler}>
        {compareMovieData && (
          <div className="movie-info">
            <h2>
              {compareMovieData.title}
              <span className="gray-text small-text">
                {compareMovieData.release_date
                  ? ` (${compareMovieData.release_date.split("-")[0]})`
                  : ""}
              </span>
            </h2>
            <h3>{genresNames ? genresNames.join(",") : ""}</h3>
          </div>
        )}
        <button className="btn red" onClick={removeCompareMovieHanler}>
          Remove
        </button>
      </div>
    );
  } else {
    return (
      <div
        className="movie"
        onDragStart={onDragStartHandler}
        onClick={movieOnClickHandler}
        draggable
      >
        {getImgURL(movieData.poster_path, "w200") ? (
          <div className="poster">
            <img src={getImgURL(movieData.poster_path, "w200")} alt="" />
          </div>
        ) : (
          <div className="poster">
            <img src={noImage} alt="" />
          </div>
        )}
        <div className="movie-info">
          <h2>
            {movieData.title}
            <span className="gray-text small-text">
              {movieData.release_date
                ? ` (${movieData.release_date.split("-")[0]})`
                : ""}
            </span>
          </h2>
          <h3>{genresNames ? genresNames.join(",") : ""}</h3>
        </div>
      </div>
    );
  }
}

export default Movie;
