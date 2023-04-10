import style from "./Landing.module.css"
import {Link} from "react-router-dom";
import logo from '../../img/logo.png'

const Landing = () => {
    return (
        <div className={style.landing}>
            <img className={style.logo} src={logo} alt="Logo" width={350} />
            <h1>All the countries of the world in the palm of your hand.<br/>
                Explore the countries and their activities</h1>
            <Link to="/home">
            <button className={style.btn}>START THE JOURNEY</button>
            </Link>
        </div>
    )
}

export default Landing