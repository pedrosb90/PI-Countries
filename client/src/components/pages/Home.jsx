import React from "react";

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
        Filter By Activity{" "}
      </button>
    </div>
  );
}

export default Home;
