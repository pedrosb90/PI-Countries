import React from "react";
import CountryCard from "./CountryCard";
import styles from "../styles/components/cards.module.css";

const Cards = ({ countries }) => {
  return (
    <div className={`${styles.cardGrid}`}>
      {countries &&
        countries.map((country) => (
          <CountryCard key={country.countryId} country={country} />
        ))}
    </div>
  );
};

export default Cards;
