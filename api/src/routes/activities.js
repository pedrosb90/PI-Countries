const express = require("express");
const activities = express.Router();
const { Country, Activity } = require("../db");

const {
  createActivity,
  getActivities,
} = require("../controllerfuncs/controllerfuncs");

activities.get("/", async (req, res) => {
  try {
    const activities = await getActivities();
    console.log(activities);
    res.status(200).json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

activities.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;

  if (typeof name !== "string" || name.trim().length === 0) {
    res.status(400).send("Invalid name");
    return;
  }

  if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 5) {
    res.status(400).send("Invalid difficulty");
    return;
  }

  if (typeof duration !== "number" || duration < 0) {
    res.status(400).send("Invalid duration");
    return;
  }

  const validSeasons = ["spring", "summer", "fall", "winter"];
  if (!validSeasons.includes(season.toLowerCase())) {
    res.status(400).send("Invalid season");
    return;
  }

  const uppercasedCountryId = countryId.toUpperCase();

  try {
    const activityRecord = await createActivity(
      name,
      difficulty,
      duration,
      season,
      uppercasedCountryId
    );

    res.json(activityRecord);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = activities;
