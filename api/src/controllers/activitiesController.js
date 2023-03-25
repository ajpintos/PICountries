const {Activity} = require('../db.js');



//? Guardamos en la DB los datos
const createActivity = async (name,dificulty,duration,season) => await Activity.create({name, dificulty, duration, season});


module.exports = { createActivity };