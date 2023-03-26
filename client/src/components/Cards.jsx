import React from "react";
import CountryCard from "./CountryCard";
import styles from "../styles/components/cards.module.css";

const Cards = ({ countries }) => {
  return (
    <div className={`${styles.cards}`}>
      <div>
        {countries &&
          countries.map((country) => (
            <CountryCard key={country.countryId} country={country} />
          ))}
      </div>
    </div>
  );
};

export default Cards;
