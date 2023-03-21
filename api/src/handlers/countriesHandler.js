const { DataTypes } = require("sequelize");
const { Country, Activity } = require("../db");
const axios = require('axios');

//? esta funcion limpia los datos de la API
const cleanArray = (arr) =>
    arr.map(elem=>{
        return {
            id: elem.cca3,
            name: elem.name[Object.keys(elem.name)[1]],
            flag: elem.flags ? elem.flags[1] : "Not found",
            continent: elem.region,
            capital: elem.capital ? elem.capital[0] : "Not found",
            subregion: elem.subregion ? elem.subregion : "Not found",
            area: elem.area,
            population: elem.population
        };
    });

//? Determinar si la tabla Country  de la DB esta vacia  || Determinar si existe un determinado país en la DB
//?Si esta vaciá llamar datos de la API y volcarlos en la DB
//? Si esta llena mostrar los datos de la DB

const getCountriesHandler = async (req, res) => {
    const  { name } = req.query;
    const results = name ? await searchCountryByName(name) : await getAllCountriesFromApi();
    res.status(200).json(results);
};
//? Función que trae todos los usuarios de la API
const getAllCountriesFromApi = async () => {
    const databaseUsers = await Country.findAll();
    const apiUserRaw = (
        await axios.get("https://restcountries.com/v3/all")
    ).data;
    const apiCountries = cleanArray(apiUserRaw);
    return apiCountries;
};

// getAllCountriesFromApi().then(r => console.log(r));


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