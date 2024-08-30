import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {

	const theme = useTheme()
	const year = new Date().getFullYear()

	return (
		<Box flex={1}>
			<Box sx={{
				p: { xs: 3, lg: 4 },
				mt: 4,
				borderTop: `1.5px solid ${theme.header.textColor}`,
				display: 'flex',
				justifyContent: 'space-between',
				justifyItems: 'center'
			}}>
				<Typography>
					&copy; {year} Tikee
				</Typography>
			</Box>
		</Box>
	)
}

export default Footer