import React from 'react'
import './index.css'

interface IChipProps {
    name: string
    id: number
    selected: boolean
    color: string
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Chip: React.FC<IChipProps> = ({name, selected, color, onClick}) => {
    return (
        <div onClick={onClick} className={`chip ${selected ? '' : 'not-selected'}`} style={{backgroundColor: color, boxShadow: `0 0 5px ${color}`}}>
            <span>{name}</span>
        </div>
    )
}

export default Chip