const express = require("express");
const activities = express.Router();
const { Country, Activity } = require("../db");

const {
  getTotalCountryData,
  getSpecificData,
  filterByName,
  getActivitiesDB,
} = require("../controllerfuncs/controllerfuncs");

activities.get("/", async (req, res) => {
  try {
    const activities = await getActivitiesDB();

    res.status(200).json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

activities.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;

  try {
    const country = await Country.findByPk(countryId);

    if (!country) {
      return res.status(404).send("Country not found");
    }

    const activity = await Activity.findOrCreate({
      name,
      difficulty,
      duration,
      season,
      countryId,
    });

    return res.json(activity);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = activities;
