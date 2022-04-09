import {Link} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Stocks from '../../pages/Stocks/Stocks';
import About from '../../pages/About/About';

export default function Nav(props) {
    return (
        <ul>
            <li><Link to='/'>iStocks</Link></li>
            <li><Link to='/stocks'>Stocks</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    )
}