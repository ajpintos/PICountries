const { Router } = require('express');

const activitiesRouter = Router();

activitiesRouter.get("/", (req, res) => {
    res.status(200).send("Estoy pasando Countries");
});

activitiesRouter.get("/:idPais", (req, res) => {
    res.status(200).send("Estoy pasando por Countries/Pais");
});

module.exports = activitiesRouter;