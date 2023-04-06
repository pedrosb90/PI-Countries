import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/filterbuttons/home.module.css";
import { filterCountriesByContinent } from "../../actions";

function FilterByContinent() {
  const dispatch = useDispatch();

  const [continent, setContinent] = useState("");

  const handleSelectChange = (e) => {
    setContinent(e.target.value);
  };

  const handleFilterCountries = () => {
    dispatch(filterCountriesByContinent(continent));
  };

  return (
    <div>
      <select
        value={continent}
        onChange={handleSelectChange}
        className={`${styles.select}`}
      >
        <option value="">--Select a continent--</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <button className={`${styles.button}`} onClick={handleFilterCountries}>
        Filter by Continent
      </button>
    </div>
  );
}

export default FilterByContinent;
