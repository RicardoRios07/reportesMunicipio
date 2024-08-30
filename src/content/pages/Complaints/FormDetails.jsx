import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import {
	RiBookletLine,
	RiEyeLine,
	RiMenuSearchLine,
	RiCalendarCheckLine,
	RiCalendarScheduleLine,
	RiShieldUserLine,
	RiRoadMapLine
} from "@remixicon/react"
import ButtonsGroup from 'src/components/ButtonsGroup'
import { Link } from 'react-router-dom'

const FormDetails = ({ primaryAction, complaintDetails }) => {

	const { ubicacion } = complaintDetails
	const locationArray = ubicacion.split(',')
	const latitude = String(locationArray[0]).trim()
	const longitude = String(locationArray[1]).trim()
	const linkMap = `http://maps.google.com/maps?q=${latitude},${longitude}`

	return (
		<Grid container justifyContent='center' >

			<Grid item sx={12} md={5} >

                <img alt={complaintDetails._id}
                    src={complaintDetails.evidencia}
                    height='500px'
                    style={{
                        width: '100%',
                        height: '500px',
                        borderTopLeftRadius: '20px',
                        borderRadius: '20px',
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'cover'
                    }}
                ></img>

			</Grid>
			<Grid item container sx={12} md={7} direction='column' >
				<Typography variant='h3' textAlign={'center'}>{complaintDetails?.tituloDenuncia}</Typography>
				<Grid item alignItems={'center'} display='flex' direction='column'>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
						component="nav"
						aria-labelledby="nested-list-subheader">
						<ListItem>
							<ListItemIcon>
								<RiBookletLine />
							</ListItemIcon>
							<ListItemText primary={complaintDetails.descripcion} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<RiEyeLine />
							</ListItemIcon>
							<ListItemText primary={complaintDetails.estado} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<RiMenuSearchLine />
							</ListItemIcon>
							<ListItemText primary={complaintDetails.categoria} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<RiCalendarCheckLine />
							</ListItemIcon>
							<ListItemText primary={complaintDetails.createdAt} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<RiCalendarScheduleLine />
							</ListItemIcon>
							<ListItemText primary={complaintDetails.updatedAt} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<RiShieldUserLine />
							</ListItemIcon>
							<ListItemText primary={complaintDetails.nombreDenunciante} />
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<RiRoadMapLine />
							</ListItemIcon>
							<Link
								to={linkMap}
								target="_blank"
								style={{
									textDecoration: 'none'
								}}>
								{complaintDetails.ubicacion}
							</Link>
						</ListItem>
					</List>
				</Grid>
				<Grid item>
					<ButtonsGroup
						btnLabelFirst='Cerrar'
						btnActionFirst={primaryAction}
					/>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default FormDetails