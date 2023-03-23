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
            name: elem.name ? elem.name[Object.keys(elem.name)[1]] : null,
            flag: elem.flag ? elem.flags[1] : null,
            continent: elem.continent ? elem.continent : null,
            capital: elem.capital ? elem.capital[0] : null,
            subregion: elem.subregion ? elem.subregion : null,
            area: elem.area ? elem.area : null,
            population: elem.population ? elem.population : null,
        };
    });

//? Determinar si la tabla Country  de la DB esta vacia  || Determinar si existe un determinado país en la DB
//?Si esta vaciá llamar datos de la API y volcarlos en la DB
//? Si esta llena mostrar los datos de la DB

//! Funcion que determina si hay cosas en la DB, si hay cosas muestra la DB y si no llama la API
const getCountriesHandler = async (req, res) => {
    const  { name } = req.query;
    const results = name ? await searchCountryByName(name) : await getAllCountriesFromApi();
    res.status(200).json(results);
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

//! *************************************************************
/*
const saveCountries = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3/all');
        const countries = response.data.map(mapCountry);
        const result = await Country.bulkCreate(countries, { ignoreDuplicates: true });
        console.log('Countries saved from api:', result.length);
    } catch (error) {
        console.error('Error while fetching and saving countries:', error);
        const countries = data.map(mapCountry);
        const result = await Country.bulkCreate(countries, { ignoreDuplicates: true });
        console.log('Countries saved from data.json:', result.length);
    }
};
*/

//! *************************************************************



saveInDb().then(r => console.log(r));

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