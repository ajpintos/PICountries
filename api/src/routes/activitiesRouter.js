const { Router } = require('express');
const {postActivitiesHandler} = require("../handlers/activitiesHandler");

const activitiesRouter = Router();

activitiesRouter.post("/", postActivitiesHandler);

activitiesRouter.get("/", (req, res) => {
    res.status(200).send("Estoy obteniendo las actividades");
});

module.exports = activitiesRouter;