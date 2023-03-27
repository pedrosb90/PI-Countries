import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../actions";
import Activities from "./Activities";
import styles from "../styles/components/countrydetail.module.css";

const CountryDetail = () => {
  const { countryId } = useParams();

  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        await dispatch(getById(countryId));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountry();
  }, [dispatch, countryId]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${styles.card}`}>
      <h1 className={`${styles.title}`}>Detail</h1>
      <h2 className={`${styles.content}`}>{country.name}</h2>
      <p className={`${styles.content}`}>ID: {country.countryId}</p>
      <img
        className={`${styles.contenedorflag}`}
        src={country.flag}
        alt="Country Flag"
      />
      <p className={`${styles.content}`}>Continent: {country.continent}</p>
      <p className={`${styles.content}`}>Capital: {country.capital}</p>
      <p className={`${styles.content}`}>Subregion: {country.subregion}</p>
      <p className={`${styles.content}`}>Area: {country.area}</p>
      <p className={`${styles.content}`}>Population: {country.population}</p>

      {country.activities && country.activities.length > 0 && (
        <div>
          {country.activities.map((a) => (
            <Activities key={a.name} a={a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
