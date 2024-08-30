import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const BaseLayout = ({ children }) => {
	return (
		<Box sx={{
			flex: 1,
			height: '100%'
		}}>
			{
				children || <Outlet />
			}
		</Box>
	)
}

BaseLayout.propTypes = {
	children: PropTypes.node
}

export default BaseLayout