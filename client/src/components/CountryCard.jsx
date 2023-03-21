import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getById } from "../actions";

function CountryCard() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);
  if (!countries) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h1>idCountry: {country.countryId}</h1>
          <h1>Name: {country.name}</h1>
          <h1>Continent: {country.continent}</h1>
          <h1>Flag: {country.flag} </h1>
          <img src={country.flag} alt="imgflag"></img>
          <Link
            to={`/countries/${country.countryId}`}
            onClick={() => dispatch(getById(country.countryId))}
          >
            See Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountryCard;
