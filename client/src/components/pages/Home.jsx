import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CountryFilter from "./CountryFilter";
import ActivitiesGo from "./ActivitiesGo";
import { filterCountries, getAllCountries } from "../../actions";
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
      <div className={`${styles.container}`}>
        <h1 className={`${styles.titleMain}`}>Henry Countries App</h1>
        <CountryFilter />

        <CountryCard />
      </div>
    </div>
  );
}

export default Home;
