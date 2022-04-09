import Table from '../../components/Table/Table';
import {useState, useEffect} from 'react';

export default function Stocks(props) {
    const [activeData, setActiveData] = useState(null);
    const apiKey = '0ad3a491ff510d0641e1dd8c1038e941';

    const url = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${apiKey}`;

    const getData = async () => {
        try {
            const response = await fetch(url);
            const apiData = await response.json();
            setActiveData(apiData);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    const loaded = () => {
        return (
            <div className='dashboard'>
                <h1>Active Stocks</h1>
                <Table data={activeData}/>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    return activeData ? loaded() : loading();
}