import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, getById } from "../actions";
import styles from "../styles/components/countrycard.module.css";

function CountryCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries(currentPage));
  }, [currentPage, dispatch]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  if (!countries) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {countries.map((country, index) => (
        <div className={styles.card} key={index}>
          <h1 className={styles.title}>{country.name}</h1>
          <h1 className={styles.content}>Id: {country.countryId}</h1>
          <h1 className={styles.content}>Continent: {country.continent}</h1>
          <img
            className={styles.contenedorflag}
            src={country.flag}
            alt="imgflag"
          ></img>
          <Link
            className={styles.button}
            to={`/countries/${country.countryId}`}
            onClick={() => dispatch(getById(country.countryId))}
          >
            See Details
          </Link>
        </div>
      ))}
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={handleNextPage} disabled={countries.length < 10}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CountryCard;
