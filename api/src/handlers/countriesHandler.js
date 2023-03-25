const {DataTypes} = require("sequelize");
const {Country, CountriesInDb} = require("../db");
const axios = require('axios');
const {createCountries} = require("../controllers/countriesController");
const {createCountriesInDb, createActivity} = require("../controllers/activitiesController");


//! Función que determina, según el ruteo, a donde te manda
/*const getCountriesHandler = async (req, res) => {
    const {name, id} = req.query;
    const results = name ? await searchCountryByName(name) : await req.query.id = true ? await getCountriesByIdHandler(id) : await ifTableCountriesIsEmpty();
    res.status(200).send(results);
};*/

const getCountriesHandler = async (req, res) => {
    const { name, id } = req.query;
    let results = name
        ? await searchCountryByName(name)
        : id
            ? await getCountriesByIdHandler(id)
            : await ifTableCountriesIsEmpty();
    res.status(200).send(results);
};

//! esta funcion limpia los datos de la API
const cleanArray = (arr) =>
    arr.map(elem => {
        return {
            id: elem.cca3,
            name: elem.name ? elem.name[Object.keys(elem.name)[1]] : "No Data Available",
            flag: elem.flag ? elem.flags[1] : "No Data Available",
            continent: elem.continent ? elem.continent : "No Data Available",
            capital: elem.capital ? elem.capital[0] : "No Data Available",
            subregion: elem.subregion ? elem.subregion : "No Data Available",
            area: elem.area ? elem.area : null,
            population: elem.population ? elem.population : 0,
        };
    });


//! Esta función verifica si la tabla Countries esta vacia, si esta vacia hace el llamado a la API, si no esta vacia muestra los datos de la DB
async function ifTableCountriesIsEmpty() {
    const count = await Country.count(); // Cuenta el número de registros en la tabla
    if (count === 0) {
        await saveInDb();
    } else {
        return await showCountriesFromDb();
    }
}


//! Función que trae todos los usuarios de la API
const getAllCountriesFromApi = async () => {
    const databaseUsers = await Country.findAll();
    const apiUserRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;
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

const getCountriesByIdHandler = async (id) => {
    const byIdfromDb = await Country.findAll({where: {id: id}});
    return byIdfromDb;
};

module.exports = {
    getCountriesHandler,
    getCountriesByIdHandler,
};