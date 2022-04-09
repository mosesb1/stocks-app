import { useParams, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

export default function Prices({data}) {
    const [company, setCompany] = useState([]);
    const params = useParams();
    const symbol = params.symbol;
    // const location = useLocation();
    // const {company} = location.state;

    const getCompany = async () => {
        setCompany(data.filter(stock => stock.symbol === symbol));
    }

    const getInfo = () => {
        const rows = Object.entries(company[0]).map(([key,value], idx) => {
            return (
                <h2 className={key !== 'changesPercentage' && key !== 'change' ? '' : value < 0 ? 'neg' : 'pos'} key={idx}>{key === 'changesPercentage' ? "Percentage Change" : key}: {key === 'changesPercentage' ? `${Math.round(value*100)/100}%` : value}</h2>
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

    useEffect(() => {
        getCompany();
    },[])

    return data[0] && company[0] ? loaded() : loading();


}