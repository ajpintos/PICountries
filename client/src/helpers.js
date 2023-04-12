import countriesIdsInDataForm from "./views/Form/Form";
//! Funcion que hace merge de los arrays para el form

import {useSelector} from "react-redux";
export function mergeArrays(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j].id) {
                result.push({ id: array2[j].id, name: array2[j].name });
            }
        }
    }
    return result;
}