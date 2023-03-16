const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const app = require("../app");
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);
mainRouter.use("/activities", activitiesRouter);

/*mainRouter.get("/users",(req, res) => {
    res.status(200).send("Estoy pasando por usersssss");
});*/

module.exports = mainRouter;


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*app.get("/", (req, res) => {
    res.status(200).send("OK");
});
app.get("/countries", (req, res) => {
    res.status(200).send("Hola, estoy pasando por Countries");
});

app.get("/countries/:idPais", (req, res) => {
    res.status(200).send("Hola, estoy pasando por Countries/:idPais");
});

app.get("/countries/name?name=", (req, res) => {
    res.status(200).send("Hola, estoy pasando por Countries/name?name=");
});

app.get("/activities", (req, res) => {
    res.status(200).send("Hola, estoy pasando por activities");
});*/

const getApiInfo = async () => {
    const apiUrl = await axios.get('https://restcountries.com/v3/all');
    const apiInfo = await apiUrl.data.map(element=> {
        return {
            id: element.cca3,
            name: element.name.common,
            image: element.flags[1],
            continent: element.region,
            capital: element.capital,
            subregion: element.subregion,
            area: element.area,
            population: element.population,
        };
    });
    return apiInfo;
};

/*const getDbInfo = async () => {
    return await Activity.findall ({
        include: {
            model: Country,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}*/


// module.exports = router;
