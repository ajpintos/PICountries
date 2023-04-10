import style from "./Detail.module.css"
import {Link, useLocation} from "react-router-dom";
import React from "react";


function Detail(props) {
    const location = useLocation();
    return <>(
        <div className={style.detail}>
            {location.pathname === "/detail:id"? ( <Link to={`/detail/${props.id}`}>
            <h2>{props.name}</h2></Link>):(<h2>{props.name}</h2>)}
            <img className={style.flag} src={props.flag} alt="flag" width="300px" height="auto"/>
            <h3>Continente:{props.continent}</h3>
            <h3>Capital: {props.capital}</h3>
            <h3>Subregion:{props.subregion}</h3>
            <h3>Area:{props.area}</h3>
            <h3>Population:{props.population}</h3>
            <div className={style.activitiesTitle}>
            {<h2>Activities</h2>}
            </div>
            <div className={style.activities}>
            {props.activities.map( activity => {
                return (
                    <div className={style.activity}>
                        <h4>Nombre: {activity.name}</h4>
                        <h4>Difficulty: {activity.difficulty}</h4>
                        <h4>Duration: {activity.duration}</h4>
                        <h4>Season: {activity.season}</h4>
                    </div>

                )

            })
            }
            </div>
        </div>
    </>
}

export default Detail;


