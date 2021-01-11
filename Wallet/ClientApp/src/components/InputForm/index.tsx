import React from 'react'
import './index.scss'

export const Input:React.FC<React.HTMLProps<HTMLInputElement>> = ({children, ...props}) => (<input {...props} />)

export default Input