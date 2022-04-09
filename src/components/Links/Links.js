import {Link} from 'react-router-dom';

export default function Links({companies}) {
    const links = companies.map((company, idx) => {
        return(
        <li key={idx}>
            <Link to={`/stocks/${company.symbol}`} state={{company: company}}>
                {company.name}
            </Link>
        </li>
        )
    })
    return (
        <ul>
            {links}
        </ul>
    )
}