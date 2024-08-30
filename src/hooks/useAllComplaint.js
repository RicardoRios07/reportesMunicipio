import { useState, useEffect } from "react"
import { useApiPromise } from "./useApiPromise"
import { useDialog } from "./components/useDialog"
import { useSnackbar } from "./components/useSnackbar"

export const useAllComplaint = () => {
    // States//
    const [complaints, setComplaints] = useState({ code: null, data: null, message: '', loading: false })
    const [complaintSelected, setComplaintSelected] = useState(null)
    const [showForm, setShowForm] = useState('formDelete')
    //hooks//
    const { handleApiPromise } = useApiPromise()

    const {
        isOpen,
        handleOpen,
        handleClose,
    } = useDialog()

    const { isOpen: isOpenSnack,
        handleClose: handleCloseSnack,
        handleOpen: handleOpenSnack
    } = useSnackbar()

    //Get all complaints//
    const handleGetAllComplaints = async () => {
        setComplaints({ code: null, data: null, message: '', loading: true })
        const additionalData = {}
        const response = await handleApiPromise({
            endPoint: 'getAllDenuncias', additionalData
        })
        const { code, message, data } = response
        setComplaints({ code: code, data: data, message: message, loading: false })
    }
    useEffect(() => {
        handleGetAllComplaints()
    }, [])
    // delete complaint
    const handleChangeStateComplaint = async (idComplaint) => {
        const additionalData = {
            id: idComplaint
        }
        const response = await handleApiPromise({
            endPoint: 'deleteDenuncia',
            additionalData
        })
        setComplaintSelected(response)
        const { code } = response
        if (code === 200) {
            handleGetAllComplaints()
        }
        handleClose()
        handleOpenSnack()

    }
    // change state complaint 
    const handleStateComplaint = async (data) => {
        const additionalData = {
            _id: data._id,
            estado: data.state
        }
        const response = await handleApiPromise({
            endPoint: 'estadoDenuncia',
            additionalData
        })
        const { code } = response
        setComplaintSelected(response)
        if (code === 200) {
            handleGetAllComplaints()
        }
        handleOpenSnack()
        handleClose()
    }
    //Modals
    const handleOpenDeleteComplaint = ({ dataComplaint }) => {
        setShowForm('formDelete')
        setComplaintSelected(dataComplaint)
        handleOpen()
    }
    const handleCloseDeleteComplaint = () => {
        setComplaintSelected(null)
        handleClose()
    }

    const handleOpenDetailsComplaint = ({ dataComplaint }) => {
        setShowForm('formDetails')
        setComplaintSelected(dataComplaint)
        handleOpen()
    }

    const handleCloseDetailsComplaint = () => {
        setComplaintSelected(null)
        handleClose()
    }

    const handleOpenConfirmChangeState = (id, data) => {
        const dataSelected = {
            _id: id,
            state: data
        }
        setComplaintSelected(dataSelected)
        setShowForm('ConfirmChangeStateComplain')
        handleOpen()

    }
    const handleCloseConfirmChangeState = () => {
        setComplaintSelected(null)
        handleClose()
    }
    return {
        isOpen,
        complaints,
        showForm,
        isOpenSnack,
        handleCloseSnack,
        complaintSelected,
        handleStateComplaint,
        handleOpenDeleteComplaint,
        handleCloseDeleteComplaint,
        handleChangeStateComplaint,
        handleOpenDetailsComplaint,
        handleCloseDetailsComplaint,
        handleOpenConfirmChangeState,
        handleCloseConfirmChangeState
    }

}

