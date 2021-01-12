import React, { useState } from 'react'
import { TransactionTypeEnum } from "../../enums/transaction-type.enum"
import { ICategory } from "../../types/category.type"
import { ITransaction } from "../../types/transaction.model"
import Button from '../Button'
import Input from '../InputForm'
import Select from '../SelectForm'
import { actionOptions, mapCategories } from "../TransactionModal"
import './index.css'

interface ITableRowProps {
    data: ITransaction
    categories: ICategory[]
    handleEdit: (id: number) => void
    handleDelete: (id: number) => void
    handleChangeTransaction: (id: number, name: string | null, value: string | number) => void
}

interface IDataRowProps {
    data: ITransaction
}

interface IEditRowProps {
    data: ITransaction,
    categories: ICategory[]
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const DataRow: React.FC<IDataRowProps> = ({data}) => (
     <>
        <td>{data.title}</td>
        <td>{data.amount}</td>
        <td>{TransactionTypeEnum[data.type]}</td>
        <td>{data.category.name}</td>
    </>
)

const EditRow: React.FC<IEditRowProps> = ({data, handleChange, categories}) => {
    return (
        <>
            <td><Input placeholder="Tytuł" id="title" name="title" onInput={handleChange} required/></td>
            <td><Input placeholder="Wartość" id="amount" name="amount" onInput={handleChange} required/></td>
            <td><Select options={actionOptions}></Select></td>
            <td><Select name="categoryId" options={mapCategories(categories)}></Select></td>
        </>
    )
}

const TableRow: React.FC<ITableRowProps> = ({data, categories, handleDelete, handleEdit, handleChangeTransaction}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const submitEdit = (id: number) => {
        handleClickEdit()
        handleEdit(id)
    }
    const handleClickEdit = () => {
        setIsEdit(!isEdit)
    }

    return (
        <tr className="table-row" style={{color: data.category.color}}>
            {isEdit ?  <EditRow data={data} categories={categories} handleChange={(e) => handleChangeTransaction(data.id, e.currentTarget.getAttribute('name'), e.currentTarget.value)} /> : <DataRow data={data} />}
            <td className="flex space-around"><Button onClick={() => isEdit ? submitEdit(data.id) : handleClickEdit()}>{isEdit ? 'Zapisz' : 'Edytuj'}</Button><Button variant="error" onClick={() => handleDelete(data.id)}>Usuń</Button></td>
        </tr>
    )
}

export default TableRow
