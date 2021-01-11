import React from 'react'
import { ITransaction } from "../../types/transaction.model"
import TableRow from '../TableRow';
import TableHeader from '../TableHeader'

interface ITableProps {
    data: ITransaction[];
    children?: React.ReactNode;
}

function mapRows (data: ITransaction[]): React.ReactNode {
    return data.map(el => <TableRow data={el}/>)
}

const Table = ({data}: ITableProps) => {
    return (
        <table>
            <TableHeader />
            {mapRows(data)}
        </table>
    )
}

export default Table