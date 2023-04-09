import React, {useState} from 'react';

export default function SearchBar({onSearch}) {


    const [searchInput, setSearchInput] = useState("");
    const changeHandler = (event) => {
        setSearchInput(event.target.value);
        console.log(searchInput);
    }

    return (
        <div>
            <input type="text" name="search" id="search" placeholder="Search by Name" onChange={changeHandler}/>
            <button onClick={() => onSearch(searchInput)}>Search</button>
        </div>
    );
};
