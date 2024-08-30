import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const SidebarContext = createContext({})
export const useSidebarContext = () => useContext(SidebarContext)

const SidebarProvider = ({ children }) => {

	const sidebarOpenLocal = window.localStorage.getItem('sidebar')

	const [openMenu, setOpenMenu] = useState(sidebarOpenLocal === 'true')
	const [openMenuMobile, setOpenMenuMobile] = useState(false)

	const handleOpenMenu = () => {
		setOpenMenuMobile(false)
		setOpenMenu(!openMenu)
		window.localStorage.setItem('sidebar', !openMenu)
	}

	const setCustomOpenMenu = (value) => {
		setOpenMenu(value)
		window.localStorage.setItem('sidebar', value)
	}

	const handleCustomOpenMenuMobile = (value) => setOpenMenuMobile(value)

	const handleOpenMenuMobile = () => {
		setOpenMenu(sidebarOpenLocal === 'true')
		setOpenMenuMobile(!openMenuMobile)
	}

	return (
		<SidebarContext.Provider
			value={{
				openMenu,
				handleOpenMenu,
				openMenuMobile,
				handleOpenMenuMobile,
				setCustomOpenMenu,
				handleCustomOpenMenuMobile
			}}>
			{children}
		</SidebarContext.Provider>
	)
}

SidebarProvider.propTypes = {
	children: PropTypes.node.isRequired
}

export default SidebarProvider