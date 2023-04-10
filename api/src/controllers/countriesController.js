const {DataTypes} = require("sequelize");
const {Country, CountriesInDb} = require("../db");
const axios = require('axios');
const {createCountriesInDb, createActivity} = require("../controllers/activitiesController");

//! esta funcion limpia los datos de la API
const cleanArray = (arr) =>
    arr.map(elem => {
        return {
            id: elem.cca3,
            name: elem.name ? elem.name[Object.keys(elem.name)[1]] : "No Data Available",
            flag: elem.flag ? elem.flags[1] : "No Data Available",
            continent: elem.continents ? elem.continents[0] : "No Data Available",
            capital: elem.capital ? elem.capital[0] : "No Data Available",
            subregion: elem.subregion ? elem.subregion : "No Data Available",
            area: elem.area ? elem.area : null,
            population: elem.population ? elem.population : 0,
        };
    });


//! Función que trae todos los paises de la API
const getAllCountriesFromApi = async () => {
    const databaseUsers = await Country.findAll();
    const apiUserRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;
    console.log("apiUserRaw", apiUserRaw)
    const apiCountries = await cleanArray(apiUserRaw);
    return apiCountries;
}

//! Función que guarda los datos de la API en la DB
const saveInDb = async () => {
    try {
        const results = await Country.bulkCreate(await getAllCountriesFromApi());
        console.log('Countries saved from api:', results.length);
    } catch (error) {
        console.error('Error creating users', error);
    }
    ;
}

module.exports = {
    cleanArray,
    getAllCountriesFromApi,
    saveInDb,
}