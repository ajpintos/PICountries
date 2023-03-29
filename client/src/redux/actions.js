import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';

export const getCountries = () => {
    return async function (dispatch) {
        try{
        const dbData = await axios.get(
            "http://localhost:3001/countries/"
        );
        const users = dbData.data;
        dispatch({ type: GET_COUNTRIES, payload: users });
    } catch (error) {
        alert('The api countries it doesnt work');
        console.log(error);
    }
    };
};