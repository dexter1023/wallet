import axios from '../plugins/axios'
import { ITransaction, ITransactionDTO, ITransactionFilters } from '../types/transaction.model'

export class TransactionService {
  async getTransactions(params: ITransactionFilters): Promise<ITransaction[]> {
    try {
      const { data } = await axios.get<ITransaction[]>('/transactions', { params })
      return data
    } catch (e) {
      throw e
    }
  }

  async createTransaction(payload: ITransactionDTO): Promise<ITransaction> {
    try {
      const { data } = await axios.post<ITransaction>('/transactions', payload)
      return data
    } catch (e) {
      throw e
    }
  }

  async updateTransaction(payload: ITransaction): Promise<ITransaction> {
    try {
      const { data } = await axios.put<ITransaction>(`/transactions/${payload.id}`, payload)
      return data
    } catch (e) {
      throw e
    }
  }
  async deleteTransaction(id: number): Promise<any> {
    try {
      const { data } = await axios.delete(`/transactions/${id}`)
      return data
    } catch (e) {
      throw e
    }
  }
}
