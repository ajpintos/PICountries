const {createActivity} = require("../controllers/activitiesController");
const {Activity} = require("../db");

//! Esta función trae todas las activities de la DB
const getActivitiesHandler = async (req, res) => {
    try {
        const allActivities = await Activity.findAll();
        res.status(200).send(allActivities);
    } catch (error) {
        console.error('Error al mostrar las Activities:', error);
    }
}

//! Esta función postea las actividades en la DB
const postActivitiesHandler = async (req, res) => {
    try{
    const {name, difficulty, duration, season} = req.body;
    const newActivity = await createActivity(name, difficulty, duration, season);
    res.status(201).send(newActivity);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    postActivitiesHandler,
    getActivitiesHandler
};