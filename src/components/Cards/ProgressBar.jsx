import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, LinearProgress, Stack, Typography } from '@mui/material'

const CardProgressBar = ({ color, icon, progressDescription, progressValue, title, spacing, variant }) => {
	return (
		<Stack
			p={1}
			spacing={2}
			direction='row'
			alignItems='center'>
			<Avatar
				variant={variant}
				sx={{
					backgroundColor: theme => theme.palette[color].main,
					color: theme => theme.palette[color].contrastText,
					width: theme => theme.spacing(spacing),
					height: theme => theme.spacing(spacing),
					// ...(isBoxShadow && { boxShadow: theme.colors.shadows[color] }),
					// ...(borderRadius && { borderRadius })
				}}>
				{icon}
			</Avatar>
			<Stack spacing={1} flex={1}>
				<Typography variant='h4'>
					{title}
				</Typography>
				<LinearProgress variant='determinate' value={progressValue} color={color} />
			</Stack>
			<Typography variant='h4'>
				{progressDescription}
			</Typography>
		</Stack>
	)
}

CardProgressBar.propTypes = {
	color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info']),
	icon: PropTypes.node.isRequired,
	progressDescription: PropTypes.string.isRequired,
	progressValue: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	spacing: PropTypes.number,
	variant: PropTypes.oneOf(['circular', 'rounder', 'square'])
}
CardProgressBar.defaultProps = {
	color: 'primary',
	spacing: 5,
	variant: 'circular'
}

export default CardProgressBar