const express = require("express");
const activities = express.Router();
const { Country, Activity } = require("../db");

activities.get("/", async (req, res) => {
  try {
    const activities = await getActivitiesDB();

    res.status(200).json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

activities.post("/", (req, res) => {
  // 📍 POST | /activities
  // Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
  // Toda la información debe ser recibida por body.
  // Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    if (name && difficulty && duration && season && countries) {
      const activity = Activity.create({
        name,
        difficulty,
        duration,
        season,
      });

      countries.forEach(async (id) => {
        const country = await Country.findOne({
          where: { id: { [Op.iLike]: `%${id}%` } },
        });
        await country?.addActivity(activity);
      });

      return res.send(activity);
    } else {
      return res.status(404).json("Missing data");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = activities;
