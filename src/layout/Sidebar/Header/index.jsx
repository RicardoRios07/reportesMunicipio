import React from 'react'

import {
	Badge,
	Box,
	IconButton,
	Stack,
	useTheme
} from '@mui/material'

import {
	RiMenu3Fill,
	RiMenuFoldFill,
	RiMenuUnfoldFill,
	RiMoonLine,
	RiNotification2Line,
	RiSunLine
} from '@remixicon/react'

import { useThemeContext } from 'src/theme/ThemeProvider'
import { useSidebarContext } from 'src/context/SidebarContext'

const Header = () => {

	const theme = useTheme()
	const {
		palette: { mode },
		header,
		spacing,
		breakpoints
	} = theme

	const { handleOpenMenu, openMenu, handleOpenMenuMobile, openMenuMobile } = useSidebarContext()
	const { handleThemeName } = useThemeContext()

	return (
		<Box
			className="header"
			display="flex"
			alignItems="center"
			sx={{
				height: header.height,
				color: header.textColor,

				right: 0,
				zIndex: 6,
				backgroundColor: header.background,
				backdropFilter: 'blur(3px)',
				position: 'fixed',
				width: 'auto',
				left: openMenu ? theme.sidebar.width : theme.sidebar.widthClose,
				transition: 'all 0.5s',
				[breakpoints.down('lg')]: {
					left: 0,
				},
				p: {
					xs: spacing(0, 2),
					lg: spacing(0, 5)
				},
			}}>
			<Box sx={{
				display: 'none',
				width: openMenu ? theme.sidebar.width : theme.sidebar.widthClose,
				height: header.height,
				flex: 1,
				[breakpoints.up('lg')]: {
					display: 'flex',
					justifyContent: 'start',
					alignItems: 'center'
				}
			}}>
				<Box
					sx={{
						maskImage: 'url(/static/img/municipio-puyango.svg)',
						maskPosition: 'center',
						maskRepeat: 'no-repeat',
						height: '65%',
						maskSize: 'contain',
						backgroundColor: 'primary.main',
						width: '12em'
					}} />
			</Box>
			<Box sx={{
				padding: spacing(0, 2),
				display: 'flex',
				justifyItems: 'center',
				justifyContent: 'end',
				flex: 1,
				height: '100%'
			}}>
				<Stack direction='row' spacing={1} alignItems='center'>

					<IconButton onClick={handleThemeName}>
						{
							mode === 'dark'
								?
								<RiSunLine color={header.textColor} />
								:
								<RiMoonLine color={header.textColor} />
						}
					</IconButton>
					<Box pl={{ xs: 1, md: 4 }}>
						<IconButton
							onClick={handleOpenMenu}
							sx={{
								display: {
									xs: 'none',
									lg: 'block'
								}
							}}>
							{
								openMenu
									?
									<RiMenuFoldFill color={header.textColor} />
									:
									<RiMenuUnfoldFill color={header.textColor} />
							}
						</IconButton>
						<IconButton
							onClick={handleOpenMenuMobile}
							sx={{
								display: {
									xs: 'block',
									lg: 'none'
								}
							}}>
							{
								openMenuMobile
									?
									<RiMenuFoldFill color={header.textColor} />
									:
									<RiMenuUnfoldFill color={header.textColor} />
							}
						</IconButton>
					</Box>
				</Stack>
			</Box>
		</Box>
	)
}
export default Header