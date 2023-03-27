import React from "react";
import styles from "../../styles/filterbuttons/home.module.css";

function HomeButton(props) {
  return (
    <div className={`${styles.center}`}>
      {" "}
      <button className={`${styles.buttonHome} ${props.className}`}>
        {props.children}
      </button>
    </div>
  );
}

export default HomeButton;
