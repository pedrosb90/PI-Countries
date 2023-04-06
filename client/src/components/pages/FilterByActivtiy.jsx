import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByActivity } from "../../actions";
import styles from "../../styles/filterbuttons/home.module.css";

function FilterByActivity() {
  const dispatch = useDispatch();

  const [activity, setActivity] = useState("");

  const handleInputChange = (e) => {
    setActivity(e.target.value);
  };

  const handleFilterCountries = () => {
    dispatch(filterCountriesByActivity(activity));
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
    </div>
  );
}

export default FilterByActivity;
