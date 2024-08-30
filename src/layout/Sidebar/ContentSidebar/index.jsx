import React from 'react'

import {
	Box,
	Drawer,
	Typography,
	alpha,
	lighten,
	useTheme
} from '@mui/material'

import Menu from '../Menu'
import Scrollbar from 'src/components/Scrollbar'
import AvatarSidebar from './AvatarSidebar'
import { useSidebarContext } from 'src/context/SidebarContext'

const ContentSidebar = () => {

	const theme = useTheme()
	const { openMenu, openMenuMobile, handleOpenMenuMobile } = useSidebarContext()
	return (
		<>
			<Box
				sx={{
					width: openMenu ? theme.sidebar.width : theme.sidebar.widthClose,
					minWidth: openMenu ? theme.sidebar.width : theme.sidebar.widthClose,
					color: theme.colors.alpha.trueWhite[70],
					zIndex: 7,
					height: '100%',
					pt: theme.sidebar.paddingTop,
					pb: theme.sidebar.paddingTop,
					display: {
						xs: 'none',
						lg: 'inline-block'
					},
					position: 'fixed',
					left: 0,
					top: 0,
					boxShadow: theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none',
					transition: 'all 0.5s'
				}}>
				<AvatarSidebar />
				<Box position='relative' height='45%' width='100%' mt={1}>
					<Scrollbar>
						<Menu />
					</Scrollbar>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						position: 'absolute',
						width: '100%',
						bottom: theme.sidebar.paddingTop,
						alignContent: 'center',
						color: (theme) => theme.palette.mode === 'dark' ? 'white' : theme.colors.alpha.black[100]
					}}>
					<Typography variant='h4' mb={1}>Product of</Typography>
					<Box sx={{
						width: '100%',
						height: 30,
						maskImage: openMenu ? 'url(static/img/logo-tikee-white.png)' : 'url(static/img/logo-tikee-mini-white.png)',
						maskSize: 'contain',
						maskRepeat: 'no-repeat',
						maskPosition: 'center',
						background: (theme) => theme.palette.mode === 'dark' ? 'white' : theme.colors.alpha.black[100]
					}} />
				</Box>
			</Box>
			<Drawer
				anchor='left'
				open={openMenuMobile}
				variant='temporary'
				onClose={handleOpenMenuMobile}
				transitionDuration={600}
				sx={{
					width: theme.sidebar.width,
					minWidth: theme.sidebar.width,
					display: {
						xs: 'block',
						lg: 'none'
					},
					'& .MuiPaper-elevation': {
						width: theme.sidebar.width,
						minWidth: theme.sidebar.width,
						pt: theme.sidebar.paddingTop,
						pb: theme.sidebar.paddingTop,
						backgroundColor:
							theme.palette.mode === 'dark'
								? alpha(lighten(theme.header.background, 0.1), 1)
								: theme.palette.background.default,
						boxShadow:
							theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
					}
				}}>
				<AvatarSidebar />
				<Box position='relative' height='45%' width='100%' mt={1}>
					<Scrollbar>
						<Menu />
					</Scrollbar>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						position: 'absolute',
						width: '100%',
						bottom: theme.sidebar.paddingTop,
						alignContent: 'center',
						color: (theme) => theme.palette.mode === 'dark' ? 'white' : theme.colors.alpha.black[100]
					}}>
					<Typography variant='h4' mb={1}>Product of</Typography>
					<Box sx={{
						width: '100%',
						height: 30,
						maskImage: 'url(static/img/logo-tikee-white.png)',
						maskSize: 'contain',
						maskRepeat: 'no-repeat',
						maskPosition: 'center',
						background: (theme) => theme.palette.mode === 'dark' ? 'white' : theme.colors.alpha.black[100]
					}} />
				</Box>
			</Drawer>
		</>
	)
}

export default ContentSidebar