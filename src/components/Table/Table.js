import TableRow from '../TableRow/TableRow';

export default function Table({data}) {
    const generateRows = () => {
        const rows = data.map((company, idx) => {
            return (
                <TableRow 
                    key={idx} 
                    symbol={company.symbol} 
                    name={company.name} 
                    change={company.change} 
                    price={company.price} 
                    percentChange={company.changesPercentage}
                />
            )
        })
        return rows
    }

    const loaded = () => {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Company Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                    {generateRows()}
                </tbody>
            </table>
        )
    }

    const loading = () => {
        return <h1>Loading ...</h1>
    }

    return data ? loaded() : loading()
}