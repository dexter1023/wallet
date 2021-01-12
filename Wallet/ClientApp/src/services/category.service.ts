import axios from '../plugins/axios'
import { ICategory, ICategoryDTO } from '../types/category.type'

export class CategoryService {
  async getCategories(): Promise<ICategory[]> {
    try {
      const { data } = await axios.get<ICategory[]>('/categories')
      return data
    } catch (e) {
      throw e
    }
  }

  async createCategory(payload: ICategoryDTO): Promise<ICategory> {
    try {
      const { data } = await axios.post<ICategory>('/categories', payload)
      return data
    } catch (e) {
      throw e
    }
  }

  async updateCategory(payload: ICategory): Promise<ICategory> {
    try {
      const { data } = await axios.put<ICategory>(`/categories/${payload.id}`, payload)
      return data
    } catch (e) {
      throw e
    }
  }

  async deleteCategory(id: number): Promise<ICategory> {
    try {
      const { data } = await axios.delete(`/categories/${id}`)
      return data
    } catch (e) {
      throw e
    }
  }
}
