import { useParams, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

export default function Prices({data}) {
    const params = useParams();
    const symbol = params.symbol;
    const location = useLocation();
    const {company} = location.state;


    const getInfo = () => {
        const rows = Object.entries(company).map(([key,value], idx) => {
            return (
                <h2 className={key !== 'percentChange' && key !== 'change' ? '' : value < 0 ? 'neg' : 'pos'} key={idx}>{key === 'percentChange' ? "Percentage Change" : key}: {key === 'changesPercentage' ? `${Math.round(value*100)/100}%` : value}</h2>
            )
        })
        return rows
    }

    const loaded = () => {
        return (
            <div>
                {getInfo()}
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    return company ? loaded() : loading();


}