
export const useDonutChart = () => {

	const filterData = {
		reports: {
			series: [72, 66, 6],
			options: {
				labels: ['Totales', 'Atendidas', 'Restantes'],
				colors: ['#2E93fA', '#546E7A', '#FF9800']
			},
		},
		reportsMonth: {
			series: [10, 40, 72],
			options: {
				labels: ['Diciembre', 'Enero', 'Febrero'],
				colors: ['#2E93fA', '#546E7A', '#FF9800']
			},
		}
	}

	return {
		filterData
	}
}
