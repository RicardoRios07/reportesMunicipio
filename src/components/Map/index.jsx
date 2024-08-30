import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import { useMapWrapper } from 'src/hooks/components/Map/useMapWrapper';
import { Map } from 'pigeon-maps';

const MapWrapper = ({ height, dataMap, filter }) => {

	const { renderMarker, getFirstPosition, renderOverlay, isOpenOverlay, handleCloseOverlay } = useMapWrapper()
	const marker = renderMarker[filter] ? renderMarker[filter](dataMap) : renderMarker['default']()
	const position = getFirstPosition[filter] ? getFirstPosition[filter](dataMap) : getFirstPosition['default']()
	const overlay = renderOverlay[filter] || renderOverlay['default']

	return (
		<Box height={height}>
			<Map
				defaultCenter={position}
				defaultZoom={9}
				height={height}
				onClick={handleCloseOverlay}>
				{marker}
				{
					isOpenOverlay
					&&
					overlay()
				}
			</Map>
		</Box>
	)
}

MapWrapper.propTypes = {
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

MapWrapper.defaultProps = {
	height: 400
}

export default MapWrapper