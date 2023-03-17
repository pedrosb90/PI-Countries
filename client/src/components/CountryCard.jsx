import React from "react";
import { Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";

function CountryCard() {
  return (
    <div>
      <Link to={CountryDetail} />
      CountryCard
      <img>{"country flag"}</img>
      <h1>{"country name"}</h1>
      <h3>{"population"}</h3>
    </div>
  );
}

export default CountryCard;
