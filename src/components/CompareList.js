import { useSelector } from "react-redux";
import Movie from "./Movie";

function CompareList() {
  const compareMovieIds = useSelector((state) => state.compare.movieIds);
  return (
    <div>
      {compareMovieIds &&
        compareMovieIds.map((movie) => (
          <Movie size="small" id={movie} key={movie} />
        ))}
    </div>
  );
}

export default CompareList;
