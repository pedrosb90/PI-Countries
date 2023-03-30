const express = require("express");
const activities = express.Router();
const { Country, Activity } = require("../db");

const {
  createActivity,
  getActivities,
} = require("../controllerfuncs/controllerfuncs");

activities.get("/:countryId", async (req, res) => {
  const { countryId } = req.params;

  if (!countryId) {
    return res.status(400).json({ error: "Missing countryId parameter" });
  }

  try {
    const activities = await Activity.findAll({ countryId: countryId });

    if (!activities || activities.length === 0) {
      return res
        .status(404)
        .json({ error: "No activities found for the specified country" });
    }

    res.status(200).json(activities);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
});
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
