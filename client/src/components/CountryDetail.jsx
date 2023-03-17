import React from "react";

const CountryDetail = () => {
  return (
    <div>
      <h2 className="card-text">Name</h2>
      <p className="card-title">ID (Three-letter Code)</p>

      <img className="card-img" src="Flag Image" alt="Country Flag" />
      <p className="card-text">Continent</p>
      <p className="card-text">Capital</p>
      <p className="card-text">Subregion </p>
      <p className="card-text">Area </p>
      <p className="card-text">Population</p>
    </div>
  );
};

export default CountryDetail;
