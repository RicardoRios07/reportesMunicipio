import React, { useState } from 'react'

import { Box, Card, IconButton, Typography, useTheme } from '@mui/material'
import { Marker, Overlay } from 'pigeon-maps'
import { RiCloseFill } from '@remixicon/react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import ChipStatus from 'src/components/ChipStatus'

export const useMapWrapper = () => {

	const { colors } = useTheme()

	const [isOpenOverlay, setIsOpenOverlay] = useState(false)
	const [anchorOverlay, setAnchorOverlay] = useState()
	const [dataOverlay, setDataOverlay] = useState({})

	const getFirstPosition = {
		reports: (data) => data[0].ubicacion.replaceAll('[', '').replaceAll(']', '').split(',').map(cor => Number(cor)),
		default: () => [-4.008819057196186, -79.20634170378912]
	}

	const handleOpenOverlay = ({ anchor, payload }) => {
		if (isOpenOverlay) return handleCloseOverlay()
		setDataOverlay(payload)
		setAnchorOverlay(anchor)
		setIsOpenOverlay(true)
	}
	const handleCloseOverlay = () => {
		setIsOpenOverlay(false)
		setAnchorOverlay(null)
		setDataOverlay({})
	}

	const colorObject = {
		'Atendida': 'success',
		'En proceso': 'warning',
		'En revisión': 'info'
	}

	const renderMarker = {
		reports: data => data.map(item => {
			const position = item.ubicacion.replaceAll('[', '').replaceAll(']', '').split(',').map(cor => Number(cor))
			return (
				<Marker
					key={item._id}
					anchor={position}
					color={dataOverlay?._id === item._id ? colors.success.main : colors.error.main}
					onClick={() => { handleOpenOverlay({ anchor: position, payload: item }) }} />
			)
		}),
		defaults: () => (
			<Marker anchor={[-4.008819057196186, -79.20634170378912]} color={colors.error.main} />
		)
	}

	const renderOverlay = {
		reports: () => (
			<Overlay anchor={anchorOverlay}>
				<Card
					sx={{
						minWidth: 300,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						gap: 2,
						p: 2,
						position: 'relative'
					}}>
					<IconButton
						onClick={handleCloseOverlay}
						sx={{
							position: 'absolute',
							right: 2,
							top: 2,
						}}>
						<RiCloseFill />
					</IconButton>
					<Typography variant='h5'>
						{dataOverlay.tituloDenuncia}
					</Typography>
					<Zoom classDialog='zoom-image'>
						<Box
							sx={{
								height: 150,
								width: '100%'
							}} >
							<img
								src={dataOverlay.evidencia}
								loading='lazy'
								style={{
									maxHeight: 150,
									borderRadius: '10px'
								}} />
						</Box>
					</Zoom>
					<ChipStatus
						text={dataOverlay.estado}
						color={colorObject[dataOverlay.estado]} />
				</Card>
			</Overlay>
		),
		default: () => (
			<Overlay anchor={[-4.008819057196186, -79.20634170378912]}>

			</Overlay>
		)
	}

	return {
		renderMarker,
		getFirstPosition,
		renderOverlay,
		isOpenOverlay,
		handleCloseOverlay
	}
}
