const {Activity} = require('../db.js');

const createActivity = async (name,dificulty,duration,season) => await Activity.create({name, dificulty, duration, season});


module.exports = { createActivity };