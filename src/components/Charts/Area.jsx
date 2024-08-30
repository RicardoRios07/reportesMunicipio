import React from 'react'
import PropTypes from 'prop-types'
import ReactApexChart from 'react-apexcharts'
import { Card, Stack, Typography } from '@mui/material'
import { useAreaChart } from 'src/hooks/components/Charts/Area/useAreaChart'

const AreaChart = ({ width, height, typeData, title, description }) => {

	const { filterData } = useAreaChart()
	const dataChart = filterData[typeData]
	const { series, options } = dataChart

	return (
		<Card sx={{
			p: 2,
			'& .apexcharts-yaxis-texts-g text': {
				fill: theme => theme.palette.mode === 'dark' && theme.colors.alpha.trueWhite[100]
			},
			'& .apexcharts-xaxis-texts-g text': {
				fill: theme => theme.palette.mode === 'dark' && theme.colors.alpha.trueWhite[100]
			},
			'& .apexcharts-legend-text': {
				color: theme => theme.palette.mode === 'dark' && `${theme.colors.alpha.trueWhite[100]}!important`
			}

		}}>
			<Stack mb={2} direction='row' justifyContent='space-between'>
				<Typography variant='h4'>{title}</Typography>
				<Typography color='info.main' fontWeight={600}>{description}</Typography>
			</Stack>
			<ReactApexChart
				options={options}
				series={series}
				type='area'
				width={width}
				height={height} />
		</Card>
	)
}

AreaChart.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	typeData: PropTypes.string.isRequired,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

AreaChart.defaultProps = {
	width: '100%',
	height: 400
}

export default AreaChart