import React, {useEffect, useState} from 'react';
import Detail from '../../views/Detail/Detail';
import style from './DetailsContainer.module.css';
import Card from "../Card/Card";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import {GET_COUNTRIES} from "../../redux/actions";

const DetailsContainer = ({id}) => {

    id=useParams().id;
    console.log(`El id es ${id}`);
    async function CountryDetail2(id) {
        return await axios.get(`http://localhost:3001/countries/?id=${id}`).data; //
        // TODO: averiguar porque axios no esta funcionando aca

        console.log(`El pais es ${CountryDetail2}(id)`);
    }


    const CountryDetail = [
        {
            "id": "BRA",
            "name": "Federative Republic of Brazil",
            "flag": "https://flagcdn.com/w320/br.png",
            "continent": "South America",
            "capital": "Brasília",
            "subregion": "South America",
            "area": 8515767,
            "population": 212559409
        },
        [
            {
                "name": "Surf",
                "difficulty": "4",
                "duration": 1,
                "season": "Summer",
                "country_activity": {
                    "createdAt": "2023-04-01T22:08:46.794Z",
                    "updatedAt": "2023-04-01T22:08:46.794Z",
                    "CountryId": "BRA",
                    "ActivityId": 1
                }
            },
            {
                "name": "Sky",
                "difficulty": "4",
                "duration": 1,
                "season": "Winter",
                "country_activity": {
                    "createdAt": "2023-04-02T03:17:55.070Z",
                    "updatedAt": "2023-04-02T03:17:55.070Z",
                    "CountryId": "BRA",
                    "ActivityId": 2
                }
            }
        ]
    ]


    return (

                 <Detail
                    name={CountryDetail[0].name}
                    flag={CountryDetail[0].flag}
                    continent={CountryDetail[0].continent}
                    capital={CountryDetail[0].capital}
                    subregion={CountryDetail[0].subregion}
                    area={CountryDetail[0].area}
                    population={CountryDetail[0].population}
                    activities={CountryDetail[1]}
                />
    );
}

export default DetailsContainer;