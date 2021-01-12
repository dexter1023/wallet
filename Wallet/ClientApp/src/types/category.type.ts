import { IEnumKeys } from '../enums/enum-keys'

export interface ICategory extends IEnumKeys {
  id: number
  name: string
  color: string
}

export interface ICategoryDTO {
  name: string
  color: string
}
