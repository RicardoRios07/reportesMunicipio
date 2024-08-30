import React from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import ButtonsGroup from 'src/components/ButtonsGroup'
import { RiErrorWarningLine } from "@remixicon/react"


const ChangeState = ({ secondaryAction, primaryAction, userSelected }) => {
    const theme = useTheme()
    return (
        <Grid container justifyContent='center' direction='column'>
            <Grid
                item display='flex'
                justifyContent='space-around'
                padding={2}>
                <RiErrorWarningLine
                    size={80}
                    color={userSelected?.isBlocked
                        ? theme.colors.info.main
                        : theme.colors.error.main}
                />
            </Grid>
            <Grid item paddingTop={2}>
                <Typography variant='h1' textAlign='center' >
                    Estas a punto de {userSelected?.isBlocked ? ' desbloqlear' : 'bloquear'} a {userSelected?.nombreCompleto}
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
                    btnActionFirst={() => primaryAction(userSelected?._id, userSelected?.isBlocked)}
                    btnLabelSecond='Cancelar'
                    btnActionSecond={secondaryAction} />
            </Grid>
        </Grid>
    )
}

export default ChangeState