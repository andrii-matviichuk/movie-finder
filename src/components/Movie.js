import { useSelector } from "react-redux";
import { getImgURL } from "../api";
import noImage from "../img/no-image.png";

function Movie({ id }) {
  let movieData = useSelector((state) => state.search.searchResults).find(
    (movie) => movie.id === id
  );
  const posterImg = movieData.poster_path
    ? getImgURL(movieData.poster_path, 200)
    : noImage;
  return (
    <div className="movie">
      <img src={posterImg} alt="" />
      <h2>
        {movieData.title} {movieData.vote_average}
      </h2>
    </div>
  );
}

export default Movie;
