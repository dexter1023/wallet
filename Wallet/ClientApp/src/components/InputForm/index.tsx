import React from 'react'
import './index.css'

export const Input:React.FC<React.HTMLProps<HTMLInputElement>> = ({children, ...props}) => (
    <>
        {props.label ? <label htmlFor={props.id} className="label">{props.label}</label> : '' }
        <input {...props} className="input" />
    </>
)

export default Input