import React, {useState, useEffect, useMemo} from 'react';
import Table from '../components/Table';
import {TransactionService} from '../services/transaction.service'
import {CategoryService} from '../services/category.service'
import { ICategory, ICategoryDTO } from "../types/category.type";
import { ITransaction, ITransactionDTO } from "../types/transaction.model";
import Categories from '../components/Categories'
import { TransactionModal } from "../components/TransactionModal";
import CategoriesModal from '../components/CategoriesModal'
import Button from '../components/Button'

const initCategory = {
    name: '',
    color: ''
}

const initTransaction = {
    id: 0,
    title: '',
    categoryId: 0,
    type: 'deposit',
    amount: 0
}

export const List: React.FC = () => {
    const [init, setInit] = useState<boolean>(false)
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const [count, setCount] = useState<number>(0)
    const [transactionToAdd, setTransactionToAdd] = useState<ITransactionDTO>(initTransaction)
    const [transactionModal, setTransactionModal] = useState<boolean>(false)
    const [categories, setCategories] = useState<ICategory[]>([])
    const [selectedCategories, setSelectedCategories] = useState<number[]>([])
    const [categoriesModal, setCategoriesModal] = useState<boolean>(false)
    const [pagination, setPagination] = useState({page: 1, limit: 50})
    const [categoryToAdd, setCategoryToAdd] = useState<ICategoryDTO>(initCategory)
    const transactionService = useMemo(() => new TransactionService(), [])    
    const categoryService = useMemo(() => new CategoryService(), [])

    useEffect(() => {
        fetchTransactions()
        if(!init) {
            fetchCategoriesAndInitSelected()
        }
    }, [selectedCategories])

    const fetchTransactions = async () => {
        try {
            const filters = {
                ...pagination, selectedCategories
            }
            const data = await transactionService.getTransactions(filters)
            setTransactions(data.transactions);
            setCount(data.count)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchCategoriesAndInitSelected = async () => {
        await fetchCategories()
        setSelectedCategories(categories.map(el => el.id))
        setInit(true)
    }
    const fetchCategories = async () => {
        try {
            const data = await categoryService.getCategories()
            setCategories(data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChangeCategory = (id: number, name: string | null, value: string | number) => {
        setCategories(categories.map(el => {
            if(el.id === id && name) {
                el[name] = value
            }
            return el
        }))
    }

    const handleChangeCategoryToAdd = (e: React.FormEvent<HTMLInputElement>) => {
        setCategoryToAdd({
            ...categoryToAdd, [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleClickCategory = (id: number) => {
        if(selectedCategories.includes(id)) {
            setSelectedCategories(selectedCategories.filter(el => el !== id))
        } else {
            setSelectedCategories([...selectedCategories, id])
        }
    }

    const handleOpenCategoriesModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCategoriesModal(!categoriesModal)
    }

    const handleSaveCategory = async () => {
        await categoryService.createCategory(categoryToAdd)
        setCategoryToAdd(initCategory)
    }

    const handleUpdateCategory = async (id: number) => {
        const category = categories.find(el => el.id === id)
        if(category) {
            await categoryService.updateCategory(category)
        }
    }
    
    const handleDeleteCategory = async (id: number) => {
        await categoryService.deleteCategory(id)
    }

    const handleCloseCategoriesModal = () => setCategoriesModal(false)

    const handleChangeTransaction = (id: number, name: string | null, value: string | number) => {
        setTransactions(transactions.map(el => {
            if(el.id === id && name) {
                el[name] = value
            }
            return el
        }))
    }

    const handleEditTransaction = async (id: number) => {
        const transaction = transactions.find(el => el.id === id)
        if(transaction) {
            await transactionService.updateTransaction(transaction)
        }
    }

    const handleDeleteTransaction = async (id: number) => {
        await transactionService.deleteTransaction(id)
        await fetchTransactions()
    }

    const handleOpenTransactionModal = () => {
        setTransactionModal(!transactionModal)
    }

    const handleChangeTransactionToAdd = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTransactionToAdd({
            ...transactionToAdd,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const handleCreateTransaction = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        await transactionService.createTransaction(transactionToAdd)
        setTransactionToAdd(initTransaction)
        setTransactionModal(false)
        fetchTransactions()
    }

    return (
        <>
            <div className="flex">
                <Button onClick={handleOpenTransactionModal}>Dodaj transakcję</Button>
                <Button onClick={handleOpenCategoriesModal}>Zarządzaj kategoriami</Button>
            </div>
            <Categories 
                categories={categories}
                selectedCategories={selectedCategories}
                handleClickCategory={handleClickCategory}
            />
            <div>
                <h3>Sumaryczna kwota transakcji: {count}</h3>
            </div>
            <Table data={transactions} categories={categories} handleEdit={handleEditTransaction} handleDelete={handleDeleteTransaction} handleChangeTransaction={handleChangeTransaction}/>
            <TransactionModal
                data={transactionToAdd}
                categories={categories}
                isOpen={transactionModal}
                handleChange={handleChangeTransactionToAdd}
                handleSubmit={handleCreateTransaction}
                handleClose={handleOpenTransactionModal}
            />
            <CategoriesModal
                categories={categories}
                categoryToAdd={categoryToAdd}
                isOpen={categoriesModal}
                handleClose={handleCloseCategoriesModal}
                handleAddCategory={handleSaveCategory}
                handleUpdateCategory={handleUpdateCategory}
                handleChangeCategory={handleChangeCategory}
                handleChangeCategoryToAdd={handleChangeCategoryToAdd}
                handleDeleteCategory={handleDeleteCategory}
            />
        </>
    )
}

export default List