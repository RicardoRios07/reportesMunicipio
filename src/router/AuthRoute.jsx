import React from 'react'
import { Navigate } from 'react-router-dom'
import { configSession } from 'src/utils/services/configSession'

export const AuthRoute = ({ children }) => {

	const { isAuthenticated } = configSession()

	return (
		<>
			{
				isAuthenticated
					?
					<Navigate to='/dashboard' replace />
					:
					<>
						{children}
					</>
			}
		</>
	)
}
