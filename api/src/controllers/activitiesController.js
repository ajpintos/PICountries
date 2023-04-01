const {Country, Activity} = require('../db.js');


//? Guardamos en la DB los datos
const createActivity = async (name, difficulty, duration, season, country) => {
    const newActivity = await Activity.create({ name, difficulty, duration, season });
    await newActivity.addCountry(country);
    return newActivity;
};


module.exports = {createActivity};