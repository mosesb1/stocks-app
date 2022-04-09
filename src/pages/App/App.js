import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';
import Stocks from '../Stocks/Stocks';
import Prices from '../Prices/Prices';
import About from '../About/About';

export default function App() {
    const [data, setData] = useState(null);
    return (
        <>
            <header>
                <Nav />
            </header>
            <main className='App'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/stocks' element={<Stocks data={data} setData={setData}/>}/>
                    <Route path='/stocks/:symbol' element={<Prices data={data}/>}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
            </main>
        </>
    )
}