import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCountries,
  sortCountriesAZ,
  sortCountriesByPopulation,
} from "../../actions/index";
import FilterByActivity from "./FilterByActivtiy";
import FilterByContinent from "./FilterByContinent";

import styles from "../../styles/filterbuttons/home.module.css";

function SearchBar(props) {
  const { onSearchInput, onReset, searchInput } = props;

  const dispatch = useDispatch();

  const sortOrder = useSelector((state) => state.sortOrder);

  const handleInputChange = (e) => {
    onSearchInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearchInput(e.target.value);
    }
  };

  const handleFilterCountries = () => {
    dispatch(filterCountries(searchInput));
  };

  const handleResetClick = () => {
    onReset();
  };

  const handleSortClick = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    dispatch(sortCountriesAZ(newOrder));
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
      <button className={`${styles.buttonReset}`} onClick={handleResetClick}>
        Reset
      </button>
      <button className={`${styles.button}`} onClick={handleFilterCountries}>
        Find
      </button>
      <button className={`${styles.button}`} onClick={handleSortClick}>
        {`Sort Alphabetically ${sortOrder === "asc" ? "A-Z" : "Z-A"}`}
      </button>
      <button
        className={`${styles.button}`}
        onClick={() => dispatch(sortCountriesByPopulation("asc"))}
      >
        {`Sort by Population ${
          sortOrder === "asc" ? "(low to high)" : "(high to low)"
        }`}
      </button>
      <div>
        <FilterByContinent />
      </div>
      <div>
        <FilterByActivity />
      </div>
    </div>
  );
}

export default SearchBar;
