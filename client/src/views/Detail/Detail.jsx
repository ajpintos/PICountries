import React, {useState} from 'react';
import Card from '../../components/Card/Card';
import style from './Detail.module.css';
import {useParams} from "react-router-dom";

export default function Detail() {
    const {id} = useParams()
    const [countryDetail, setCountryDetail] = React.useState([{}]);
    React.useEffect(()=>{
        fetch(`http://localhost:3001/countries/?id=${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                setCountryDetail(data);
            })
            .catch((err)=>console.log(err))
        return() =>  setCountryDetail({});
    },[id])
    return (
        <div className={style.container}>
            {countryDetail.map(countryDetail=>{
                return <Card
                    name={countryDetail.name}
                    flag={countryDetail.flag}
                    continent={countryDetail.continent}
                    capital={countryDetail.capital}
                    subregion={countryDetail.subregion}
                    area={countryDetail.area}
                    difficulty={countryDetail.difficulty}
                    duration={countryDetail.duration}
                    season={countryDetail.season}
                />
            })}        </div>
    );
}
