import {GET_COUNTRIES, GET_COUNTRY_BY_ID, CLEAN_DETAIL, COUNTRY_BY_NAME, FILTER_BY_CONTINENT, SORT_BY_NAME, SORT_BY_POPULATION} from "./actions";


const initialState = {
    countries: [],
    allUnfilteredCountries: [],
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
            return {...state,
                countries: action.payload,
                allUnfilteredCountries: action.payload
            };
        case GET_COUNTRY_BY_ID:
            // console.log("Este es el contenido de action.payload",action.payload);
            return {...state, countryById: action.payload};
        case CLEAN_DETAIL:
            return {...state, countryById: []};
        case COUNTRY_BY_NAME:
            return {...state, countries: action.payload};
        case FILTER_BY_CONTINENT:
            const allContinents = state.allUnfilteredCountries;
            const countriesFiltered = action.payload === 'All' ? allContinents : allContinents.filter(el => el.continent === action.payload);
            // console.log("Este es el contenido de countriesFiltered",countriesFiltered)
            return {...state, countries: countriesFiltered};
        case SORT_BY_NAME:
            let sortArr = action.payload === "asc" ?
                state.countries.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) :
                state.countries.sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
            console.log("Este es el contenido de sortArr",sortArr)
            return {
                ...state,
                countries: sortArr
            }
        case SORT_BY_POPULATION:
            let sortArrByPopulation = action.payload === "asc" ?
                state.countries.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0)) :
                state.countries.sort((a,b) => (a.population > b.population) ? -1 : ((b.population > a.population) ? 1 : 0))
            console.log("Este es el contenido de sortArrByPopulation",sortArrByPopulation)
            return {
                ...state,
                countries: sortArrByPopulation
            }
        default:
            return {...state};
    }
}
export default rootReducer;