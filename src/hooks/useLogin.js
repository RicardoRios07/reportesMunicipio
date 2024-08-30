import { formValidations } from 'src/utils/formValidations'
import { object } from 'yup'
import { useApiPromise } from './useApiPromise'
import { useState } from 'react'
import { configSession } from 'src/utils/services/configSession'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {

	const [dataLogin, setDataLogin] = useState({ code: null, data: null, message: '', loading: false })
	const { handleApiPromise } = useApiPromise()
	const { username, password } = formValidations
	const { setSession } = configSession()
	const navigate = useNavigate()
	const validationSchema = object()
		.shape({
			username: username({}),
			password: password({})
		})

	const handleLogin = async ({ dataForm }) => {
		setDataLogin({ code: null, data: null, message: '', loading: true })
		const { username, password } = dataForm
		const additionalData = {
			email: username,
			password
		}
		const response = await handleApiPromise({ endPoint: 'loginAdmin', additionalData })
		const { code, data, message } = response
		setDataLogin({ code, data, message, loading: false })
		if (code !== 200) return
		setSession(data)
		navigate('/dashboard')
	}

	return {
		dataLogin,
		handleLogin,
		validationSchema
	}
}
