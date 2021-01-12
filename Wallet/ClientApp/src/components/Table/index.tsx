import React from 'react'
import { ITransaction } from "../../types/transaction.model"
import TableRow from '../TableRow';
import TableHeader from '../TableHeader'
import './index.css'
import { ICategory } from "../../types/category.type";

interface ITableProps {
    data: ITransaction[];
    children?: React.ReactNode;
    categories: ICategory[]
    handleEdit: (id: number) => void
    handleDelete: (id: number) => void
    handleChangeTransaction: (id: number, name: string | null, value: string | number) => void
}

const Table:React.FC<ITableProps> = ({data, handleEdit, handleDelete, handleChangeTransaction, categories}) => {
    return (
        <table className="table">
            <TableHeader />
            <tbody>
                {data.map((el, i) => <TableRow key={`row-${i}`} data={el} handleDelete={handleDelete} handleChangeTransaction={handleChangeTransaction} handleEdit={handleEdit} categories={categories}/>)}
            </tbody>
        </table>
    )
}

export default Table