import React, {useState} from 'react'
import './index.css'
import { ICategory, ICategoryDTO } from "../../types/category.type"
import Chip from '../Chip'

interface ICategoriesProps {
    categories: ICategory[]
    selectedCategories: number[]
    handleClickCategory: (id: number) => void
}

export const Categories:React.FC<ICategoriesProps> = ({categories, selectedCategories, handleClickCategory}) => {
    return (
        <>
        <div className="chips-wrapper">
            <div className="chips">
                <h3>Wybrane kategorie</h3>
                {categories.map(el => <Chip key={`chip-${el.id}`} name={el.name} color={el.color} id={el.id} onClick={() => handleClickCategory(el.id)} selected={selectedCategories.includes(el.id)} />)}
            </div>
        </div>
        </>
    )
}

export default Categories