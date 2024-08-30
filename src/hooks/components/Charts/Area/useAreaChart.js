
export const useAreaChart = () => {

	const filterData = {
		reports: {
			series: [{
				name: 'Nuevas denuncias',
				data: [0, 10, 5, 1, 22, 3, 0, 5, 15, 0, 10, 1, 0, 0, 0]
			}, {
				name: 'Denuncias atendidas',
				data: [0, 4, 10, 3, 10, 1, 0, 3, 20, 12, 1, 2, 4, 0, 0]
			}],
			options: {
				dataLabels: {
					enabled: false
				},
				stroke: {
					curve: 'smooth'
				},
				xaxis: {
					type: 'month',
					categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]
				},
			}
		}
	}

	return {
		filterData
	}
}
