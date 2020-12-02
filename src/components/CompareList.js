import Movie from "./Movie";

function CompareList({ movieIds }) {
  return (
    <div className="compare-list">
      {movieIds &&
        movieIds.map((movie) => <Movie size="small" id={movie} key={movie} />)}
    </div>
  );
}

export default CompareList;
