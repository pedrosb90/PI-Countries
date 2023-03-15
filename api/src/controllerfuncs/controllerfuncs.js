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

async function getActivitiesDB(countryId, activities) {
  try {
    const activityRecords = [];

    for (const activity of activities) {
      const [activityRecord, created] = await Activity.findOrCreate({
        where: { name: activity.name },
        defaults: {
          difficulty: activity.difficulty,
          duration: activity.duration,
          season: activity.season,
          countryId: countryId,
        },
      });

      activityRecords.push(activityRecord);
    }

    return activityRecords;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to get activities from database");
  }
}
async function createActivity(name, difficulty, duration, season, countryId) {
  try {
    const country = await Country.findByPk(countryId);
    console.log(country);

    if (!country) {
      throw new Error("Country not found");
    }

    const activity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      countryId,
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
  getActivitiesDB,
  filterByName,
  createActivity,
};
