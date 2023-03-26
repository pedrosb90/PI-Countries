import React from "react";

function SearchBar(props) {
  const handleInputChange = (event) => {
    props.onSearchInput(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearch();
    console.log();
  };

  const resetSearch = () => {
    props.onReset();
  };

  return (
    <form onSubmit={handleSearch}>
      <label>Find Countries: </label>
      <input
        type="text"
        name="find"
        placeholder="Type country.."
        value={props.searchInput}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
      <button type="button" onClick={resetSearch}>
        Reset
      </button>
    </form>
  );
}

export default SearchBar;
