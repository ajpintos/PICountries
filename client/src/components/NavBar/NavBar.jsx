import {Link} from 'react-router-dom';
import React from 'react';
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/logo.png";
import {useDispatch, useSelector} from "react-redux";
import {getCountries} from "../../redux/actions";

function NavBar({onSearch}) {

    const dispatch = useDispatch();

    //! Reset de los filtros en el link HOME
    function handleResetFilters(e) {
        dispatch(getCountries());
        // setCurrentPage(1);
    }

    return (

        <div className={style.navBar}>
            <div className={style.columna1}>
            <Link to="/home" onClick={handleResetFilters}>
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