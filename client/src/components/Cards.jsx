import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../actions";

const Cards = () => {
  return (
    <div>
      <h1> Estoy en Country Card List: </h1>
      <div>
        <CountryCard />
      </div>
    </div>
  );
};

export default Cards;
