import React from 'react'
import PropTypes from 'prop-types'

import { Avatar, Card, Stack, Typography, useTheme } from '@mui/material'
import { RiCheckFill, RiErrorWarningFill, RiInformationFill } from '@remixicon/react'

const AlertWrapper = ({ type, text }) => {

	const theme = useTheme()
	const objectIcon = {
		info: <RiInformationFill color='white' />,
		success: <RiCheckFill color='white' />,
		error: <RiErrorWarningFill color='white' />,
		warning: <RiErrorWarningFill color='white' />
	}
	const color = theme.palette.mode === 'dark' ? theme.colors[type].main : theme.colors[type].light
	return (
		<Card sx={{
			p: 1,
			borderLeft: `6px solid ${color}`,
			my: 2
		}}>
			<Stack
				direction='row'
				spacing={2}>
				<Avatar sx={{ background: color }}>
					{objectIcon[type]}
				</Avatar>
				<Typography variant='body1' alignSelf='center' fontWeight={500}>
					{text}
				</Typography>
			</Stack>
		</Card>
	)
}

AlertWrapper.propTypes = {
	type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
	text: PropTypes.string.isRequired
}

AlertWrapper.defaultProps = {
	type: 'info'
}

export default AlertWrapper