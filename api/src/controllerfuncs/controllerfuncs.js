const axios = require("axios");
const { UUIDV4, UUID } = require("sequelize");
const uuid = require("uuid");
const { Country, Activity } = require("../db");
const { API_KEY } = process.env;

async function getTotalCountryData() {
  const totalCountryData = await axios.get(`https://restcountries.com/v3/all`);

  const countryData = await Promise.all(
    totalCountryData.data.map(async (m) => {
      const country = await Country.create({
        countryId: m.cca3,
        name: m.name.common,
        flag: m.flags.svg,
        capital: m.capital ? m.capital[0] : null,
        continent: m.region,
        subregion: m.subregion,
        population: parseInt(m.population),
        area: m.area ? parseInt(m.area) : null,
      });
      return country;
    })
  );
  return countryData;
}
getTotalCountryData()
  .then((countryData) => {
    console.log("Saved countries:", countryData);
    console.log("Finished saving countries.");
  })
  .catch((error) => {
    console.error("Error saving countries:", error);
  });

async function getSpecificData(idPais) {
  const countryIdData = await axios.get(`https://restcountries.com/v3/all`);

  const idData = await countryIdData.data.map((m) => ({
    countryId: m.fifa || m.cca3 || m.cioc,
    name: m.name.common,
    flag: m.flag,
    capital: m.capital,
    continent: m.continents,
    subregion: m.subregion,
    population: m.population,
    area: m.area,
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
    countryId: m.fifa || m.cca3 || m.cioc,
    name: m.name.common,
    flag: m.flags.png,
    capital: m.capital?.[0] || "",
    continent: m.continent,
    subregion: m.subregion,
    population: m.population,
    area: m.area,
  }));

  if (searchName) {
    const searchTerm = searchName.toLowerCase();

    const filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchTerm);
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
