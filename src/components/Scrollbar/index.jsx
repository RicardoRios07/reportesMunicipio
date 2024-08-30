import React from 'react'

import { Box, useTheme } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars-2';

const Scrollbar = ({ children, ...rest }) => {

	const theme = useTheme()

	return (
		<Scrollbars
			autoHide
			renderThumbHorizontal={() => <Box></Box>}
			renderThumbVertical={() => {
				return (
					<Box
						sx={{
							width: 5,
							background: `${theme.colors.alpha.black[10]}`,
							borderRadius: `${theme.general.borderRadiusLg}`,
							transition: `${theme.transitions.create(['background'])}`,
							'&:hover': {
								background: `${theme.colors.alpha.black[30]}`
							}
						}}
					/>
				);
			}}
			{...rest}>
			{children}
		</Scrollbars>
	)
}

export default Scrollbar