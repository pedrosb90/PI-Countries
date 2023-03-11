const axios = require("axios");
const { UUIDV4 } = require("sequelize");
const { Country, Activity } = require("../db");
const { API_KEY } = process.env;

async function getTotalCountryData() {
  const totalCountryData = await axios.get("https://restcountries.com/v3/all");

  const countryData = await totalCountryData.data.results.map((m) => ({
    // Id:
    Name: m.name.common,
    Flag: m.flag,
    Capital: m.capital,
    Continent: m.continents,
    Subregion: m.subregion,
    Population: m.population,
    Area: m.area,

    // Imagen de la bandera. *
    // Continente. *
    // Capital. *
    // Subregión.
    // Área.
    // Población. *
  }));
  return countryData;
}

module.exports = { getTotalCountryData };
