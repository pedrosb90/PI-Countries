import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "../CountryCard";
import { getById } from "../../actions";
import { Link } from "react-router-dom";
import styles from "../../styles/components/countrydetail.module.css";

const FilteredCards = () => {
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Found Countries</h1>
      {filteredCountries.map((country) => (
        <div key={country.countryId}>
          <h2>Name: {country.name}</h2>
          <h2>Continent: {country.continent}</h2>
          <img src={country.flag} alt="imgflag"></img>
          <Link
            className={`${styles.button}`}
            to={`/countries/${country.countryId}`}
            onClick={() => dispatch(getById(country.countryId))}
          >
            See Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FilteredCards;
