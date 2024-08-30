import React from 'react'
import PropTypes from 'prop-types'
import { Backdrop, useTheme } from '@mui/material'
import SuspenseLoader from '../SuspenseLoader'

const BackdropWrapper = ({ open }) => {

	const theme = useTheme()

	return (
		<Backdrop
			sx={{
				bgcolor: theme.palette.mode === 'dark' ? theme.colors.alpha.white[70] : theme.colors.alpha.black[30],
				zIndex: theme.zIndex.drawer + 1,
				'& .MuiCircularProgress-root': {
					color: theme.palette.mode === 'dark' ? theme.colors.alpha.black[100] : theme.colors.alpha.white[100]
				}
			}}
			open={open}>
			<SuspenseLoader />
		</Backdrop>
	)
}

BackdropWrapper.propTypes = {
	open: PropTypes.bool.isRequired
}

export default BackdropWrapper