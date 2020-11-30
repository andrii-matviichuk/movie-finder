import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getImgURL, getGenresList } from "../api";
import { getGenreNamesByIds } from "../util";

function Movie({ id, size }) {
  const [genresNames, setGenresNames] = useState([]);
  const history = useHistory();

  const movieData = useSelector((state) => state.search.searchResults).find(
    (movie) => movie.id === id
  );

  useEffect(() => {
    const fetchGenres = async () => {
      const genresNamesData = await axios.get(getGenresList());
      if (movieData) {
        setGenresNames((oldArr) => [
          ...getGenreNamesByIds(
            genresNamesData.data.genres,
            movieData.genre_ids
          ),
        ]);
      }
    };
    fetchGenres();
  }, [movieData]);

  //Handlers
  const movieOnClickHandler = () => {
    history.push(`/movie/${id}`);
  };
  if (size === "small") {
    return (
      <div className="movie" onClick={movieOnClickHandler} draggable>
        {movieData && (
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
        )}
      </div>
    );
  } else {
    return (
      <div className="movie" onClick={movieOnClickHandler} draggable>
        {getImgURL(movieData.poster_path, "w200") ? (
          <div className="poster">
            <img src={getImgURL(movieData.poster_path, "w200")} alt="" />
          </div>
        ) : (
          ""
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
