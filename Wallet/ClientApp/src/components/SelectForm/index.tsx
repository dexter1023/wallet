import React from 'react'
import './index.css'

export interface IOption {
    text: string
    value: string | number | undefined
}

interface ISelectProps {
    options: IOption[]
    label?: string
}

export const Select: React.FC<ISelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({options, ...props}) => {
    return (
        <>
            {props.label ? <label htmlFor={props.id}>{props.label}</label> : '' }
            <select {...props} className="select" id={props.id}>
                {options.map(option => <option value={option.value}>{option.text}</option>)}
            </select>
        </>
    )
}

export default Select