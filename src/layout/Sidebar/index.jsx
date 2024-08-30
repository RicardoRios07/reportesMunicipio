import PropTypes from 'prop-types'
import { Box, alpha, lighten, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'

import ContentSidebar from './ContentSidebar'
import Header from './Header'
import { useSidebarContext } from 'src/context/SidebarContext'

const Sidebar = ({ title }) => {

	const theme = useTheme()
	const { openMenu } = useSidebarContext()
	const { palette, colors, spacing, sidebar, header, breakpoints } = theme
	// const paddingTopBox = Number(header.height.replace('px', '')) + Number(sidebar.paddingTop.replace('px', ''))

	return (
		<Box
			sx={{
				flex: 1,
				height: '100%',
				'.MuiPageTitle-wrapper': {
					background:
						palette.mode === 'dark'
							? colors.alpha.trueWhite[5]
							: colors.alpha.white[50],
					marginBottom: `${spacing(4)}`,
					boxShadow:
						palette.mode === 'dark'
							? `0 1px 0 ${alpha(
								lighten(colors.primary.main, 0.7),
								0.15
							)}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
							: `0px 2px 4px -3px ${alpha(
								colors.alpha.black[100],
								0.1
							)}, 0px 5px 12px -4px ${alpha(
								colors.alpha.black[100],
								0.05
							)}`
				}
			}}>
			<Header title={title} />
			<ContentSidebar />
			<Box
				sx={{
					position: 'relative',
					zIndex: 5,
					display: 'block',
					flex: 1,
					py: header.height,
					transition: 'all 0.5s',
					[breakpoints.up('lg')]: {
						ml: openMenu ? sidebar.width : sidebar.widthClose,
					}
				}}>
				<Box
					sx={{
						display: 'block',
						p: {
							xs: spacing(0, 2),
							lg: spacing(0, 5)
						},
						// '& .MuiGrid-container': {
						// 	mt: 0
						// }
					}}>
					<Outlet />
				</Box>
			</Box>
		</Box>
	)
}

Sidebar.propTypes = {
	title: PropTypes.string
}

export default Sidebar