const {DataTypes} = require("sequelize");
const {Country, CountriesInDb} = require("../db");
const axios = require('axios');
const {createCountries, cleanArray, saveInDb} = require("../controllers/countriesController");
const {createCountriesInDb, createActivity} = require("../controllers/activitiesController");

//! Esta función rutea según el tipo de request
const getCountriesHandler = async (req, res) => {
    const {name, id} = req.query;
    let results = name ? await searchCountryByName(name) : id ? await getCountriesByIdHandler(id) : await ifTableCountriesIsEmpty();
    res.status(200).send(results);
};

//! Esta función verifica si la tabla Countries esta vacia, si esta vacia hace el llamado a la API, si no esta vacia muestra los datos de la DB
async function ifTableCountriesIsEmpty() {
    const count = await Country.count(); // Cuenta el número de registros en la tabla
    if (count === 0) {
        await saveInDb();
    } else {
        return await showCountriesFromDb();
    }
}

//? **** Función que trae todos los countries guardados en la DB **** //
const showCountriesFromDb = async () => {
    try {
        const fromDb = await Country.findAll();
        return fromDb;
    } catch (error) {
        console.error('Error al mostrar los Countries de la DB:', error);
    }
}

//! Función que busca un country por nombre
const searchCountryByName = async (name) => {
    const byNamefromDb = await Country.findAll({where: {name: name}});
    return byNamefromDb;
}

//! Función que busca un country por id
const getCountriesByIdHandler = async (id) => {
    const byIdfromDb = await Country.findAll({where: {id: id}});
    return byIdfromDb;
};

module.exports = {
    getCountriesHandler,
    getCountriesByIdHandler,
};