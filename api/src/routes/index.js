const { Router } = require("express");
const activities = require("./activities");
const countries = require("./countries");
const countryname = require("./countryname");

const router = Router();

router.use("/countries", countries);
router.use("/activities", activities);
router.use("/", countryname);

module.exports = router;
