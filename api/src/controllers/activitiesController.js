const {Country, Activity} = require('../db.js');


//? Guardamos en la DB los datos
const createActivity = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });

    countries.forEach(async (country) => {
        const countryActivity = await Country.findOne({
            where: {
                id: country,
            },
        });
        await newActivity.addCountry(countryActivity); // Le agrego la actividad al pais en la tabla countryActivity;

    });

    return newActivity;
};


module.exports = {createActivity};