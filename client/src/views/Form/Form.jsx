import {useEffect, useState} from 'react'
import axios from "axios";
import style from "./Form.module.css"
import {useSelector} from "react-redux";
import {mergeArrays} from "../../helpers";
import {logDOM} from "@testing-library/react";


const Form = () => {

    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
    })

    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: [],
    })

    const [countryName, setCountryName] = useState({
        countriesSelected: [],
    })

    //!Creo id estado local donde se guardar los nombres de los paises del selected del Form
    const countriesName = countryName.countriesSelected;


    //! guardo id estado global de countries en una constante
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
    const [renderSelect, setRenderSelect] = useState('')

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
        // validate({...form, [property]: value});
        //! Elimina id delay de la validación
        setForm({...form, [property]: value});
        validate({...form, [property]: value});
    }

    //! Guardo en una constante los arrays obtenidos de los estados
    const arrayForm = form.country
    console.log("Este es id contenido del arrayForm: ", arrayForm)
    const arrayCountries = countriesName;
    console.log("Este es id contenido del arrayCountries: ", arrayCountries)

    const arrayObj = arrayForm.map((el, index) => {
        return { id: el, name: arrayCountries[index] };
    });


    const validate = (form) => {
        let errors = {};
        if (form.name.length < 3) {
            setErrors({...errors, name: ""})
        } else {
            setErrors({...errors, name: "Name must be at least 3 characters long"})
        }
        if (form.difficulty.length < 1 || form.difficulty > 5) {
            setErrors({...errors, difficulty: ""})
        } else {
            setErrors({...errors, difficulty: "Difficulty must be between 1 and 5"})
        }
        if (form.duration < 1 || form.duration > 24) {
            setErrors({...errors, duration: ""})
        } else {
            setErrors({...errors, duration: "Duration must be between 1 and 24"})
        }
        if (form.season) {
            setErrors({...errors, season: ""})
        } else {
            setErrors({...errors, season: "Season must be Summer, Autumn, Winter or Spring"})
        }
        if (form.country) {
            setErrors({...errors, country: ""})
        } else {
            setErrors({...errors, country: "Country must be fulfilled"})
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
                <h1>Add your Activity</h1>
                <div>
                    <label>Name: </label>
                    <div><input className={style.inputForm} type="text" value={form.name} onChange={changeHandler}
                                name="name"></input></div>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Difficulty (1:Easy, 5: Hard): </label>
                    <div>
                        <input
                            id="difficulty"
                            type="range"
                            min="1"
                            max="5"
                            value={form.difficulty}
                            onChange={changeHandler}
                            name="difficulty"
                        ></input>
                        <span>{form.difficulty}</span>
                    </div>
                    {errors.difficulty && <span>{errors.difficulty}</span>}
                </div>
                <div>
                    <label>Duration (in Hours): </label>
                    <div><input className="style.duration" min="0" max="24" type="number" placeholder="Duration"
                                id="duration" value={form.duration} onChange={changeHandler} name="duration"></input>
                    </div>
                    {errors.duration && <span>{errors.duration}</span>}
                </div>
                <div>
                    <label>Season: </label>
                    <select className="style.season" name="season" value={form.season} onChange={changeHandler}>
                        <option disabled="" value="None" selected="">Select Season</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                    {errors.season && <span>{errors.season}</span>}
                </div>
                <div>
                    <label>Country: </label>
                    <select onChange={(event) => handleSelect(event)}>
                        {countries.map((country) => (
                            <option value={country.id}>{country.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Enviar</button>

            </form>
            {arrayObj.map((el) => (
                <div className={style.selectCountriesMiniCards}>
                    {/*{console.log(`Este es el contenido ANTERIOR de id ${el.id} y name ${el.name}`)}*/}
                    <p>{el.name}</p>
                    <button className={style.buttonX} onClick={() => handleDelete(el.id,el.name)}> x</button>
                </div>
            ))}
        </div>
    )
}

export default Form
