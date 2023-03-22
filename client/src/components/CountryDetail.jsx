import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../actions";
import Activities from "./Activities";

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
      <h2 className="cardtext">{country.name}</h2>
      <p className="cardtitle">ID: {country.countryId}</p>
      <img className="card-img" src={country.flag} alt="Country Flag" />
      <p className="cardtext">Continent: {country.continent}</p>
      <p className="cardtext">Capital: {country.capital}</p>
      <p className="cardtext">Subregion: {country.subregion}</p>
      <p className="cardtext">Area: {country.area}</p>
      <p className="cardtext">Population: {country.population}</p>

      {country.activities && country.activities.length > 0 && (
        <div>
          {country.activities.map((a) => (
            <Activities key={a.name} a={a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
