import React from 'react'
import { ITransaction } from "../../types/transaction.model"
import TableRow from '../TableRow';
import TableHeader from '../TableHeader'

interface ITableProps {
    data: ITransaction[];
    children?: React.ReactNode;
}

function mapRows (data: ITransaction[]): React.ReactNode {
    
    return data.map((el, i) => <TableRow key={`row-${i}`} data={el}/>)
}

const Table = ({data}: ITableProps) => {
    console.log(data)
    return (
        <table>
            <TableHeader />
            <tbody>
                {data.map((el, i) => <TableRow key={`row-${i}`} data={el}/>)}
            </tbody>
        </table>
    )
}

export default Table