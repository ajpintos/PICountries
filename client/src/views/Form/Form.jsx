import {useEffect, useState} from 'react'
import axios from "axios";
import style from "./Form.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../../redux/actions";


const Form = () => {

    //! Estado local para guardar los datos del formulario
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
    })

    //! Estado local para guardar los errores de validación del formulario
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
    })


    //! Estado local para guardar los nombres de los paises seleccionados en el select del formulario
    const [countryName, setCountryName] = useState({
        countriesSelected: [],
    })

    //! Guardo los datos del estado del select en una constante
    const countriesName = countryName.countriesSelected;


    //! Guardo id estado global de countries en una constante
    const countries = useSelector(state => state.countries)

    const handleSelect = (event) => {
        setForm({
            ...form,
            country: [...form.country, event.target.value]
        })
        setCountryName({
            ...countryName,
            countriesSelected: [...countryName.countriesSelected, event.target.options[event.target.selectedIndex].text]
        })
    }

    const handleDelete = (id, name) => {
        // console.log(`Esta es el id que llega para borrar ${id} y este es el name ${name}`)
        setForm({
            ...form,
            country: form.country.filter((e) => e !== id)
        })
        setCountryName({
            ...countryName,
            countriesSelected: countryName.countriesSelected.filter((e) => e !== name)
        })
    }

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        //! Elimina id delay de la validación
        setForm({...form, [property]: value});
        setErrors(validate({...form, [property]: value}));
    }

    //! Guardo en una constante los arrays obtenidos de los estados
    const arrayForm = form.country
    // console.log("Este es id contenido del arrayForm: ", arrayForm)
    const arrayCountries = countriesName;
    // console.log("Este es id contenido del arrayCountries: ", arrayCountries)

    const arrayObj = arrayForm.map((el, index) => {
        return {id: el, name: arrayCountries[index]};
    });

    //! Con la carga de la pagina actualizo el estado del estado global countries para que el select del dropdown no
    //! quede vacio

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    //! Función validadora del formulario
    const validate = (form) => {
        let errors = {};
        //? Validación del campo name
        if (!form.name) {
            errors.name = "Name is required";
        } else if (form.name.length < 3) {
            errors.name = "Name must be at least 3 characters long";
        }

        //? Validación del campo difficulty
        if (!form.difficulty) {
            errors.difficulty = "Please select a difficulty";
        }

        //? Validación del campo duration
        if (!form.duration) {
            errors.duration = "Please select a duration";
        }

        //? Validación del campo season
        if (!form.season) {
            errors.season = "Please select a season";
        }

        return errors;
    }


// ! Esta función envía los datos al servidor cuado se aprieta id botón enviar
    const submitHandler = (event) => {
        event.preventDefault()
        const response = axios.post("http://localhost:3001/activities", form)
            .then(res => alert("Activity added successfully!")
                .catch(err => alert(err)))
    }


    return (
        <div className={style.form}>
            <form onSubmit={submitHandler}>
                <h1 id={style.title}>ADD YOUR ACTIVITY</h1>
                <div className={style.divsLabels}>
                    <label htmlFor="name">Name </label>
                    <div>
                </div>
                    <div className={style.divs}><input className={errors.name && style.danger} type="text" value={form.name}
                                onChange={changeHandler}
                                name="name"></input></div>
                    {errors.name && (<p className={style.danger}>{errors.name}</p>)}
                </div>
                    <div className={style.divsLabels}><div>
                    <label htmlFor="difficulty">Difficulty (1:Easy, 5: Hard) </label>
                </div>
                    <div className={style.divs}>
                        <div className={style.difficultyLevel}>{form.difficulty}</div>
                        <input
                            id="difficulty"
                            type="range"
                            min="1"
                            max="5"
                            value={form.difficulty}
                            onChange={changeHandler}
                            name="difficulty"
                            className={style.difficulty}
                        ></input>
                        {errors.difficulty && (<p className={style.danger}>{errors.difficulty}</p>)}
                    </div>
                </div>
                <div>
                    <div className={style.divsLabels}>
                    <label >Duration </label>
                    </div>
                    <div className={style.divs}>
                        <select className="style.duration" value={form.duration} name="duration" defaultValue={'None'}
                                onChange={changeHandler}>
                            <option value="None">Select Duration</option>
                            <option value="1">1 Hour</option>
                            <option value="2">2 Hours</option>
                            <option value="3">3 Hours</option>
                            <option value="4">4 Hours</option>
                            <option value="5">5 Hours</option>
                            <option value="6">6 Hours</option>
                            <option value="7">7 Hours</option>
                            <option value="8">8 Hours</option>
                            <option value="9">9 Hours</option>
                            <option value="10">10 Hours</option>
                            <option value="11">11 Hours</option>
                            <option value="12">12 Hours</option>
                        </select>
                    {errors.duration && (<p className={style.danger}>{errors.duration}</p>)}
                    </div>
                </div>
                <div>
                    <div className={style.divsLabels}>
                    <label className={style.divsLabels}>Season </label>
                    </div>
                    <div className={style.divs}>
                    <select className="style.season" name="season" value={form.season} onChange={changeHandler}
                            defaultValue={'None'}>
                        <option disabled="" value="None" selected="">Select Season</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                    {errors.season && (<p className={style.danger}>{errors.season}</p>)}
                    </div>
                </div>
                <div>
                    <div className={style.divsLabels}>
                    <label>Country </label>
                    </div>
                    <div className={style.divs}>
                    <select onChange={(event) => handleSelect(event)}>
                        {countries.map((country) => (
                            <option value={country.id}>{country.name}</option>
                        ))}
                    </select>
                    {errors.country && (<p className={style.danger}>{errors.country}</p>)}
                    </div>
                    <div className={style.divs}>
                <button type="submit">Enviar</button>
                    </div>
                </div>

            </form>
            <div className={style.countriesSelected}>
            {arrayObj.map((el) => (
                <div className={style.selectCountriesMiniCards}>
                    {/*{console.log(`Este es el contenido ANTERIOR de id ${el.id} y name ${el.name}`)}*/}
                    <p>{el.name}</p>
                    <button className={style.buttonX} onClick={() => handleDelete(el.id, el.name)}> x</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Form
