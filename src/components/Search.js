import { useState } from "react";
//Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//Files & components
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  //Handlers
  const searchHandler = async (e) => {
    e.preventDefault();
    setSearchInputValue("");
    history.push(`/&query=${searchInputValue.replace(" ", "+")}`);
  };
  const searchInputChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };
  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  return (
    <form onSubmit={searchHandler} className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Movie name..."
        value={searchInputValue}
        onChange={searchInputChangeHandler}
      />
      <FontAwesomeIcon
        className="search-icon 2x"
        type="submit"
        icon={faSearch}
        size={windowWidth < 768 ? "2x" : "3x"}
        onClick={searchHandler}
      />
    </form>
  );
}

export default Search;
