import {Link} from 'react-router-dom';
import React from 'react';
import style from './NavBar.module.css';

function NavBar(props) {
    return (
        <div className={style.mainContainer}>
            <Link to="/">HOME</Link>
            <Link to="/create">FORM</Link>
        </div>
    );
}

export default NavBar;