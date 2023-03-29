import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortCountriesByContinent } from "../../actions";
import styles from "../../styles/filterbuttons/home.module.css";

function SortByContinent() {
  const dispatch = useDispatch();

  const [continent, setContinent] = useState("");

  const handleSelectChange = (e) => {
    setContinent(e.target.value);
  };

  const handleFilterCountries = () => {
    dispatch(sortCountriesByContinent(continent));
  };

  return (
    <div>
      <select
        value={continent}
        onChange={handleSelectChange}
        className={`${styles.select}`}
      >
        <option value="">--Select a continent--</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <button className={`${styles.button}`} onClick={handleFilterCountries}>
        Filter by Continent
      </button>
    </div>
  );
}

export default SortByContinent;
