import { useState } from "react";
//Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

//Files & components
import { findMovie } from "../actions/searchAction";
import { useHistory } from "react-router-dom";

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchInputValue, setSearchInputValue] = useState("");
  //Handlers
  const searchHandler = async (e) => {
    e.preventDefault();
    setSearchInputValue("");
    dispatch(findMovie(searchInputValue));
    history.push(`/search&query=${searchInputValue.replace(" ", "+")}`);
  };
  const searchInputChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };
  return (
    <div className="Search">
      <form onSubmit={searchHandler}>
        <input
          className="SearchInput"
          type="text"
          placeholder="Just type movie name"
          value={searchInputValue}
          onChange={searchInputChangeHandler}
        />
        <FontAwesomeIcon
          className="search-icon 2x"
          type="submit"
          icon={faSearch}
          size="3x"
          onClick={searchHandler}
        />
      </form>
    </div>
  );
}

export default Search;
