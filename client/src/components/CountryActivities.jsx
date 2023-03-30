import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryActivities } from "../actions/index";

function CountryActivities({ countryId }) {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.countryActivities);
  console.log(activities);
  useEffect(() => {
    dispatch(getCountryActivities(countryId));
  }, [dispatch, countryId]);
  console.log(activities);
  if (!activities.length) {
    return null;
  }

  return (
    <div>
      <h3>Associated Activities</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <div>
              <h4>{activity.name}</h4>
              <p>{activity.description}</p>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration} hours</p>
              <p>Season: {activity.season}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryActivities;
