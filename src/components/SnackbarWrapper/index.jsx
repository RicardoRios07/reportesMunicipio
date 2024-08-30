import { Snackbar } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import AlertWrapper from '../Alert'


const SnackbarWrapper = ({ open, handleClose, type, text, duration }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            autoHideDuration={duration}
            sx={{
                top: theme => `${theme.header.height} !important`
            }}>
            <div>
                <AlertWrapper type={type} text={text} />
            </div>
        </Snackbar>
    )
}
SnackbarWrapper.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    text: PropTypes.string.isRequired,
    duration: PropTypes.number
}

SnackbarWrapper.defaultProps = {
    type: 'info',
    duration: 6000
}

export default SnackbarWrapper