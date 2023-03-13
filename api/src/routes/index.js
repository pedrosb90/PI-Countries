const { Router } = require("express");
const activities = require("./activities");
const countries = require("./countries");
const countryname = require("./countryname");

const router = Router();

router.use("/countries", countries);
router.use("/countries/activities", activities);
router.use("/countries?name=", countryname);

module.exports = router;
