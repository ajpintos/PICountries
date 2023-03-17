const { Router } = require('express');
const {getCountriesHandler, getCountriesByIdHandler} = require("../handlers/countriesHandler");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountriesByIdHandler);

/*countriesRouter.get("/name?=", (req, res) => {
    res.status(200).send("Estoy pasando /Name?=");
});*/

module.exports = countriesRouter;