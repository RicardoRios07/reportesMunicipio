import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, useTheme } from '@mui/material'

const AvatarWrapper = ({ color, spacing, children, variant }) => {
    const theme = useTheme()

    return (
        <Avatar
            variant={variant}
            sx={{
                backgroundColor: theme.palette[color].main,
                color: theme.palette[color].contrastText,
                width: theme.spacing(spacing),
                height: theme.spacing(spacing),
                boxShadow: theme.colors.shadows[color]
            }}>
            {children}
        </Avatar>
    )
}
AvatarWrapper.propTypes = {
    color: PropTypes.oneOf(['success', 'info', 'error', 'warning', 'primary']),
    spacing: PropTypes.number,
    variant: PropTypes.string,
    children: PropTypes.node
}
AvatarWrapper.defaultProps = {
    color: 'primary',
    spacing: 8,
    variant: 'rounded'
}
export default AvatarWrapper