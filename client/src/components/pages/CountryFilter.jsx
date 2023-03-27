import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { getAllCountries } from "../../actions";

function CountryFilter() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector((state) => {
    return state.countries;
  });
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  useEffect(() => {
    const filtered = countries.filter(
      (country) =>
        country.name &&
        country.name.common &&
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [countries, searchInput]);

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const handleReset = () => {
    setSearchInput("");
    setFilteredCountries([]);
  };

  return (
    <div>
      <SearchBar
        onSearchInput={handleSearchInput}
        onReset={handleReset}
        searchInput={searchInput}
      />
    </div>
  );
}

export default CountryFilter;
