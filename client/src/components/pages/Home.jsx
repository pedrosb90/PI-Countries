import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CountryFilter from "./CountryFilter";
import ActivitiesGo from "./ActivitiesGo";
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
      <Link to="/activities">
        <ActivitiesGo>Go to Activities</ActivitiesGo>
      </Link>
      <h1 className={`${styles.titleMain}`}>Henry Countries App</h1>
      <CountryFilter />

      <br />
      <div>
        {" "}
        <input type="text" name="filter" placeholder="Continent Name.." />
        <button className={`${styles.button}`}>Filter by Continent</button>
      </div>
      <div>
        {" "}
        <input type="text" name="filter" placeholder="Activity Name.." />
        <button className={`${styles.button}`}>Filter by Activity</button>
      </div>

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
