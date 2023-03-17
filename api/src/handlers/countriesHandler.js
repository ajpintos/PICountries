const getCountriesHandler = (req, res) => {
    const {name} = req.query;
    if (name) res.send(`Voy a enviar el detalle del país ${name}`);
    else res.send("Voy a enviar todos los países");
};

const getCountriesByIdHandler = (req, res) => {
    const { id } = req.params;
    res.send(`Voy a enviar el detalle del usuario de ID ${id}`);
};

module.exports = {
    getCountriesHandler,
    getCountriesByIdHandler,
};