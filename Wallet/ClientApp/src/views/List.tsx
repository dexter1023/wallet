import React, {useState, useEffect, useMemo} from 'react';
import Table from '../components/Table';
import {TransactionService} from '../services/transaction.service'
import { ITransaction } from "../types/transaction.model";

export const List: React.FC = () => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const transactionService = useMemo(() => new TransactionService(), [])    

    const fetchTransactions = async () => {
        try {
            const data = await transactionService.getTransactions()
            setTransactions(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <Table data={transactions} />
    )
}

export default List