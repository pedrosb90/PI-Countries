import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { getByName, getById } from "../../actions";
import styles from "../../styles/components/filteredCountry.module.css";
import { Link } from "react-router-dom";

function CountryFilter() {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);

  const handleSearchInput = (input) => {
    setSearchInput(input);

    dispatch(getByName(input));
  };

  const handleReset = () => {
    setSearchInput("");
  };

  return (
    <div>
      <SearchBar
        onSearchInput={handleSearchInput}
        onReset={handleReset}
        searchInput={searchInput}
      />

      {filteredCountries.map((country) => (
        <div key={country.countryId} className={`${styles.card}`}>
          <h2 className={`${styles.content}`}>{country.name}</h2>
          <img
            className={`${styles.contenedorflag}`}
            src={country.flag}
            alt={`${country.name} flag`}
          />
          <p className={`${styles.content}`}>Capital: {country.capital}</p>
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

export default CountryFilter;
