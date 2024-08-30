import React, { useState } from 'react'

export const useDialog = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [dataContent, setDataContent] = useState({ message: '', type: '', icon: '' })

    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setDataContent({ message: '', type: '', icon: '' });
        setIsOpen(false)
    }
    return {
        isOpen,
        dataContent,
        handleOpen,
        handleClose
    }
}

