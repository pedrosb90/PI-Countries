import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "../CountryCard";

const FilteredCards = () => {
  const filteredCountries = useSelector((state) => state.filteredCountries);

  return (
    <div>
      <h1>Found Countries</h1>
      {filteredCountries.map((country) => (
        <div key={country.countryId}>
          <h2>Name: {country.name}</h2>
          <h2>Continent: {country.continent}</h2>
          <img src={country.flag} alt="imgflag"></img>
        </div>
      ))}
    </div>
  );
};

export default FilteredCards;
