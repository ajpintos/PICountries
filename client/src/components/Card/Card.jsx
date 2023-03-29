import React from 'react';
import style from './Card.module.css';

function Card(props) {
    return (
        <div className={style.card}>
        <p>Nombre:{props.name}</p>
        <p>Bandera:{props.flag}</p>
        <p>Continente:{props.continent}</p>
        <p>Capital:{props.capital}</p>
        <p>Subregion:{props.subregion}</p>
        <p>Area:{props.area}</p>
        <p>Población:{props.population}</p>
        </div>
    );
}

export default Card;