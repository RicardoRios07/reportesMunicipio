import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import ButtonsGroup from 'src/components/ButtonsGroup'
import { RiErrorWarningLine } from "@remixicon/react"

const FormDelete = ({ secondaryAction, primaryAction, complaintSelected }) => {
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
                    Estas seguro que deseas eliminar la denuncia titulada {complaintSelected?.tituloDenuncia} cuyo estado es {complaintSelected?.estado}
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
                    btnActionFirst={() => primaryAction(complaintSelected._id)}
                    btnLabelSecond='Cancelar'
                    btnActionSecond={secondaryAction} />
            </Grid>
        </Grid>
    )
}

export default FormDelete