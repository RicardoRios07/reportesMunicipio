import { useEffect, useState } from 'react'
import { useApiPromise } from './useApiPromise'
import { useDialog } from './components/useDialog'
import { useSnackbar } from './components/useSnackbar'

export const useUsers = () => {
    // hooks
    const {
        isOpen,
        handleOpen,
        handleClose,

    } = useDialog()
    const {
        isOpen: isOpenSnack,
        handleClose: handleCloseSnack,
        handleOpen: handleOpenSnack
    } = useSnackbar()
    const { handleApiPromise } = useApiPromise()
    //states
    const [users, setUsers] = useState({ code: null, data: null, message: '', loading: true })
    const [showForm, setShowForm] = useState('formStatus')
    const [dataUser, setDataUser] = useState(null)

    // gets all users//
    const handleUsers = async () => {
        setUsers({ code: null, data: null, message: '', loading: true })
        const additionalData = {}
        const response = await handleApiPromise({ endPoint: 'getAllUsers', additionalData })
        const { code, data, message } = response
        setUsers({ code: code, data: data, message: message, loading: false })
    }
    // change state users//
    const handleChangeStateUser = async (idUser, state) => {
        const useState = state ? 'unblock' : 'block'
        const additionalData = {
            _id: idUser,
            status: useState
        }
        const response = await handleApiPromise({ endPoint: 'changeStatusUser', additionalData })
        const { code } = response;
        if (code === 200) {
            handleUsers()
        }
        setDataUser(response)
        handleClose()
        handleOpenSnack()
    }

    // modals actions //
    // Change Status modal
    const handleOpenChangeStatus = ({ dataUser }) => {
        setShowForm('formStatus')
        setDataUser(dataUser)
        handleOpen()

    }
    const handleCloseChangeStatus = () => {
        handleClose()
    }
    // View details Users
    const handleOpenDetailsUser = ({ dataUser }) => {
        setDataUser(dataUser)
        setShowForm('viewDetails')
        handleOpen()
    }
    const handleCloseDetailsUser = () => {
        handleClose()
    }
    useEffect(() => {
        handleUsers()
    }, [])

    return {
        users,
        isOpen,
        dataUser,
        showForm,
        isOpenSnack,
        handleCloseSnack,
        handleChangeStateUser,
        handleOpenChangeStatus,
        handleCloseChangeStatus,
        handleOpenDetailsUser,
        handleCloseDetailsUser,
    }
}

