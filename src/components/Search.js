import SearchInput from "./SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="Search">
      <SearchInput />
      <FontAwesomeIcon className="search-icon 2x" icon={faSearch} size="3x" />
    </div>
  );
}

export default Search;
