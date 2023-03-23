const axios = require("axios");
const { UUIDV4, UUID } = require("sequelize");
const uuid = require("uuid");
const { Country, Activity } = require("../db");
const { API_KEY } = process.env;

async function getTotalCountryData() {
  const totalCountryData = await axios.get(`https://restcountries.com/v3/all`);

  const countryData = await Promise.all(
    totalCountryData.data.map(async (m) => {
      const existingCountry = await Country.findOne({
        where: { countryId: m.cca3 },
      });
      if (existingCountry) {
        return existingCountry;
      }
      const country = await Country.create({
        countryId: m.cca3,
        name: m.name.common,
        flag: m.flags[0],
        capital: m.capital ? m.capital[0] : null,
        continent: m.region,
        subregion: m.subregion,
        population: parseInt(m.population),
        area: m.area ? parseInt(m.area) : null,
      });
      return country;
    })
  );
  console.log(countryData);
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
    flag: m.flags[0],
    capital: m.capital,
    continent: m.continents,
    subregion: m.subregion,
    population: m.population,
    area: m.area,
  }));

  const idDatafound = idData.find(
    (f) => f.countryId.toLowerCase() == idPais.toLowerCase()
  );

  return idDatafound;
}

async function getActivities(countryId) {
  try {
    let where = {};

    if (countryId && !isNaN(countryId)) {
      where.countryId = parseInt(countryId);
    }

    const activities = await Activity.findAll({
      where,
      include: [{ model: Country }],
    });

    return activities.map((activity) => {
      return {
        name: activity.name,
        difficulty: activity.difficulty,
        duration: activity.duration,
        season: activity.season,
        country: activity.country ? activity.country.name : null,
      };
    });
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get activities from database");
  }
}
async function createActivity(name, difficulty, duration, season, countryName) {
  try {
    const country = await Country.findOne({
      where: { name: countryName },
    });

    if (!country) {
      throw new Error("Country not found");
    }

    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countryName,
    });

    return activity;
  } catch (err) {
    console.error(err);
    throw new Error("Internal Server Error");
  }
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
  getActivities,
  filterByName,
  createActivity,
};
