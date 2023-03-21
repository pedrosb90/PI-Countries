import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../actions";
import Activity from "./Activity";

const CountryDetail = () => {
  const { countryId } = useParams();

  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        await dispatch(getById(countryId));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountry();
  }, [dispatch, countryId]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail</h1>
      <h2 className="card-text">{country.name}</h2>
      <p className="card-title">ID: {country.countryId}</p>
      <img className="card-img" src={country.flag} alt="Country Flag" />
      <p className="card-text">Continent: {country.continent}</p>
      <p className="card-text">Capital: {country.capital}</p>
      <p className="card-text">Subregion: {country.subregion}</p>
      <p className="card-text">Area: {country.area}</p>
      <p className="card-text">Population: {country.population}</p>

      {country.activities && country.activities.length > 0 && (
        <div>
          {country.activities.map((a) => (
            <Activity key={a.name} a={a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
