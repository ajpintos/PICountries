import React, {useState} from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {


    const [searchInput, setSearchInput] = useState("");
    const changeHandler = (event) => {
        setSearchInput(event.target.value);
        console.log(searchInput);
    }

    return (
        <div className={style.searchBar}>
            <input className={style.input} type="text" name="search" id="search" placeholder="Search by Name" onChange={changeHandler}/>
            <button className={style.button} onClick={() => onSearch(searchInput)}>Search</button>
        </div>
    );
};
