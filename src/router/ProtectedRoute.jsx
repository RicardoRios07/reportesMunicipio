import React from 'react'
import { Navigate } from 'react-router-dom'
import { configSession } from 'src/utils/services/configSession'

export const ProtectedRoute = ({ children }) => {

	const { isAuthenticated } = configSession()

	return (
		<>
			{
				isAuthenticated
					?
					<>
						{children}
					</>
					:
					<Navigate to='/login' replace />
			}
		</>
	)
}
