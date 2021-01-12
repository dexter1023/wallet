import React from 'react'
import './index.css'

interface IButtonProps {
    variant?: string
}

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & IButtonProps> = ({children, variant, ...props}) => {
    return (
        <button className={variant ? `button-${variant}`: 'button'} {...props}>{children}</button>
    )
}

export default Button