const postActivitiesHandler = (req, res) => {
    const {name, difficulty, duration, season} = req.body;
    res.send(`Voy a crear la actividad ${name} con dificultad ${difficulty} y duración ${duration} en la temporada ${season}`);
};


module.exports = {
    postActivitiesHandler,
};