import { Grid } from '@mui/material'
import DialogWrapper from 'src/components/DialogWrapper'
import Table from 'src/components/Table'
import ChangeState from './ChangeState'
import ViewDetails from './ViewDetails'

const Users = ({ data, ...rest }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            rowSpacing={2}>
            <DialogWrapper
                sx={{ width: '90% !important' }}
                isOpen={rest.isOpen}
                handleClose={rest.handleCloseChangeStatus}
                minWidth='50% !important'
                isDividers={false}
                content={
                    rest.showForm === 'formStatus'
                        ? <ChangeState
                            secondaryAction={rest.handleCloseChangeStatus}
                            primaryAction={rest.handleChangeStateUser}
                            userSelected={rest.userSelected} />
                        : <ViewDetails
                            primaryAction={rest.handleCloseDetailsUser}
                            userSelected={rest.userSelected} />
                } />

            <Grid item xs={12}>
                <Table
                    filter='all_users'
                    dataList={data || []}
                    isPagination
                    handleOpenDetailsUser={rest.handleOpenDetailsUser}
                    handleOpenChangeStatus={rest.handleOpenChangeStatus}
                />
            </Grid>


        </Grid>
    )
}

export default Users