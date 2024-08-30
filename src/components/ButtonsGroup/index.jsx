
import React from 'react'
import { Box, Button } from '@mui/material'
import PropTypes from 'prop-types'

const ButtonsGroup = ({
    btnLabelFirst,
    btnActionFirst,
    btnTypeFirst,
    btnDisableFirst,
    btnForm,
    btnLabelSecond,
    btnActionSecond,
    btnDisableSecond
}) => {
    return (
        <Box display='flex' justifyContent='center' mt={3}>
            {
                btnLabelSecond
                &&
                <Button
                    onClick={btnActionSecond}
                    variant='contained'
                    size='large'
                    color='info'
                    disabled={btnDisableSecond}
                    sx={{
                        mr: btnLabelFirst ? 4 : 0,
                        maxWidth: '245px',
                        minWidth: '130px'
                    }}>
                    {btnLabelSecond}
                </Button>
            }
            {
                btnLabelFirst
                &&
                <Button
                    onClick={btnActionFirst}
                    variant='contained'
                    size='large'
                    type={btnTypeFirst}
                    form={btnTypeFirst === 'submit' ? btnForm : ''}
                    disabled={btnDisableFirst}
                    sx={{
                        ml: 0,
                        maxWidth: '245px',
                        minWidth: '130px'
                    }}>{btnLabelFirst}</Button>
            }
        </Box>
    )
}
ButtonsGroup.propTypes = {
    btnLabelFirst: PropTypes.string,
    btnActionFirst: PropTypes.func,
    btnTypeFirst: PropTypes.string,
    btnForm: PropTypes.string,
    btnDisableFirst: PropTypes.bool,
    btnLabelSecond: PropTypes.string,
    btnActionSecond: PropTypes.func,
    btnDisableSecond: PropTypes.bool
}
ButtonsGroup.defaultProps = {
    btnTypeFirst: 'button',
    btnDisableFirst: false,
    btnDisableSecond: false
}
export default ButtonsGroup