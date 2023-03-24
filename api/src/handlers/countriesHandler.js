const { DataTypes } = require("sequelize");
const { Country, CountriesInDb } = require("../db");
const axios = require('axios');
const {createCountries} = require("../controllers/countriesController");
const {createCountriesInDb, createActivity} = require("../controllers/activitiesController");

//! esta funcion limpia los datos de la API
const cleanArray = (arr) =>
    arr.map(elem=>{
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

// ? Esta función verifica si la tabla esta vacia, si esta vacia llama a la API y guarda los datos en la DB, si no esta vacia llama a la DB
async function ifTableCountriesIsEmpty() {
    const count = await Country.count(); // Cuenta el número de registros en la tabla
    if (count === 0) {
        await saveInDb();
    } else {
       return await showCountriesFromDb();
    }
}

// Llama a la función para verificar si la tabla está vacía
// ifTableCountriesIsEmpty().then();



//# Función que determina si hay cosas en la DB, si hay cosas muestra la DB y si no llama la API
const getCountriesHandler = async (req, res) => {
    const  { name } = req.query;
    const results = name ? await searchCountryByName(name) : await ifTableCountriesIsEmpty();
    // const results = await showCountriesFromDb()
    res.status(200).send(results);
};

//! Función que trae todos los usuarios de la API
const getAllCountriesFromApi = async () => {
    const databaseUsers = await Country.findAll();
    const apiUserRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;
    const apiCountries = await cleanArray(apiUserRaw);
    return apiCountries;
}

//! Guardamos los datos de la API en la DB
const saveInDb = async ()=> {
    try{
     const results = await Country.bulkCreate(await getAllCountriesFromApi());
            console.log('Countries saved from api:', results.length);
        } catch(error) {
            console.error('Error creating users', error);
        };
}

//! Función que trae todos los countries guardados en la DB y los pinta en pantalla

const showCountriesFromDb = async (req, res) => {
    try {
        const fromDb = await Country.findAll();
        return fromDb;
        // console.log(fromDb);
    } catch (error) {
        console.error('Error al mostrar los Countries de la DB:', error);
    }
}


// Render countries from DB
/*const renderCountriesFromDb = async (req, res) => {
    req.query = showCountriesFromDb;
    const countries = await showCountriesFromDb();
    res.status(200).json(countries);
}*/

/*async function showCountriesFromDb() {
    try {
        const countriesFromDb = await Country.findAll();
        countriesFromDb.forEach(user => {
            console.log(`ID: ${user.id} - Name: ${user.name} - Flag: ${user.flag}, - Continent: ${user.continent}, - Capital: ${user.capital}, - Subregion: ${user.subregion}, - Area: ${user.area}, - Population: ${user.population} `);
            console.log('Datos visualizados desde la DB')
        });
    } catch (error) {
        console.error('Error al mostrar usuarios:', error);
    }
}*/

//# Este es el viejo código que funciona bien
/*const getCountriesHandler = (req, res) => {
    const {name} = req.query;
    if (name) res.send(`Voy a enviar el detalle del país ${name}`);
    else res.send("Voy a enviar todos los países");
};*/

const getCountriesByIdHandler = (req, res) => {
    const { id } = req.params;
    res.send(`Voy a enviar el detalle del usuario de ID ${id}`);
};

module.exports = {
    getCountriesHandler,
    getCountriesByIdHandler,
};