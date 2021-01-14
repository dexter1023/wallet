import React from 'react'
import './index.css'

interface IModalProps {
    isOpen: boolean
    children: React.ReactNode
    handleClose: () => void
}

const Modal: React.FC<IModalProps> = ({children, isOpen, handleClose}) => {
    return (
        <>
        {isOpen ? 
            <div className="overlay">
                <div className="modal">
                    <div className="close-button" onClick={handleClose}>Zamknij</div>
                    {children}
                </div>
            </div> : ''
        }
        </>
    )
}

export default Modal