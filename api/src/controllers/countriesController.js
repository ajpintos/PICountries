const {Country} = require('../db.js');

//? Guardamos en la DB los datos de la API
const createCountries = async (id,name,flag,continent,capital,subregion,area,population) => await Country.create({name, continent, capital, subregion,area, population, flag});


module.exports = { createCountries };