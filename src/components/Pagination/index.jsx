import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from '@mui/material'

const PaginationWrapper = ({ }) => {
	return (
		<Pagination count={20} color='primary' shape='rounded'/>
	)
}

PaginationWrapper.propTypes = {}

export default PaginationWrapper