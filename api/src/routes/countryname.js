const express = require("express");
const {
  getTotalCountryData,
  getSpecificData,
  filterByName,
} = require("../controllerfuncs/controllerfuncs");
const countryname = express.Router();

countryname.get("/", async (req, res) => {
  try {
    const name = req.query.name;

    if (!name) {
      return res
        .status(400)
        .json({ error: 'Missing or empty "name" query parameter' });
    }

    const dataToFilter = await filterByName(name);

    if (dataToFilter.length === 0) {
      return res
        .status(404)
        .json({ error: `No countries found matching "${name}"` });
    }

    return res.status(200).json(dataToFilter);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: `Internal server error: ${error.message}` });
  }
});

module.exports = countryname;
