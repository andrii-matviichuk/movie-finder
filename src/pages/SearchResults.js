import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

//Files & components
import { findMovie } from "../actions/searchAction";
import Search from "../components/Search";
import Movie from "../components/Movie";
import CompareContainer from "../components/CompareContainer";

function SearchResults() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(findMovie(location.pathname.substring(1)));
    }
    return () => (mounted = false); //eslint-disable-next-line
  }, [location]);

  const searchResults = useSelector((state) => state.search.searchResults);

  return (
    <div className="search-results-container">
      <Search />
      <div className="movie-list">
        {searchResults &&
          searchResults
            .sort((a, b) => {
              return b.popularity - a.popularity;
            })
            .map((movie) => <Movie key={movie.id} id={movie.id} />)}
      </div>
      <div className="compare-div">
        <h4>Compare Movies</h4>
        <CompareContainer />
      </div>
    </div>
  );
}

export default SearchResults;
