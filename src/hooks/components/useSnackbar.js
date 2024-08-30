import { useState } from 'react'

export const useSnackbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return {
        isOpen,
        handleOpen,
        handleClose
    }
}
