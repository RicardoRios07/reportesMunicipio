import React from 'react'
import PropTypes from 'prop-types'

import { Box, CircularProgress } from '@mui/material'

const SuspenseLoader = ({ position }) => {
	return (
		<Box sx={{
			position,
			left: 0,
			top: 0,
			width: '100%',
			height: '100%'
		}}
			display="flex"
			alignItems="center"
			justifyContent="center" >
			<CircularProgress size={64} disableShrink thickness={3} />
		</Box>
	)
}

SuspenseLoader.propTypes = {
	position: PropTypes.string
}

SuspenseLoader.defaultProps = {
	position: 'fixed'
}

export default SuspenseLoader