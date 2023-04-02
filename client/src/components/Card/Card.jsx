import React from 'react';
import style from './Card.module.css';

function Card(props) {
    return (
        <div className={style.card}>
            <h2>{props.name}</h2>
            <img src={props.flag} alt="flag" width="250px" height="auto"/>
            <h3>Continente:<br/>{props.continent}</h3>
            <p>{props.capital}</p>
            <p>{props.subregion}</p>
            <p>{props.area}</p>
            <p>{props.population}</p>
            <p>{props.difficulty}</p>
            <p>{props.duration}</p>
            <p>{props.season}</p>


        </div>
    );
}

export default Card;