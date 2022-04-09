import { useParams, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

export default function Prices(props) {
    const [data, setData] = useState(null);
    const apiKey = '0ad3a491ff510d0641e1dd8c1038e941';
    const params = useParams();
    const symbol = params.symbol;
    const location = useLocation();
    const {company} = location.state;

    const url = `https://financialmodelingprep.com/api/v3/quote-short/${symbol}?apikey=${apiKey}`;



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
    },[])

    return data ? loaded() : loading();


}