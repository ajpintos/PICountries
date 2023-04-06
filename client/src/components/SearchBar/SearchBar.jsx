import React, {useState} from 'react';
import {click} from "@testing-library/user-event/dist/click";

export default function SearchBar({onSearch}) {

    const clickHandler = () => {}
    const [searchInput, setSearchInput] = useState("");
    const changeHandler = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <div>
            <input type="text" name= "search" id="search" placeholder="Search by Name" onChange={changeHandler} />
            <button onClick={()=>onSearch(searchInput)}>Search</button>

        </div>
    );
};
