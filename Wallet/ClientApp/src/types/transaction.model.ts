import { IEnumKeys } from '../enums/enum-keys'
import { ICategory } from './category.type'
import { IPagination } from './pagination.type'

export interface ITransaction extends IEnumKeys {
  id: number
  title: string
  amount: number
  type: string
  category: ICategory
}

export interface ITransactionDTO {
  title: string
  amount: number
  type: string
  categoryId: number
}

export interface ITransactionFilters extends IPagination {
  selectedCategories: number[]
}
