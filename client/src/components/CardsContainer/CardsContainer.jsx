import React, {useState} from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import {useDispatch, useSelector} from "react-redux";
import App from "../../App";
import {filterByContinent, sortByName, sortByPopulation} from "../../redux/actions";

const CardsContainer = () => {
//! ************** FILTROS *********************
    const dispatch = useDispatch()
    function handleFilterByContinent(event) {
        dispatch(filterByContinent(event.target.value))
    }
    function handleSortByName(event) {
        event.preventDefault()
        dispatch(sortByName(event.target.value))
        setOrden(`Ordenado ${event.target.value}`)
    };
    const [orden, setOrden] = useState('')
    function handleSortByPopulation(event) {
        event.preventDefault()
        dispatch(sortByPopulation(event.target.value))
        setOrden(`Ordenado ${event.target.value}`)
    };
//! ************** PAGINADO *********************
    const countries = useSelector(state => state.countries)
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayCountries = countries.slice(pagesVisited, pagesVisited + usersPerPage).map(country => {
        return <Card
            id={country.id}
            name={country.name}
            flag={country.flag}
            continent={country.continent}
        />
    })
    const pageCount = Math.ceil(countries.length / usersPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    const pageNumbers = [];
    for (let i = 0; i < pageCount; i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <div className={style.filters}>
                <h3>Order Alphabetically</h3>
                <select onChange={event => handleSortByName(event)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
                <h3>By Continent</h3>
                <select onChange={event => handleFilterByContinent(event)}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <h3>Order By Population</h3>
                <select onChange={event => handleSortByPopulation(event)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>

            </div>
            <div className={style.container}>
                {displayCountries}
                <div className="pagination">
                    {pageNumbers.map(number => (
                        <button key={number} onClick={() => setPageNumber(number)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>);
}
export default CardsContainer;