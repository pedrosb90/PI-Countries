import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortCountriesByActivity } from "../../actions";
import styles from "../../styles/filterbuttons/home.module.css";

function SortByActivity() {
  const dispatch = useDispatch();

  const [activity, setActivity] = useState("");

  const handleInputChange = (e) => {
    setActivity(e.target.value);
  };

  const handleFilterCountries = () => {
    dispatch(sortCountriesByActivity(activity));
  };

  const filteredCountries = useSelector((state) => state.filteredCountries);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an activity..."
        value={activity}
        onChange={handleInputChange}
      />
      <button className={`${styles.button}`} onClick={handleFilterCountries}>
        Filter by Activity
      </button>
      {filteredCountries && filteredCountries.length > 0 && (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortByActivity;
