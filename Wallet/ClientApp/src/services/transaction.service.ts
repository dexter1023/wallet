import axios from '../plugins/axios'
import { ITransaction } from '../types/transaction.model'

export class TransactionService {
  async getTransactions(): Promise<ITransaction[]> {
    try {
      const { data } = await axios.get<ITransaction[]>('/transactions')
      return data
    } catch (e) {
      throw e
    }
  }

  async createTransaction(payload: ITransaction): Promise<ITransaction> {
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
}
