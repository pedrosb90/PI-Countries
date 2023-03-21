import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../actions";
import Activity from "./Activity";

const CountryDetail = () => {
  const { countryId } = useParams();
  const countryData = useSelector((state) => state.countryData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(countryId));
  }, [dispatch, countryId]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>Detail</h1>
        <h2 className="card-text">{countryData.name}</h2>
      </div>
      {/* <h1>Detail</h1>
      <h2 className="card-text">{countryData.name}</h2>
      <p className="card-title">ID: {countryData.idCountry}</p>
      <img className="card-img" src={countryData.flag} alt="Country Flag" />
      <p className="card-text">Continent: {countryData.continent}</p>
      <p className="card-text">Capital: {countryData.capital}</p>
      <p className="card-text">Subregion: {countryData.subregion}</p>
      <p className="card-text">Area: {countryData.area}</p>
      <p className="card-text">Population: {countryData.population}</p>
      <div>
        {countryData.activities && countryData.activities.length > 0
          ? countryData.activities.map((a) => <Activity key={a.name} a={a} />)
          : null}
      </div> */}
    </div>
  );
};

export default CountryDetail;
