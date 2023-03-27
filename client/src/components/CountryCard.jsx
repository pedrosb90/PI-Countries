import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getById } from "../actions";
import styles from "../styles/components/countrycard.module.css";

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
        <div className={`${styles.card}`} key={index}>
          <h1 className={`${styles.title}`}>{country.name}</h1>

          <h1 className={`${styles.content}`}>Id: {country.countryId}</h1>
          <h1 className={`${styles.content}`}>
            Continent: {country.continent}
          </h1>
          {/* <h1>Flag: {country.flag} </h1> */}
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
}

export default CountryCard;
