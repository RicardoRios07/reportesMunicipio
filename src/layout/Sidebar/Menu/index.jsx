import { Box, Button, ListItem, Tooltip } from '@mui/material'
import {
	RiHome5Fill,
	RiGroupFill,
	RiLogoutBoxRFill,
	RiMegaphoneFill
} from '@remixicon/react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSidebarContext } from 'src/context/SidebarContext'
import { configSession } from 'src/utils/services/configSession'

const Menu = () => {

	const { handleRemoveSession } = configSession()
	const { openMenu, handleCustomOpenMenuMobile, openMenuMobile } = useSidebarContext()

	const navigate = useNavigate()

	return (
		<Box sx={{
			'& .MuiButton-root': {
				backgroundColor: 'transparent',
				position: 'relative',
				fontSize: { xs: '16px', lg: openMenu ? '16px' : 0 },
				transition: openMenu ? 'font-size 0.8s' : 'font-size 0.4s',
				justifyContent: { xs: 'start', lg: openMenu ? 'start' : 'center' },
				pl: { xs: '40px', lg: openMenu ? '40px' : '20px' },
				color: theme => theme.colors.alpha.black[100],
				'&.active': {
					'& .MuiButton-startIcon': {
						'& .MuiBox-root': {
							background: theme => theme.colors.primary.main,
							'& svg': {
								color: 'white'
							}
						}
					}
				},
				'&:hover': {
					background: theme => theme.colors.alpha.black[10],
				}
			},
			'& .MuiButton-startIcon': {
				mr: { xs: '23px', lg: openMenu ? '23px' : 0 }
			},
			'& .MuiListItem-root': {
				p: '2px 0px'
			}
		}}>
			<ListItem>
				<Tooltip title={((!openMenu && !openMenuMobile) && !openMenuMobile) && 'Inicio'} placement='right' arrow>
					<Box width='100%'>
					<Button
						fullWidth
						variant='contained'
						component={NavLink}
						to='/dashboard'
						onClick={() => { handleCustomOpenMenuMobile(false) }}
						startIcon={
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									p: '5px',
									alignItems: 'center',
									borderRadius: '30%',
								}}>
								<RiHome5Fill />
							</Box>
						}>
						Inicio
					</Button>
					</Box>
				</Tooltip>
			</ListItem>
			<ListItem>
				<Tooltip title={(!openMenu && !openMenuMobile) && 'Usuarios'} placement='right' arrow>
				<Box width='100%'>
					<Button
						fullWidth
						variant='contained'
						component={NavLink}
						to='/usuarios'
						onClick={() => { handleCustomOpenMenuMobile(false) }}
						startIcon={
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									p: '5px',
									alignItems: 'center',
									borderRadius: '30%',
								}}>
								<RiGroupFill />
							</Box>
						}>
						Usuarios
					</Button>
					</Box>
				</Tooltip>
			</ListItem>
			<ListItem>
				<Tooltip title={(!openMenu && !openMenuMobile) && 'Denuncias'} placement='right' arrow>
				<Box width='100%'>
					<Button
						fullWidth
						variant='contained'
						component={NavLink}
						to='/denuncias'
						onClick={() => { handleCustomOpenMenuMobile(false) }}
						startIcon={
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									p: '5px',
									alignItems: 'center',
									borderRadius: '30%',
								}}>
								<RiMegaphoneFill />
							</Box>
						}>
						Denuncias
					</Button>
				</Box>
				</Tooltip>
			</ListItem>
			<ListItem>
				<Tooltip title={(!openMenu && !openMenuMobile) && 'Cerrar sesión'} placement='right' arrow>
				<Box width='100%'>
					<Button
						fullWidth
						variant='contained'
						onClick={() => {
							handleRemoveSession()
							navigate('/')
						}}
						startIcon={
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									p: '5px',
									alignItems: 'center',
									borderRadius: '30%',
								}}>
								<RiLogoutBoxRFill />
							</Box>
						}>
						Cerrar sesión
					</Button>
				</Box>
				</Tooltip>
			</ListItem>
		</Box>
	)
}

export default Menu