import {useState} from 'react'
import axios from "axios";
import style from "./Form.module.css"


const Form = () => {

    const [form, setForm] = useState({
        name: "",
        difficulty:"",
        duration: "",
        season: "",
        country:"",
    })

    const [errors, setErrors] = useState({
        name: "",
        difficulty:"",
        duration: "",
        season: "",
        country:"",
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        // validate({...form, [property]: value});
        //! Elimina el delay de la validación
        setForm({...form, [property]: value});
        validate({...form, [property]: value});
    }
    const validate = ( form ) => {
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




// ! Esta función envía los datos al servidor cuado se aprieta el botón enviar
    const submitHandler = (event) => {
        event.preventDefault()
        const response = axios.post("http://localhost:3001/activities", form)
            .then(res => alert("Activity added successfully!"))
            .catch(err => alert(err))
    }

    return (
        <div className={style.form}>
        <form onSubmit={submitHandler}>
            <h1>Add your Activity</h1>
            <div>
                <label>Name: </label>
                <div><input className={style.inputForm} type="text" value={form.name} onChange={changeHandler} name="name"></input></div>
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Difficulty: </label>
                <div><input id="difficulty" type="range" min="1" max="5" value="1" value={form.difficulty}onChange={changeHandler}name="difficulty"></input></div>
                {errors.difficulty && <span>{errors.difficulty}</span>}
            </div>
            <div>
                <label>Duration: </label>
                <div><input className="style.duration" min="0" max="24" type="number" placeholder="Duration" id="duration" value={form.duration}onChange={changeHandler}name="duration"></input></div>
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
                <div> <input className={style.inputForm} type="text" value={form.country} onChange={changeHandler} name="country"></input></div>
                {errors.country && <span>{errors.country}</span>}
            </div>
            <button type="submit">Enviar</button>

        </form>
        </div>)
}

export default Form