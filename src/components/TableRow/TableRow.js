import { Link } from "react-router-dom"

export default function TableRow({symbol, name, change, price, percentChange}){
    return (
        <tr>
            <td><Link to={`/stocks/${symbol}`} state={{company: {name: name, symbol: symbol, change: change, price: price, percentChange: percentChange}}}>{name} ({symbol})</Link></td>
            <td>{price}</td>
            <td className={percentChange > 0 ? 'pos' : 'neg'}>{change} ({Math.round(percentChange*100)/100}%)</td>
        </tr>
    )
}