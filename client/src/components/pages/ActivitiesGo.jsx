import React from "react";
import styles from "../../styles/filterbuttons/home.module.css";

function ActivitiesGo() {
  return (
    <div className={`${styles.center}`}>
      <button className={`${styles.button}`}>Go to Activities</button>
    </div>
  );
}

export default ActivitiesGo;
