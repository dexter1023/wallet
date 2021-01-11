import React from 'react'
import { TransactionTypeEnum } from "../../enums/transaction-type.enum"
import { ITransaction } from "../../types/transaction.model"


interface ITableRowProps {
    data: ITransaction
}

const TableRow = ({data}: ITableRowProps) => {
    return (
        <tr>
            <td>{data.title}</td>
            <td>{data.category}</td>
            <td>{data.type}</td>
        </tr>
    )
}

export default TableRow