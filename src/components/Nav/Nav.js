import {Link} from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav>
            <ul className='nav'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/stocks'>Stocks</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}