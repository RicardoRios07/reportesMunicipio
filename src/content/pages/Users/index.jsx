import { Grid, Skeleton, Stack, Typography } from '@mui/material'
import Form from '../Users/form'
import { useUsers } from 'src/hooks/useUsers'
import AlertWrapper from 'src/components/Alert'
import SnackbarWrapper from 'src/components/SnackbarWrapper'

const Users = () => {
    const {
        users,
        isOpen,
        dataUser,
        showForm,
        handleChangeStateUser,
        handleCloseChangeStatus,
        handleOpenChangeStatus,
        handleOpenDetailsUser,
        handleCloseDetailsUser,
        isOpenSnack,
        handleCloseSnack
    } = useUsers()
    const { code, message, data, loading } = users


    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            rowSpacing={2}>
            <Grid item xs={12}>
                <Typography variant='h1' >Usuarios</Typography>
            </Grid>
            <SnackbarWrapper
                open={isOpenSnack}
                handleClose={handleCloseSnack}
                type={dataUser?.code === 200 ? 'success' : 'error'}
                text={dataUser?.message || ''} />
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
                            < Form
                                data={data}
                                isOpen={isOpen}
                                // chage status acction
                                handleOpenChangeStatus={handleOpenChangeStatus}
                                handleCloseChangeStatus={handleCloseChangeStatus}
                                handleChangeStateUser={handleChangeStateUser}
                                // view details
                                handleOpenDetailsUser={handleOpenDetailsUser}
                                handleCloseDetailsUser={handleCloseDetailsUser}
                                userSelected={dataUser}
                                showForm={showForm}
                            />
                        </Grid>
                        :
                        <Grid item xs={12}>
                            <AlertWrapper type='error' text={message} />
                        </Grid>
            }
        </Grid >
    )
}

export default Users