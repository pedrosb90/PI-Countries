import React from "react";
import CountryCard from "./CountryCard";

const Cards = ({ countries }) => {
  return (
    <div>
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
