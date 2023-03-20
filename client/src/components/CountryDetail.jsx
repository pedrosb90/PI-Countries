import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getById } from "../actions";
import Activity from "./Activity";

const CountryDetail = async () => {
  // const country = await axios.get("http://localhost:3001/countries");
  // const countryData = country.data;
  // return (
  //   <div>
  //     <h1>Detail</h1>
  //     <h2 className="card-text">{countryData.name}</h2>
  //     <p className="card-title">ID: {countryData.idCountry}</p>
  //     <img className="card-img" src="FlagImageURL" alt="Country Flag" />
  //     <p className="card-text">Continent: {countryData.continent}</p>
  //     <p className="card-text">Capital: {countryData.capital}</p>
  //     <p className="card-text">Subregion: {countryData.subregion}</p>
  //     <p className="card-text">Area: {countryData.area}</p>
  //     <p className="card-text">Population: {countryData.population}</p>
  //     <div>
  //       {countryData.activities > 0
  //         ? countryData.activities.map((a) => <Activity key={a.name} a={a} />)
  //         : null}
  //     </div>
  //   </div>
  // );
};

export default CountryDetail;
