import React from 'react';
import Detail from '../../views/Detail/Detail';
import style from './DetailsContainer.module.css';
import Card from "../Card/Card";

const DetailsContainer = () => {
    const arrCountryDetail = [
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
        // <div className={style.container}>

                 <Detail
                    name={arrCountryDetail[0].name}
                    flag={arrCountryDetail[0].flag}
                    continent={arrCountryDetail[0].continent}
                    capital={arrCountryDetail[0].capital}
                    subregion={arrCountryDetail[0].subregion}
                    area={arrCountryDetail[0].area}
                    population={arrCountryDetail[0].population}
                    activities={arrCountryDetail[1]}
                />
    );
}

export default DetailsContainer;