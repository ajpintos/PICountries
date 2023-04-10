import {Link} from 'react-router-dom';
import React from 'react';
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/logo.png";

function NavBar({onSearch}) {
    return (

        <div className={style.navBar}>
            <div className={style.columna1}>
            <Link to="/home">
                <img className={style.logo} src={logo} alt="Logo" width={100} />
            </Link>
            </div>
            <div className={style.columna2}>
                <SearchBar onSearch={onSearch}/>
            </div>

            <div className={style.columna3}>
                <p><Link to="/">HOME</Link></p>
            </div>

            <div className={style.columna4}>
                <p><Link to="/create">CREATE ACTIVITY</Link></p>
            </div>
        </div>
    );
}

export default NavBar;