import React from "react";
import { Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";

function CountryCard({ name, continent, flag }) {
  return (
    <div>
      <Link to={CountryDetail} />
      CountryCard
      <h1>Name: {name}</h1>
      <h1>Continent: {continent}</h1>
      <h1>Flag: </h1>
      <img source={flag} alt="imgflag"></img>
    </div>
  );
}

export default CountryCard;
