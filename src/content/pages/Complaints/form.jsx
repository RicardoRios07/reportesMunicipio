import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import Table from 'src/components/Table'
import DialogWrapper from 'src/components/DialogWrapper'
import FormDelete from './FormDelete'
import FormDetails from './FormDetails'
import FormConfirmState from './FormConfirmState'

const Complaints = ({ data, isOpen, ...rest }) => {
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            rowSpacing={2}>
            <DialogWrapper
                sx={{ width: '90% !important' }}
                isOpen={isOpen}
                handleClose={rest.handleCloseChangeStatus}
                minWidth='50% !important'
                maxHeight='50% !important'
                isDividers={false}
                content={
                    rest.showForm === 'formDelete'
                        ? <FormDelete
                            secondaryAction={rest.handleCloseDeleteComplaint}
                            primaryAction={rest.handleChangeStateComplaint}
                            complaintSelected={rest.complaintSelected} />
                        : rest.showForm === 'ConfirmChangeStateComplain'
                            ?
                            <FormConfirmState
                                primaryAction={rest.handleStateComplaint}
                                secondaryAction={rest.handleCloseConfirmChangeState}
                                complaintSelected={rest.complaintSelected} />
                            :
                            <FormDetails
                                primaryAction={() => rest.handleCloseDetailsComplaint()}
                                complaintDetails={rest.complaintSelected} />
                } />
            <Grid item xs={12}>
                <Table
                    filter='all_complaint'
                    dataList={data || []}
                    isPagination
                    //handleStateComplaint={rest.handleStateComplaint}
                    handleOpenDeleteComplaint={rest.handleOpenDeleteComplaint}
                    handleOpenDetailsComplaint={rest.handleOpenDetailsComplaint}
                    handleOpenConfirmChangeState={rest.handleOpenConfirmChangeState}
                />
            </Grid>
        </Grid>
    )
}
Complaints.propTypes = {
    isOpen: PropTypes.bool.isRequired
}
export default Complaints