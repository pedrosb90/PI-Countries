import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import CountryFilter from "./CountryFilter";
import { filterCountries, getAllCountries } from "../../actions";
import FilteredCards from "../../components/pages/FilteredCards";
import CountryCard from "../CountryCard";
import styles from "../../styles/filterbuttons/home.module.css";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState([]);
  const dispatch = useDispatch();

  const filteredCountries = useSelector((state) => state.filteredCountries);
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    if (searchInput !== "") {
      dispatch(filterCountries(searchInput));
    }
  }, [searchInput, dispatch]);

  useEffect(() => {
    setFilter(filteredCountries);
  }, [filteredCountries]);

  return (
    <div className={`${styles.center}`}>
      <h1 className={`${styles.titleMain}`}>HENY COUNTRIES</h1>
      <CountryFilter />

      <br />
      <label>Sort by Continent: </label>
      <input type="text" name="filter" placeholder="Continent Name.." />

      <button className={`${styles.button}`} type="text" name="orderAtoZ">
        {" "}
        Order Countries Alphabetically{" "}
      </button>
      <button className={styles.button} type="text" name="activity">
        {" "}
        Filter By Tourism Activity{" "}
      </button>
      {filter.length > 0 ? (
        <FilteredCards />
      ) : (
        <>
          <h3 className={styles.title}> Country List </h3>
          <CountryCard />
        </>
      )}
    </div>
  );
}

export default Home;
