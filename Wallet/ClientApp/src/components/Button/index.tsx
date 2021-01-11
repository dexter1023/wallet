import React, { ButtonHTMLAttributes } from 'react'
// import './index.scss'


export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, type, ...props}) => {
    return (
        <button {...props}>{children}</button>
    )
}

export default Button