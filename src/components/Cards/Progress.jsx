import React from 'react'
import PropTypes from 'prop-types'
import { Card, Stack, Typography } from '@mui/material'
import CircularProgressWrapper from 'src/components/CircularProgress'

const CardProgress = ({ title, description, color, textValueProgress, valueProgress, size }) => {
	return (
		<Card sx={{
			flexDirection: 'row',
			display: 'flex',
			justifyContent: 'center',
			p: 2,
			minWidth: 250,
			justifyContent: 'space-between',
		}}>
			<Stack spacing={1}>
				<Typography variant='subtitle1'>{title.toUpperCase()}</Typography>
				<Typography variant='h3'>{description}</Typography>
			</Stack>
			<CircularProgressWrapper
				color={color}
				textValueProgress={textValueProgress}
				valueProgress={valueProgress}
				size={size} />
		</Card>
	)
}

CardProgress.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,

	color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info']),
	textValueProgress: PropTypes.string.isRequired,
	valueProgress: PropTypes.number.isRequired,
	size: PropTypes.number
}

export default CardProgress