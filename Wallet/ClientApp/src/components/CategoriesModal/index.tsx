import React from 'react'
import Modal from 'react-modal'
import { ICategory, ICategoryDTO } from "../../types/category.type"
import Input from '../InputForm'
import Button from '../Button'

interface ICategoriesModalProps {
    categories: ICategory[]
    categoryToAdd: ICategoryDTO
    isOpen: boolean
    handleAddCategory: () => void
    handleUpdateCategory: (id: number) => void
    handleDeleteCategory: (id: number) => void
    handleChangeCategory: (id: number, name: string | null, value: string) => void
    handleChangeCategoryToAdd: (e: React.FormEvent<HTMLInputElement>) => void
}

interface ICategoryRowProps {
    category: ICategory | ICategoryDTO
    type: string
    onSubmit: () => void
    onDelete?: () => void
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void
}

const CategoryRow: React.FC<ICategoryRowProps> = ({category, type , onSubmit, onDelete, handleChange}) => {
    return (
        <div className="category-row">
            <Input placeholder="Nazwa" name="name" value={category.name} onInput={handleChange}/>
            <Input type="color" name="color" value={category.color} onInput={handleChange}/>
            <Button onClick={onSubmit}>Zapisz</Button>
            {type === 'update' ? <Button onClick={onDelete} variant="error">Usuń</Button> : ''}
        </div>
    )
}

const CategoriesModal: React.FC<ICategoriesModalProps> = ({categories, categoryToAdd, isOpen, handleAddCategory, handleChangeCategory, handleChangeCategoryToAdd, handleUpdateCategory, handleDeleteCategory}) => {
    return (
        <Modal isOpen={isOpen}>
            <CategoryRow category={categoryToAdd} type="save" onSubmit={handleAddCategory} handleChange={handleChangeCategoryToAdd} />
            { categories.map(el => 
                <CategoryRow key={`category-row-${el.id}`} category={el} type="update" handleChange={(evt) => handleChangeCategory(el.id, evt.currentTarget.getAttribute('name'), evt.currentTarget.value)} onSubmit={() => handleUpdateCategory(el.id)} onDelete={() => handleDeleteCategory(el.id)}/>
            )}
        </Modal>
    )
}

export default CategoriesModal