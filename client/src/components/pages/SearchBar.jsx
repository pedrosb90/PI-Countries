import React from "react";
import { useDispatch } from "react-redux";
import { filterCountries } from "../../actions/index";
import styles from "../../styles/filterbuttons/home.module.css";

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
    dispatch(filterCountries(searchInput));
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
      <button className={`${styles.buttonReset}`} onClick={handleResetClick}>
        Reset
      </button>
      <button className={`${styles.button}`} onClick={handleFilterCountries}>
        Find
      </button>
      <button className={`${styles.button}`} type="text" name="orderAtoZ">
        {" "}
        Sort Alphabetically{" "}
      </button>
      <button className={`${styles.button}`} type="text" name="population">
        {" "}
        Sort by Population{" "}
      </button>
    </div>
  );
}

export default SearchBar;
