import React from 'react'
import PropTypes from 'prop-types'
import { Card, Stack, Typography } from '@mui/material'
import ReactApexChart from 'react-apexcharts'
import { useDonutChart } from 'src/hooks/components/Charts/Donut/useDonutChart'

const DonutChart = ({ width, height, typeData, title }) => {
	const { filterData } = useDonutChart()
	const dataChart = filterData[typeData]
	const { series, options } = dataChart
	return (
		<Card sx={{
			p: 2,
			'& .apexcharts-legend-text': {
				color: theme => theme.palette.mode === 'dark' && `${theme.colors.alpha.trueWhite[100]}!important`
			}
		}}>
			<Stack mb={2} direction='row' justifyContent='space-between'>
				<Typography variant='h4'>{title}</Typography>
			</Stack>
			<ReactApexChart
				options={options}
				series={series}
				type='donut'
				width={width}
				height={height} />
		</Card>
	)
}

DonutChart.propTypes = {
	typeData: PropTypes.string.isRequired,
	title: PropTypes.string,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
DonutChart.defaultProps = {
	width: '100%',
	height: 400
}

export default DonutChart