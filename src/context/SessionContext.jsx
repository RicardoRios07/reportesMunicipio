import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { configSession } from 'src/utils/services/configSession'

const SessionContext = createContext({})
export const useSessionContext = () => useContext(SessionContext)

const SessionProvider = ({ children }) => {

	const navigate = useNavigate()
	const { handleRemoveSession } = configSession()

	const handleCloseSession = ({ isShowModal = false }) => {
		handleRemoveSession()
		const state = {
			code: 'SESSION',
			message: 'Tu sesión a finalizado',
			data: null
		}
		navigate('/login', { ...(isShowModal && { state }) })
	}

	return (
		<SessionContext.Provider
			value={{
				handleCloseSession
			}}>
			{children}
		</SessionContext.Provider>
	)
}

SessionProvider.propTypes = {
	children: PropTypes.node.isRequired
}

export default SessionProvider