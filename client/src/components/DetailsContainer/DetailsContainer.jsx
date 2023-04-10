import Detail from '../../views/Detail/Detail';
import style from './DetailsContainer.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountryById } from '../../redux/actions';
import * as actions from "../../redux/actions";

const DetailsContainer = () => {
    const countryId = useParams().id;
    console.log(`El ID del país es: ${countryId}`);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryById(countryId));
        //TODO solucionar el problema de limpiar el detalle
/*        return () => {
            dispatch(actions.cleanDetail());
        }*/
    }, [dispatch, countryId]);

    const country = useSelector((state) => state.countryById);
    console.log(`Este es el contenido de country ${country}`);

        return (

            <Detail
                name={country[0].name}
                flag={country[0].flag}
                continent={country[0].continent}
                capital={country[0].capital}
                subregion={country[0].subregion}
                area={country[0].area}
                population={country[0].population}
                activities={country[1]}
            />
        );
}

export default DetailsContainer;