import {useState} from 'react'
import axios from "axios";


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
    }
/*    const validate = (form) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
            setErrors({...errors, email: ""})
        } else {
            setErrors({...errors, email: "Hay un error en email"})
        }
    }*/

// ! Esta función envía los datos al servidor cuado se aprieta el botón enviar
    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/activities", form)
            .then(res => alert(res))
            .catch(err => alert(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name"></input>
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Difficulty: </label>
                <input type="text" value={form.difficulty} onChange={changeHandler} name="difficulty"></input>
                <span>{errors.difficulty}</span>
            </div>
            <div>
                <label>Duration: </label>
                <input type="text" value={form.duration} onChange={changeHandler} name="duration"></input>
                <span>{errors.duration}</span>
            </div>
            <div>
                <label>Season: </label>
                <input type="text" value={form.season} onChange={changeHandler} name="season"></input>
                <span>{errors.season}</span>
            </div>
            <div>
                <label>Country: </label>
                <input type="text" value={form.country} onChange={changeHandler} name="country"></input>
                <span>{errors.country}</span>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form