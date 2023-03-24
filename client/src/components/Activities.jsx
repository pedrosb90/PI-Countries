import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, resetActivities } from "../actions";

function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());

    return () => {
      dispatch(resetActivities());
    };
  }, [dispatch]);
  console.log(activities);

  return (
    <div>
      <h2>Activities</h2>
      {activities.map((activity) => (
        <div key={activity.id}>
          <h3>{activity.name}</h3>
          <p>Difficulty: {activity.difficulty}</p>
          <p>Duration: {activity.duration} min</p>
          <p>Season: {activity.season}</p>
          <p>Country: {activity.countryName}</p>
        </div>
      ))}
    </div>
  );
}

export default Activities;
