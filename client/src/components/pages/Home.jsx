import React from "react";
import Cards from "../Cards";
import CountryCard from "../CountryCard";

function Home() {
  return (
    <div>
      <h1>Henry Countries</h1>
      <label>Find Countries: </label>
      <input type="text" name="find" placeholder="Type country.." />
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
      <Cards />
    </div>
  );
}

export default Home;
