import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../actions";
import { Link } from "react-router-dom";
import styles from "../../styles/components/countrydetail.module.css";

const FilteredCards = () => {
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const dispatch = useDispatch();

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>Found Countries</h1>
      <br />
      {filteredCountries.map((country) => (
        <div className={`${styles.card}`} key={country.countryId}>
          <h2 className={`${styles.content}`}>Name: {country.name}</h2>
          <h2 className={`${styles.content}`}>
            Continent: {country.continent}
          </h2>
          <img
            className={`${styles.contenedorflag}`}
            src={country.flag}
            alt="imgflag"
          ></img>
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
