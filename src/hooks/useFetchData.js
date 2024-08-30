import { useEffect, useState } from 'react'

import { useApiPromise } from './useApiPromise'

export const useFetchData = ({ urlApi, endPoint, process, additionalData, customUser }) => {

	const [fetchData, setFetchData] = useState({ code: null, data: null, message: '', loading: true })
	const { handleApiPromise } = useApiPromise()

	useEffect(() => {

		setFetchData({ code: null, data: null, message: '', loading: true })
		const handleFetchData = async () => {
			const { code, data, message } = await handleApiPromise({ urlApi, endPoint, process, additionalData, customUser })
			setFetchData({ code, data, message, loading: false })
		}
		handleFetchData()
		return () => setFetchData({ code: null, data: null, message: '', loading: false })
	}, [])

	return {
		fetchData
	}
}
