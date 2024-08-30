import axios from 'axios'

import { useSessionContext } from 'src/context/SessionContext'
import { configAPI } from 'src/utils/services/configAPI'

export const useApiPromise = () => {

	const { handleCloseSession } = useSessionContext()

	const handleApiPromise = async ({ urlApi, endPoint, process, additionalData, customUser }) => {

		const { api, body, headers } = configAPI({ urlApi, endPoint, process, additionalData, customUser })

		const data = await axios.post(api, body, { headers })
			.then(response => {
				const { data: dataAxios, status } = response

				if (!status) return { code: '001', message: 'En este momento no se puede procesar tu petición', data: null }

				if (status === 401) {
					handleCloseSession({ isShowModal: true })
					return { code: 'SESSION', message: 'Tu sesión a finalizado', data: null }
				}
				const { code, message, data, result } = dataAxios
				const dataResult = data ? data : result
				return { code, message, data: dataResult }
			})
			.catch(error => {
				const { response } = error
				if (!response) return { code: '001', message: 'En este momento no se puede procesar tu petición', data: null }
				const { data: { message }, status } = response || { data: { message: '' }, status: 401 }
				if (status === 401) {
					handleCloseSession({ isShowModal: true })
					return { code: 'SESSION', message: message || 'Tu sesión a finalizado', data: null }
				}
				return { code: '001', message: message || 'En este momento no se puede procesar tu petición', data: null }
			})
		return data
	}

	return {
		handleApiPromise
	}
}
