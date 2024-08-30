import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@emotion/react'
import { Box, CircularProgress, Typography, circularProgressClasses } from '@mui/material'

const CircularProgressWrapper = ({ color, textValueProgress, valueProgress, size }) => {
	const theme = useTheme()
	return (
		<Box display="inline-flex" position="relative">
			<Box
				sx={{
					animationDuration: '550ms',
					position: 'absolute',
					left: 0,
					top: 0,
					bottom: 0,
					right: 0,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<Typography
					sx={{
						color: `${theme.colors[color].main}`
					}}
					variant="h4">
					{textValueProgress}
				</Typography>
			</Box>
			<CircularProgress
				variant="determinate"
				sx={{
					color: theme.colors[color].lighter
				}}
				size={size}
				thickness={4}
				value={100}
			/>
			<CircularProgress
				size={size}
				sx={{
					animationDuration: '550ms',
					position: 'absolute',
					left: 0,
					color: theme.colors[color].main,
					top: 0,
					[`& .${circularProgressClasses.circle}`]: {
						strokeLinecap: 'round'
					}
				}}
				thickness={4}
				variant="determinate"
				value={valueProgress}
			/>
		</Box>
	)
}

CircularProgressWrapper.propTypes = {
	color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info']),
	textValueProgress: PropTypes.string.isRequired,
	valueProgress: PropTypes.number.isRequired,
	size: PropTypes.number
}

CircularProgressWrapper.defaultProps = {
	color: 'primary',
	size: 70
}

export default CircularProgressWrapper