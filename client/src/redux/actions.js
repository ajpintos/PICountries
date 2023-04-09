import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY_BY_ID = 'GET_COUNTRY_BY_ID';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const COUNTRY_BY_NAME = 'COUNTRY_BY_NAME';

//! Esta función trae todos los countries del endpoint
export const getCountries = () => {
    return async function (dispatch) {
        try{
        const dbData = await axios.get(
            "http://localhost:3001/countries/"
        );
        const countries = dbData.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
        alert('The api countries it doesnt work');
        console.log(error);
    }
    };
};

//! Esta función trae un country por id desde el endpoint
export const getCountryById = (countryId) => {
    return function (dispatch) {
        fetch(`http://localhost:3001/countries/?id=${countryId}`)
            .then(response => response.json())
            .then((data) => {
                // console.log("Este es el contenido de data",data); // Agregar aquí el console.log
                dispatch({ type: GET_COUNTRY_BY_ID, payload: data });
            });
    };
};


export const countryByName = (countries) => {
    return {
        type: COUNTRY_BY_NAME,
        payload: countries
    }
}

/*
export const filterBySource = () => {
    dispatch ({ type: "FILTER_BY_SOURCE"});
};
*/
