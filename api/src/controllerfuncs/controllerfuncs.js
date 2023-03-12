const axios = require("axios");
const { UUIDV4 } = require("sequelize");
const { Country, Activity } = require("../db");
const { API_KEY } = process.env;

async function getTotalCountryData() {
  const totalCountryData = await axios.get(`https://restcountries.com/v3/all`);

  const countryData = await totalCountryData.data.map((m) => ({
    Id: m.cca3,
    Name: m.name.common,
    Flag: m.flag,
    Capital: m.capital,
    Continent: m.continents,
    Subregion: m.subregion,
    Population: m.population,
    Area: m.area,
  }));

  return countryData;
}
async function getSpecificData(idPais) {
  const countryIdData = await axios.get(`https://restcountries.com/v3/all`);

  const idData = await countryIdData.data.map((m) => ({
    Id: m.fifa || m.cca3 || m.cioc,
    Id: m.cca3,
    Name: m.name.common,
    Flag: m.flag,
    Capital: m.capital,
    Continent: m.continents,
    Subregion: m.subregion,
    Population: m.population,
    Area: m.area,
  }));

  const idDatafound = idData.find(
    (f) => f.Id.toLowerCase() == idPais.toLowerCase()
  );

  return idDatafound;
}

module.exports = { getTotalCountryData, getSpecificData };
