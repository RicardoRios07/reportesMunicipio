import React from 'react'

import { RiCheckFill, RiFileList3Fill, RiStackFill } from '@remixicon/react'
import { useFetchData } from './useFetchData'

export const useDashboard = () => {

	const { fetchData } = useFetchData({ endPoint: 'getAllDenuncias' })

	const activity = [
		{
			name: 'AB',
			colorStatus: 'info',
			color: 'primary',
			title: 'Nueva denuncia',
			date: '23/Feb/2024'
		},
		{
			name: 'DG',
			colorStatus: 'success',
			color: 'info',
			title: 'Denuncia atendida',
			date: '22/Feb/2024'
		},
		{
			name: 'JA',
			colorStatus: 'warning',
			color: 'primary',
			title: 'Denuncia pendiente',
			date: '22/Feb/2024'
		},
		{
			name: 'PL',
			colorStatus: 'warning',
			color: 'secondary',
			title: 'Denuncia pendiente',
			date: '20/Feb/2024'
		},
		{
			name: 'CR',
			colorStatus: 'success',
			color: 'success',
			title: 'Denuncia atendida',
			date: '20/Feb/2024'
		},
		{
			name: 'LS',
			colorStatus: 'info',
			color: 'info',
			title: 'Nueva denuncia',
			date: '20/Feb/2024'
		}
	]

	const reportsPercent = [
		{
			name: 'Atendidos',
			percent: 25,
			icon: <RiCheckFill />,
			color: 'success'
		},

		{
			name: 'Pendientes',
			percent: 60,
			icon: <RiStackFill />,
			color: 'warning'

		},
		{
			name: 'En revisión',
			percent: 15,
			icon: <RiFileList3Fill />,
			color: 'info'
		}
	]

	return {
		fetchData,
		activity,
		reportsPercent
	}
}
