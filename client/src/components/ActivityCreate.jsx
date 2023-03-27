import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postActivity } from "../actions/";
import { Link } from "react-router-dom";
import styles from "/Users/pedro/Desktop/Henry/P INDIVIDUALES/PI-Countries-main/client/src/styles/components/activitycreate.module.css";
import ActivitiesGo from "./pages/ActivitiesGo";

function ActivityCreate() {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    countryName: "",
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setActivity({
      ...activity,
      [name]: value.charAt(0).toUpperCase() + value.slice(1),
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const difficulty = parseInt(activity.difficulty);
    const duration = parseInt(activity.duration);

    const newActivity = {
      ...activity,
      difficulty,
      duration,
    };

    dispatch(postActivity(newActivity));

    setActivity({
      name: "",
      difficulty: 0,
      duration: 0,
      season: "",
      countryName: "",
    });
  };

  return (
    <div className={`${styles.center}`}>
      <form className="create-activity-form" onSubmit={handleSubmit}>
        <label className="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={activity.name}
          onChange={handleChange}
        />

        <label className="difficulty">Difficulty:</label>
        <select
          className={`${styles.select}`}
          id="difficulty"
          name="difficulty"
          value={activity.difficulty}
          onChange={handleChange}
        >
          <option value="">--Select Difficulty--</option>
          <option value="1">Easy</option>
          <option value="2">Easy-Moderate</option>
          <option value="3">Moderate</option>
          <option value="4">Moderate-Difficult</option>
          <option value="5">Difficult</option>
        </select>

        <label className="duration">Duration:</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={activity.duration}
          onChange={handleChange}
        />

        <label className="season">Season:</label>
        <select
          className={`${styles.select}`}
          id="season"
          name="season"
          value={activity.season}
          onChange={handleChange}
        >
          <option value="">--Select Season--</option>
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
        </select>

        <label className="country">Country Name:</label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          value={activity.countryName}
          onChange={handleChange}
        />

        <button className={`${styles.buttonCreate}`} type="submit">
          Create Activity
        </button>
      </form>
      <br />
      <Link to="/activities">
        <ActivitiesGo />
      </Link>
      <br />
      <text>
        Note: Duration must be set in minutes required to do the activity. Have
        fun creating activities!
      </text>
    </div>
  );
}

export default ActivityCreate;
