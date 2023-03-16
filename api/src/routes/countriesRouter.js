const { Router } = require('express');

const countriesRouter = Router();

countriesRouter.get("/", (req, res) => {
    res.status(200).send("Estoy pasando Countries");
});

countriesRouter.get("/:idPais", (req, res) => {
    res.status(200).send("Estoy pasando por Countries/Pais");
});

countriesRouter.get("/name?=", (req, res) => {
    res.status(200).send("Estoy pasando /Name?=");
});

module.exports = countriesRouter;