import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Stack, Typography } from '@mui/material'

const CardInfoAvatar = ({ avatar, colorAvatar, colorTitle, description, title }) => {

	return (
		<Stack
			p={1}
			spacing={2}
			border={theme => `1px dashed ${theme.colors.alpha.black[50]}`}
			borderRadius='20px'
			direction='row'
			alignItems='center'>
			<Avatar
				sx={{
					bgcolor: theme => theme.palette[colorAvatar].main
				}}>{avatar}</Avatar>
			<Stack>
				<Typography
					variant='h5'
					sx={{
						color: theme => theme.palette[colorTitle].main
					}}>{title}</Typography>
				{
					description
					&&
					<Typography
						variant='subtitle1'>{description}</Typography>
				}
			</Stack>
		</Stack>
	)
}

CardInfoAvatar.propTypes = {
	avatar: PropTypes.string.isRequired,
	colorAvatar: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info']).isRequired,
	colorTitle: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info']).isRequired,
	description: PropTypes.string,
	title: PropTypes.string.isRequired
}

export default CardInfoAvatar