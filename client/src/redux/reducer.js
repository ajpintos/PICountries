import {GET_COUNTRIES, GET_COUNTRY_BY_ID, CLEAN_DETAIL,COUNTRY_BY_NAME } from "./actions";


const initialState = {
    countries: [],
    countryById: [
        {
            "id": "PLA",
            "name": "Loading Name",
            "flag": "https://flagcdn.com/w320/br.png",
            "continent": "Loading Continente",
            "capital": "Loading Capital",
            "subregion": "Loading Subregion",
            "area": 8515767,
            "population": 212559409
        },
        [
            {
                "name": "Loading Name",
                "difficulty": "4",
                "duration": 1,
                "season": "Summer",
                "country_activity": {
                    "createdAt": "2023-04-01T22:08:46.794Z",
                    "updatedAt": "2023-04-01T22:08:46.794Z",
                    "CountryId": "BRA",
                    "ActivityId": 1
                }

            }
        ]
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, countries: action.payload};
        case GET_COUNTRY_BY_ID:
            // console.log("Este es el contenido de action.payload",action.payload);
            return { ...state, countryById: action.payload };
        case CLEAN_DETAIL:
            return { ...state, countryById: {}};
        case COUNTRY_BY_NAME:
            return { ...state, countries: action.payload };
        default:
            return {...state};
    }
};

export default rootReducer;