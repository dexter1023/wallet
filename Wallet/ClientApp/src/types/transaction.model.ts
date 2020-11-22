import { ICategory } from './category.type'

export interface ITransaction {
  id?: number
  title: string
  amount: string
  type: string
  category: ICategory
}
