import React from 'react';
import style from './Card.module.css';
import {Link} from "react-router-dom";

function Card(props) {
    return (
        <div className={style.card}>
            <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2></Link>
            <img src={props.flag} alt="flag" width="250px" height="auto"/>
            <h3>Continente:<br/>{props.continent}</h3>
            <h3>Capital: <br/>{props.capital}</h3>
            <h3>{props.subregion}</h3>
            <h3>{props.area}</h3>
            <h3>{props.population}</h3>
            <h3>{props.difficulty}</h3>
            <h3>{props.duration}</h3>
            <h3>{props.season}</h3>
        </div>
    );
}

export default Card;