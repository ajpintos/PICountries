import React, {useState} from 'react';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import {useSelector} from "react-redux";

const CardsContainer = () => {
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
    );
}
export default CardsContainer;