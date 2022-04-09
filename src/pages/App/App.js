import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';
import Stocks from '../Stocks/Stocks';
import Prices from '../Prices/Prices';
import About from '../About/About';
import companies from '../../data';

export default function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main className='App'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/stocks' element={<Stocks companies={companies}/>}/>
                    <Route path='/stocks/:symbol' element={<Prices companies={companies}/>}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
            </main>
        </>
    )
}