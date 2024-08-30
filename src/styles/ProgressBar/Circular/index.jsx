import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStylesCircular = makeStyles(() => {

	const theme = useTheme()

	return {
		root: {
			'&.CircularProgressbar': {
				verticalAlign: 'middle',
				width: '80%',
				margin: '0 auto',
				display: 'flex',

				'& + [data-test-id="CircularProgressbarWithChildren__children"]': {
					marginTop: '0 !important',
					top: 0
				},

				'& .CircularProgressbar-path': {
					strokeLinecap: 'round',
					transition: 'all 0.5s ease 0s'
				},
				'& .CircularProgressbar-trail': {
					strokeLinecap: 'round'
				},
				'& .CircularProgressbar-text': {
					fontSize: `${theme.typography.pxToRem(15)}`,
					dominantBaseline: 'middle',
					textAnchor: 'middle',
					fontWeight: 'bold'
				},

				'&.MuiGauge': {
					'&-xsmall': {
						maxWidth: '48px'
					},
					'&-small': {
						maxWidth: '62px',
						'& .CircularProgressbar-text': {
							fontWeight: 'bold',
							fontSize: `${theme.typography.pxToRem(24)}`
						}
					},
					'&-medium': {
						maxWidth: '120px'
					},
					'&-large': {
						maxWidth: '140px'
					},
					'&-xlarge': {
						maxWidth: '180px'
					},
					'&-xxlarge': {
						maxWidth: '230px'
					},

					'&-primary': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.primary.main}`
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.primary.main}, .05)`,
						}
					},

					'&-success': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.success.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.success.main}, .05)`,
						}
					},

					'&-warning': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.warning.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.warning.main}, .05)`,
						}
					},

					'&-error': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.error.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.error.main}, .05)`,
						},
					},

					'&-info': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.info.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.info.main}, .05)`,
						}
					},

					'&-success': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.success.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.success.main}, .05)`,
						}
					},

					'&-warning': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.warning.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.warning.main}, .05)`,
						}
					},

					'&-error': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.error.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.error.main}, .05)`,
						}
					},

					'&-info': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.info.main}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.black[10]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.black[100]}`,
						},

						'& .CircularProgressbar-background': {
							fill: `rgba(${theme.colors.info.main}, .05)`,
						}
					},

					'&-white': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.alpha.white[100]}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.white[30]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.white[100]}`,
						}
					},

					'&-trueWhite': {

						'& .CircularProgressbar-path': {
							stroke: `${theme.colors.alpha.trueWhite[100]}`,
						},

						'& .CircularProgressbar-trail': {
							stroke: `${theme.colors.alpha.trueWhite[30]}`,
						},

						'& .CircularProgressbar-text': {
							fill: `${theme.colors.alpha.trueWhite[100]}`,
						}
					}
				}
			}

		}
	}
})