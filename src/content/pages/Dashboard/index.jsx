import React from 'react'

import { Box, Card, Grid, Skeleton, Typography } from '@mui/material'

import { buildStyles } from 'react-circular-progressbar'

import CardInfoAvatar from 'src/components/Cards/InfoAvatar'
import CardProgress from 'src/components/Cards/Progress'
import CardProgressBar from 'src/components/Cards/ProgressBar'
import AreaChart from 'src/components/Charts/Area'
import CircularProgress from 'src/components/Progress/Circular'

import { useDashboard } from 'src/hooks/useDashboard'
import AlertWrapper from 'src/components/Alert'
import MapWrapper from 'src/components/Map'

const Dashboard = () => {

	const { activity, reportsPercent, fetchData } = useDashboard()
	const { code, data, loading, message } = fetchData
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			alignItems="stretch"
			rowSpacing={3}>
			<Grid item xs={12}>
				<Typography variant='h2'>
					Dashboard
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={3}>
						<CardProgress
							title='usuarios'
							description='12.2k'
							color='success'
							textValueProgress='+ 5%'
							valueProgress={44} />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<CardProgress
							title='nuevas denuncias'
							description='11.2k'
							color='info'
							textValueProgress='+ 20%'
							valueProgress={60} />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<CardProgress
							title='denuncias atendidas'
							description='10.2k'
							color='warning'
							textValueProgress='+ 14%'
							valueProgress={25} />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<CardProgress
							title='denuncias último mes'
							description='5.2k'
							color='error'
							textValueProgress='- 10%'
							valueProgress={5} />
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Card sx={{ p: 2 }}>
							<Typography variant='h4' mb={2}>Reportes</Typography>
							{
								reportsPercent.map(({ name, percent, icon, color }, index) => (
									<Box my={1.5} key={index}>
										<CardProgressBar
											color={color}
											icon={icon}
											progressDescription={`${percent}%`}
											progressValue={percent}
											title={name}
										/>
									</Box>
								))
							}
						</Card>
					</Grid>
					<Grid item xs={6} md={4}>
						<Card sx={{ p: 2 }}>
							<Typography variant='h4' mb={2}>Denuncias</Typography>
							<CircularProgress
								circleRatio={0.65}
								styles={buildStyles({ rotation: 1 / 2 + 1 / 5.7 })}
								value={40}
								strokeWidth={13}
								text='40%'
								color='info'
								size="xxlarge"
							/>
						</Card>
					</Grid>
					<Grid item xs={6} md={4}>
						<Card sx={{ p: 2 }}>
							<Typography variant='h4' mb={2}>Denuncias</Typography>
							<CircularProgress
								circleRatio={0.65}
								styles={buildStyles({ rotation: 1 / 2 + 1 / 5.7 })}
								value={20}
								strokeWidth={13}
								text='20%'
								color='warning'
								size="xxlarge"
							/>
						</Card>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				{
					code
						?
						code === 200
							?
							<MapWrapper dataMap={data} filter='reports' height={600} />
							:
							<AlertWrapper text={message} type='error' />
						:
						<Skeleton variant='rounded' height={300} />
				}
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={8} md={9}>
						<AreaChart typeData='reports' title='Denuncias mes Agosto' description='Últimos 15 días' />
					</Grid>
					<Grid item xs={12} sm={4} md={3}>
						<Card sx={{ p: 2 }}>
							<Typography variant='h4' mb={2}>Actividad reciente</Typography>
							{
								activity.map(({ name, color, colorStatus, date, title }, index) => {
									return (
										<Box my={1.5} key={index}>
											<CardInfoAvatar
												avatar={name}
												colorAvatar={color}
												colorTitle={colorStatus}
												description={date}
												title={title} />
										</Box>
									)
								})
							}
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Dashboard