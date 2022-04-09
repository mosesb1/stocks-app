import {Link } from 'react-router-dom';
import Links from '../../components/Links/Links';
import companies from '../../data';

export default function Stocks(props) {
    return (
        <Links companies={companies}/>
    )
}