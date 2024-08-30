import React from 'react'

import { CssBaseline } from '@mui/material'

import { useRoutes } from 'react-router-dom'

import { routes } from './router/router'

const App = () => {
	const router = useRoutes(routes)
	return (
		<>
			<CssBaseline />
			{router}
		</>
	)
}

export default App