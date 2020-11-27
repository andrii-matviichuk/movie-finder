import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getImgURL, getGenresList } from "../api";
import noImage from "../img/no-image.png";
import { getGenreNamesByIds } from "../util";

function Movie({ id }) {
  const [genresNames, setGenresNames] = useState([]);
  const history = useHistory();

  const movieData = useSelector((state) => state.search.searchResults).find(
    (movie) => movie.id === id
  );

  useEffect(() => {
    const fetchGenres = async () => {
      const genresNamesData = await axios.get(getGenresList());
      setGenresNames((oldArr) => [
        ...oldArr,
        ...getGenreNamesByIds(genresNamesData.data.genres, movieData.genre_ids),
      ]);
    };
    fetchGenres();
  }, [movieData]);

  //Get posters
  const posterImg = movieData.poster_path
    ? getImgURL(movieData.poster_path, "w200")
    : noImage;

  //Handlers
  const movieOnClickHandler = () => {
    history.push(`/movie/${id}`);
  };
  return (
    <div className="movie" onClick={movieOnClickHandler}>
      <div className="card">
        <img src={posterImg} alt="" />
        <h2>{movieData.title}</h2>
        <h3>{genresNames ? genresNames.join(",") : ""}</h3>
        <h4>
          {movieData.release_date ? movieData.release_date.split("-")[0] : ""}
        </h4>
      </div>
    </div>
  );
}

export default Movie;
