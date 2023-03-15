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

async function getActivitiesDB(id) {
  const pk = id;

  const activities = [
    { name: "name", id: pk, difficulty: 1, duration: 1, season: "Summer" },
  ];
  activities.forEach((activity) => {
    Activity.findOrCreate({ where: { name: activity.name } });
  });

  const totActivities = await Activity.findAll();
  return totActivities;
}

async function filterByName(name) {
  const searchName = name;
  const response = await axios.get(`https://restcountries.com/v3/all`);

  const countries = response.data.map((m) => ({
    Id: m.fifa || m.cca3 || m.cioc,
    Name: m.name.common,
    Flag: m.flags.png,
    Capital: m.capital?.[0] || "",
    Continent: m.continent,
    Subregion: m.subregion,
    Population: m.population,
    Area: m.area,
  }));

  if (searchName) {
    const searchTerm = searchName.toLowerCase();

    const filteredCountries = countries.filter((country) => {
      return country.Name.toLowerCase().includes(searchTerm);
    });
    return filteredCountries;
  }
}

module.exports = {
  getTotalCountryData,
  getSpecificData,
  getActivitiesDB,
  filterByName,
};
