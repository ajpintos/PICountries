import style from "./Detail.module.css"
import {Link} from "react-router-dom";
import React from "react";

function Detail(props) {
    return (
        <div className={style.detail}>
            <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2></Link>
            {/*<img src={props.flag} alt="flag" width="250px" height="auto"/>*/}
            <h3>Continente:<br/>{props.continent}</h3>
            <h3>Capital: {props.capital}</h3>
            <h3>Subregion:{props.subregion}</h3>
            <h3>Area:{props.area}</h3>
            <h3>Population:{props.population}</h3>
            {<h2>Actividades</h2>}
            {props.activities.map( activity => {
                return (
                    <div className={style.activity}>
                        <h3>Nombre{activity.name}</h3>
                        <h3>Difficulty{activity.difficulty}</h3>
                        <h3>Duration{activity.duration}</h3>
                        <h3>Season{activity.season}</h3>
                    </div>
                )
            })}


        </div>
    );
};

export default Detail;


