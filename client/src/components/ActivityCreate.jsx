import React from "react";

function ActivityCreate() {
  return (
    <div>
      <form className="create-activity-form">
        <label className="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label className="difficulty">Difficulty:</label>
        <select id="difficulty" name="difficulty">
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>

        <label className="duration">Duration:</label>
        <input type="number" id="duration" name="duration" />

        <label className="season">Season:</label>
        <select id="season" name="season">
          <option value="summer">Summer</option>
          <option value="fall">Fall</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
        </select>

        <label className="countries">Select/Add Countries:</label>
        <input type="text" id="countries" name="countries" />

        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
}

export default ActivityCreate;
