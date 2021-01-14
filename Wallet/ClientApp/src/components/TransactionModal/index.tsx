import React from 'react'
import Modal from '../Modal'
import { ICategory } from "../../types/category.type"
import { ITransactionDTO } from "../../types/transaction.model"
import Input from '../InputForm'
import Select, {IOption} from '../SelectForm'
import Button from '../Button'

interface ITransactionModalProps {
    isOpen: boolean
    data: ITransactionDTO
    categories: ICategory[]
    handleClose: () => void
    handleSubmit: (e: React.FormEvent<EventTarget>) => void
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export function mapCategories(categories: ICategory[]): IOption[] {
    return categories.map(el => ({text: el.name, value: el.id}))
}

export const actionOptions: IOption[] = [
    {
        text: 'Wpłata',
        value: 'deposit'
    },
    {
        text: 'Wydatek',
        value: 'payment'
    }
]

export const TransactionModal: React.FC<ITransactionModalProps> = ({isOpen, categories, handleClose, handleChange, handleSubmit}) => {
    return (
        <Modal isOpen={isOpen} handleClose={handleClose}>
            <form onSubmit={handleSubmit} className="flex column">
                <Input label="Tytuł" placeholder="Tytuł" id="title" name="title" onInput={handleChange} required/>
                <Input label="Wartość" placeholder="Wartość" type="number" id="amount" name="amount" onInput={handleChange} required/>
                <Select label="Akcja" options={actionOptions} onInput={handleChange} required></Select>
                <Select label="Kategoria" name="categoryId" options={mapCategories(categories)} onInput={handleChange} required></Select>
                <Button>Zapisz</Button>
            </form>
        </Modal>
    )
}