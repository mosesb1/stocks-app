import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import companies from "../../data";

export default function Prices(props) {
    const [data, setData] = useState(null);
    const [company, setCompany] = useState(null);
    const apiKey = '0ad3a491ff510d0641e1dd8c1038e941';
    const params = useParams();
    const symbol = params.symbol;

    const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`;

    const getCompany = () => {
        let index;
        companies.forEach((comp, idx) => {
            if(comp.symbol === symbol) {
                index = idx;
            }
        })
        setCompany(companies[index]);
    }

    const getData = async () => {
        try{
            const response = await fetch(url);
            const apiData = await response.json();
            setData(apiData);
        } catch (err) {
            console.error(err);
        }
    }

    const loaded = () => {
        return (
            <div>
                <h2>Name: {company.name}</h2>
                <h2>Price: {data[0].price}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    useEffect(() => {
        getData();
        getCompany();
    },[])

    return data && company ? loaded() : loading();


}