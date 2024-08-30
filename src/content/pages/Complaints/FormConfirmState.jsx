import { Grid, Typography, useTheme } from '@mui/material'
import { RiErrorWarningLine } from "@remixicon/react"
import ButtonsGroup from 'src/components/ButtonsGroup'
import PropTypes from 'prop-types'

const FormConfirmState = ({ secondaryAction, primaryAction, complaintSelected }) => {
	const theme = useTheme()
	return (
		<Grid container justifyContent='center' direction='column'>
			<Grid
				item display='flex'
				justifyContent='space-around'
				padding={2}>
				<RiErrorWarningLine
					size={80}
					color={theme.colors.error.main}
				/>
			</Grid>
			<Grid item paddingTop={2}>
				<Typography variant='h2' textAlign='center' >
					Actualización de estado denuncia
				</Typography>
			</Grid>
			<Grid item paddingTop={2}>
				<Typography variant='body1' textAlign='center'>
					Para continuar presiona Aceptar
				</Typography>
			</Grid>
			<Grid item padding={2}>
				<ButtonsGroup
					btnLabelFirst='Aceptar'
					btnActionFirst={() => primaryAction(complaintSelected)}
					btnLabelSecond='Cancelar'
					btnActionSecond={secondaryAction} />
			</Grid>
		</Grid>
	)
}

FormConfirmState.propTypes = {
	secondaryAction: PropTypes.func,
	primaryAction: PropTypes.func,
	complaintSelected: PropTypes.object
}

export default FormConfirmState