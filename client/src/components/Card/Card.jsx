import React from 'react';
import style from './Card.module.css';

function Card(props) {
    return (
        <div className={style.card}>
            <p>{props.name}</p>
            <p>{props.flag}</p>
            <p>{props.continent}</p>
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