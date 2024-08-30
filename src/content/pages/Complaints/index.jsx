import { Grid, Skeleton, Stack, Typography } from "@mui/material"
import Form from './form'
import AlertWrapper from "src/components/Alert"
import SnackbarWrapper from "src/components/SnackbarWrapper"
import { useAllComplaint } from "src/hooks/useAllComplaint"

const Complaints = () => {
    const {
        isOpen,
        showForm,
        complaints,
        isOpenSnack,
        handleCloseSnack,
        complaintSelected,
        handleStateComplaint,
        handleOpenDeleteComplaint,
        handleCloseDeleteComplaint,
        handleChangeStateComplaint,
        handleOpenDetailsComplaint,
        handleCloseDetailsComplaint,
        handleOpenConfirmChangeState,
        handleCloseConfirmChangeState

    } = useAllComplaint()
    const { code, data, message, loading } = complaints
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            rowSpacing={2}>
            <Grid item xs={12}>
                <Typography variant='h1'>Denuncias</Typography>
            </Grid>

            <SnackbarWrapper
                open={isOpenSnack}
                handleClose={handleCloseSnack}
                type={complaintSelected?.code === 200 ? 'success' : 'error'}
                text={complaintSelected?.message || ''} />
            {
                loading ?
                    <Grid item xs={12}>
                        <Stack direction='row' spacing={1} mt={2}>
                            <Skeleton variant='rectangular' width='100%' height='30em' />
                        </Stack>
                    </Grid>
                    :
                    code === 200 ?
                        <Grid item xs={12}>
                            <Form
                                data={data || []}
                                isOpen={isOpen}
                                handleOpenDeleteComplaint={handleOpenDeleteComplaint}
                                handleCloseDeleteComplaint={handleCloseDeleteComplaint}
                                handleChangeStateComplaint={handleChangeStateComplaint}
                                handleOpenDetailsComplaint={handleOpenDetailsComplaint}
                                handleCloseDetailsComplaint={handleCloseDetailsComplaint}
                                complaintSelected={complaintSelected}
                                showForm={showForm}
                                handleStateComplaint={handleStateComplaint}
                                handleOpenConfirmChangeState={handleOpenConfirmChangeState}
                                handleCloseConfirmChangeState={handleCloseConfirmChangeState}
                            />
                        </Grid>
                        :
                        <Grid item xs={12}>
                            <AlertWrapper type='error' text={message} />
                        </Grid>
            }
        </Grid>
    )
}

export default Complaints