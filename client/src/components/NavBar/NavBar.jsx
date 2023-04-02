import {Link} from 'react-router-dom';
import React from 'react';
import style from './NavBar.module.css';

function NavBar(props) {
    return (
        /*<div className={style.navBar}>
            <Link to="/">HOME</Link>
            <Link to="/create">FORM</Link>
        </div>*/

        <div className={style.navBar}>
            <div className={style.columna1}>
                <p>Logo</p>
            </div>

            <div className={style.columna2}>
                <p>Searchbar</p>
            </div>

            <div className={style.columna3}>
                <p><Link to="/">HOME</Link></p>
            </div>

            <div className={style.columna4}>
                <p><Link to="/create">FORM</Link></p>
            </div>
        </div>
    );
}

export default NavBar;