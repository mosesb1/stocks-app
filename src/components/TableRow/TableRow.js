export default function TableRow({symbol, name, change, price, percentChange}){
    return (
        <tr>
            <td>{name} ({symbol})</td>
            <td>{price}</td>
            <td className={percentChange > 0 ? 'pos' : 'neg'}>{change} ({Math.round(percentChange*100)/100}%)</td>
        </tr>
    )
}