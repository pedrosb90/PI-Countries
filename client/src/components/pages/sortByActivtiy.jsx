import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

export default SortByActivity;
