const express = require("express");
const {
  getTotalCountryData,
  getSpecificData,
  filterByName,
} = require("../controllerfuncs/controllerfuncs");
const countries = express.Router();

countries.get("/:idPais", async (req, res) => {
  //falta traer actividades asociadas
  try {
    const { idPais } = req.params;
    if (idPais.length > 3 || idPais.length < 3) {
      throw new Error();
    } else {
      const countryDatabyId = await getSpecificData(idPais);

      res.status(200).json(countryDatabyId);
    }
  } catch (err) {
    res.status(500).json({ error: "Country code must have 3 characters" });
  }
});
// 📍 GET | /countries/:idPais
// Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// El país es recibido por parámetro (ID de tres letras del país).
// Tiene que incluir los datos de las actividades turísticas asociadas a este país.

countries.get("/", async (req, res) => {
  try {
    const dataCountries = await getTotalCountryData();

    if (!dataCountries) {
      throw new Error("Data not found");
    } else {
      res.status(200).send(dataCountries);
    }
  } catch (err) {
    res.status(500).json({ err: "Unknown error" });
  }
});

// 📍 GET | /countries/name?="..."
// Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el país, debe mostrar un mensaje adecuado.

module.exports = countries;
