import { Box, Pagination, useTheme } from "@mui/material";
import MUIDataTable from "mui-datatables";
import PropTypes from 'prop-types'
import { useTable } from "src/hooks/useTable";

const Table = ({
	title,
	filter,
	filterType,
	messageNoData,
	dataList,
	sxTable,
	height,
	isPrint,
	isPagination,
	isPadding,
	...rest

}) => {
	const theme = useTheme();
	const { palette: { mode } } = theme;

	const { dataColumn, dataRow, paginationData, handleChangePage } = useTable({
		isPagination,
		filter,
		dataList,
		...rest,
	});
	const { rowsPerPage, countPagination } = paginationData
	const options = {
		filter: false,
		search: true,
		print: isPrint,
		download: false,
		viewColumns: false,
		filterType: filterType,
		selectableRows: "none",
		responsive: "standard",
		pagination: false,
		tableBodyMaxHeight: height,
		rowsPerPage,
		textLabels: {
			body: {
				noMatch: messageNoData,
				toolTip: "Ordenar",
				columnHeaderTooltip: column => `Ordenar por ${column.label}`
			},
			toolbar: {
				print: "Imprimir"
			}
		}
	};
	const widthBorder = mode === 'dark' ? 2 : 1
	const colorBorder = mode === 'dark' ? theme.sidebar.dividerBg : 'rgba(34, 51, 84, 0.1)'
	return (
		<Box
			sx={{
				...sxTable,
				'& .MuiTableRow-head th:last-child': {
					borderTopRightRadius: 10,
				},
				'& .MuiTableRow-head th:first-of-type': {
					borderTopLeftRadius: 10,
				},
				'& .MuiTableCell-root': {
					borderRight: `${widthBorder}px solid ${colorBorder}`,
					borderLeft: `${widthBorder}px solid ${colorBorder}`,
					padding: isPadding ? '5px 10px !important' : '16px !important'
				},
				'& .MuiTableCell-root:last-child': {
					borderRight: 'none'
				},
				'& .MuiTableCell-root:first-of-type': {
					borderLeft: 'none'
				},
				'& .MuiTableBody-root tr:last-child td:nth-of-type(n)': {
					borderBottom: 'none'
				}
			}}>
			<MUIDataTable title={title} options={options} columns={dataColumn} data={dataRow} />
			{
				(isPagination && (countPagination > 1))
				&&
				<Box width='100%' display='flex' justifyContent='center' mt='3%'>
					<Pagination count={countPagination} variant="rounded" shape="rounded" onChange={handleChangePage} color="primary"/>
				</Box>
			}
		</Box>
	)
}
Table.propTypes = {
	title: PropTypes.string,
	filter: PropTypes.any,
	filterType: PropTypes.string,
	messageNoData: PropTypes.string,
	dataList: PropTypes.array.isRequired,
	sxTable: PropTypes.object,
	height: PropTypes.string,
	isPrint: PropTypes.bool,
	isPadding: PropTypes.bool,
	isPagination: PropTypes.bool,
	handleServiceStateChange: PropTypes.func,
}

Table.defaultProps = {
	filter: 'default',
	filterType: 'dropdown',
	messageNoData: 'Sin datos',
	height: 'auto',
	isPrint: false,
	isPadding: true,
	isPagination: false,
}
export default Table