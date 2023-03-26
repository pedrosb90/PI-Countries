import React, { useState, useEffect } from "react";
import Cards from "../Cards";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries, filterCountries } from "../../actions";
import CountryFilter from "./CountryFilter";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    // Update the filtered countries whenever the search input changes
    dispatch(filterCountries(searchInput));
  }, [searchInput, dispatch]);

  return (
    <div>
      <h1>Henry Countries</h1>
      <CountryFilter />
      <br />
      <label>Sort by Continent: </label>
      <input type="text" name="filter" placeholder="Continent Name.." />

      <button type="text" name="orderAtoZ">
        {" "}
        Order Alphabetically{" "}
      </button>
      <button type="text" name="activity">
        {" "}
        Filter By Tourism Activity{" "}
      </button>
      <h3> Countries </h3>
      <Cards
        countries={filteredCountries.length > 0 ? filteredCountries : countries}
      />
    </div>
  );
}

export default Home;
