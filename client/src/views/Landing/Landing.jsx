import style from "./Landing.module.css"
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div className={style.landing}>
            <h1>All the countries of the world in the palm of your hand.<br/>
                Explore the countries and their activities</h1>
            <Link to="/home">
            <button className={style.btn}>START THE JOURNEY</button>
            </Link>
        </div>
    )
}

export default Landing