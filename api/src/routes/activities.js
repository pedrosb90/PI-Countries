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
  try {
    const activityRecord = await createActivity(
      req.body.name,
      req.body.difficulty,
      req.body.duration,
      req.body.season,
      req.body.countryName
    );

    res.json(activityRecord);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = activities;
