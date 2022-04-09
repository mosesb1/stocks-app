import './App.css';
import {Routes, Route} from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Home from '../Home/Home';
import Stocks from '../Stocks/Stocks';
import Prices from '../Prices/Prices';
import About from '../About/About';

export default function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main className='App'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/stocks' element={<Stocks />}/>
                    <Route path='/stocks/:symbol' element={<Prices />}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
            </main>
        </>
    )
}