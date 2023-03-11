const { Router } = require("express");
const activities = require("./activities");
const countries = require("./countries");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countries);
router.use("/name", countries);
router.use("/id", countries);

router.use("/activities", activities);

module.exports = router;
