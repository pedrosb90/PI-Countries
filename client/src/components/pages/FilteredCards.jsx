import React from "react";
import CountryCard from "../CountryCard";

function FilteredCards(props) {
  console.log(props); // Add this line
  const { filteredCountries } = props;

  if (filteredCountries.length === 0) {
    return <div>No countries found.</div>;
  }

  return (
    <div>
      <h1>Toy adentro?</h1>
      <div>
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}

export default FilteredCards;
