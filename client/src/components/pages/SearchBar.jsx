import React from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../actions/index";

function SearchBar(props) {
  const { onSearchInput, onReset, searchInput } = props;

  const dispatch = useDispatch(); // add this line

  const handleInputChange = (e) => {
    onSearchInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearchInput(e.target.value);
    }
  };
  const handleFilterCountries = () => {
    dispatch(filterCountries(searchInput)); // use dispatch here
  };

  const handleResetClick = () => {
    onReset();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleResetClick}>Reset</button>
      <button onClick={handleFilterCountries}>Filter Countries</button>
    </div>
  );
}

export default SearchBar;
