import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getActivities, resetActivities } from "../actions";
import styles from "/Users/pedro/Desktop/Henry/P INDIVIDUALES/PI-Countries-main/client/src/styles/components/activities.module.css";

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
    <div className={`${styles.center}`}>
      <h2 className={`${styles.title} ${styles.center}`}>Activities</h2>
      <Link to="/createactivity">
        <button className={`${styles.button} `}>Create Activity</button>
      </Link>
      <br />
      {activities.map((activity) => (
        <div className={`${styles.card}`} key={activity.id}>
          <h3 className={`${styles.title}`}>{activity.name}</h3>
          <p className={`${styles.content}`}>
            Difficulty: {activity.difficulty}
          </p>
          <p className={`${styles.content}`}>
            Duration: {activity.duration} min
          </p>
          <p className={`${styles.content}`}>Season: {activity.season}</p>
          <p className={`${styles.content}`}>Country: {activity.countryName}</p>
        </div>
      ))}
    </div>
  );
}

export default Activities;
