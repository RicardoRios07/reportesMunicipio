import Cookies from 'js-cookie'

export const configSession = () => {

	const handleRemoveSession = () => Cookies.remove('USRD')

	const setSession = (userData) => {
		Cookies.set('USRD', JSON.stringify(userData));
	}

	const getUserData = () => JSON.parse(Cookies.get('USRD') || '{}')

	const isAuthenticated = !!Cookies.get('USRD')

	return {
		setSession,
		handleRemoveSession,
		isAuthenticated,
		getUserData
	}
}
