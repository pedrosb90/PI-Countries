const express = require("express");
const { getTotalCountryData } = require("../controllerfuncs/controllerfuncs");
const countries = express.Router();

countries.get("/", async (req, res) => {
  try {
    const dataCountries = await getTotalCountryData();

    if (!dataCountries) {
      throw new Error("Data not found");
    } else {
      res.status(200).send(dataCountries);
    }
  } catch (error) {
    res.status(500).json({ error: "Unknown error" });
  }
});
// 📍 GET | /countries
// Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

countries.get("/:idPais", async (req, res) => {});
// 📍 GET | /countries/:idPais
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.
countries.get("/", async (req, res) => {});
// 📍 GET | /countries/name?="..."
// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.

module.exports = countries;
