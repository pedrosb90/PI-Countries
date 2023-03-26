import React from "react";
import CountryCard from "../../components/CountryCard";

function FilteredCards({ countries }) {
  return (
    <div>
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard
            key={country.alpha3Code}
            name={country.name}
            flag={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : (
        <p>No countries found</p>
      )}
    </div>
  );
}

export default FilteredCards;
