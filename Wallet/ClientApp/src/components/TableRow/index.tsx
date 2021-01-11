import React from 'react'
import { TransactionTypeEnum } from "../../enums/transaction-type.enum"
import { ITransaction } from "../../types/transaction.model"
import Button from '../Button'

interface ITableRowProps {
    data: ITransaction
}

const TableRow = ({data}: ITableRowProps) => {
    return (
        <tr>
            <td>{data.title}</td>
            <td>{data.category.name}</td>
            <td>{data.type}</td>
            <td><Button>Edytuj</Button></td>
        </tr>
    )
}

export default TableRow
