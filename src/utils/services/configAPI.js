import { configSession } from "./configSession"

export const configAPI = ({ urlApi, endPoint, process, additionalData, customUser }) => {

	const envUrlApi = import.meta.env.VITE_BACK_ADDRESS

	const { isAuthenticated, getUserData } = configSession()

	const dataUser = getUserData()
	const { token } = dataUser

	const bodyApi = {
		ip: "1111111111",
		browser: "1111111111",
		lat: -123123,
		lng: 12313212313,
		idAdmin: 12,
		process
	}

	return {
		api: urlApi || `${envUrlApi}/admin/${endPoint}`,
		body: {
			...bodyApi,
			...additionalData
		},
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...(isAuthenticated && { Authorization: `Bearer ${token}` }),
		}

	}
}