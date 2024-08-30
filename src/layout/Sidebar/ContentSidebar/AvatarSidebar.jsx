import React from 'react'
import { Box, Card, Typography } from '@mui/material'
import { useSidebarContext } from 'src/context/SidebarContext'

const AvatarSidebar = () => {

	const { openMenu } = useSidebarContext()

	return (
		<Card sx={{
			flexDirection: 'column',
			display: 'flex',
			justifyContent: 'center',
			alignItems: { xs: 'center', lg: '' },
			py: { xs: 1, lg: openMenu ? 2 : 1 },
			px: { xs: 1, lg: openMenu ? 6 : 1 },
			minWidth: { xs: '95% !important', lg: 'auto' },
			width: { xs: '95% !important', lg: 'auto' },
			height: { xs: '15rem', lg: openMenu ? '20rem' : '15rem' },
			borderRadius: '0 30px 30px 0',
			transition: 'all 0.5s',
			background: theme =>
				theme.palette.mode === 'light'
					?
					'linear-gradient(90deg, rgba(254,251,246,1) 26%, rgba(219,206,187,1) 100%);'
					:
					'linear-gradient(90deg, rgba(203,200,196,1) 26%, rgba(151,149,146,1) 100%)',
			color: theme => theme.colors.alpha.black[100]
		}}>
			<Box sx={{
				borderRadius: '30%',
				height: { xs: '65px', lg: openMenu ? '100px' : '65px' },
				width: { xs: '65px', lg: openMenu ? '100px' : '65px' },
				backgroundImage: 'url("static/img/avatar.jpg")',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}} />
			<Typography mt={2} variant='h4' fontSize={{ lg: !openMenu && '13px' }}>Bienvenido</Typography>
		</Card>
	)
}

export default AvatarSidebar