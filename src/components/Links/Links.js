import {Link} from 'react-router-dom';

export default function Links({companies}) {
    const links = [];
    companies.forEach((company, idx) => {
        links.push(<li key={idx}><Link to={`/stocks/${company.symbol}`}>{company.name}</Link></li>)
    })
    return (
        <ul>
            {links}
        </ul>
    )
}