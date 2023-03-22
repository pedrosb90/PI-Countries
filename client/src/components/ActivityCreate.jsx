import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postActivity } from "../actions/index";

function ActivityCreate() {
  const [activity, setActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivity(activity));
    setActivity({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: "",
    });
  };

  return (
    <div>
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

        <label className="countries">Select/Add Countries:</label>
        <input
          type="text"
          id="countries"
          name="countries"
          value={activity.countries}
          onChange={handleChange}
        />

        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
}

export default ActivityCreate;
