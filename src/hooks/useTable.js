import { useEffect, useState } from "react";
import { Grid, IconButton, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import ImgWrapper from "src/components/ImgWrapper";
import AvatarWrapper from "src/components/AvatarWrapper";
import { RiUser4Fill, RiEyeFill, RiDeleteBin2Fill } from "@remixicon/react"
import ChipStatus from "src/components/ChipStatus";
import MenuWrapper from "src/components/MenuWrapper";

export const useTable = ({ filter, dataList, isPagination, ...rest }) => {
	const theme = useTheme();
	const [dataColumn, setDataColumn] = useState([]);
	const [dataRow, setDataRow] = useState([]);
	const [dataRowGroup, setDataRowGroup] = useState([]);

	const [paginationData, setPaginationData] = useState({
		rowsPerPage: 10,
		currentPage: 1,
		countPagination: 0
	});
	const { rowsPerPage } = paginationData;

	const handleChangePage = (_event, currentPage) => {
		setPaginationData({ ...paginationData, currentPage });
		setDataRow(dataRowGroup[currentPage]);
	};

	useEffect(() => {
		if (!dataList) return;

		const updateData = () => {
			setDataColumn(filterDataColumns[filter] || filterDataColumns['default']);
			const dataGroup = {};

			if (isPagination) {
				const countPagination = Math.ceil(dataList.length / rowsPerPage);

				setPaginationData((prevPaginationData) => ({
					...prevPaginationData,
					countPagination,
				}));

				const filterRow = filterDataRows[filter] || filterDataRows['default'];
				let count = 0;

				filterRow.forEach((row, index) => {
					if (index % rowsPerPage === 0) {
						count += 1;
						dataGroup[count] = [row];
					} else {
						dataGroup[count].push(row);
					}
				});

				setDataRowGroup(dataGroup);
				setDataRow(dataGroup[1] || []);
			} else {
				setDataRow(filterDataRows[filter] || filterDataRows['default']);
			}
		};

		updateData();

		return () => {
			setDataColumn([]);
			setDataRow([]);
			setDataRowGroup([]);
		};

	}, [dataList, filter, isPagination, rowsPerPage]);


	const filterDataColumns = {
		all_complaint: () => ([
			{
				name: "date",
				label: "Fecha",
			},
			{
				name: "complainant",
				label: "Denunciante",

			},
			{
				name: "title",
				label: "Título",

			},
			{
				name: "category",
				label: "Categoría",

			},
			{
				name: "state",
				label: "Estado",
				options: {
					customBodyRender: value =>
						<ChipStatus
							text={value}
							color={value === 'Atendida' ? 'success' : value === 'En proceso' ? 'warning' : 'info'} />
				}
			},

			{
				name: "action",
				label: "Acciones",
				options: {

					customBodyRender: value => {
						const statusComplain = [
							'En proceso',
							'En revisión',
							'Atendida'
						]
						return (
							<Stack direction='row' spacing={1}>
								<Tooltip title="Cambiar estado denuncia" >
									<>
										<MenuWrapper id={value._id} options={statusComplain} state={value.estado} primaryFunction={rest.handleOpenConfirmChangeState} />
									</>
								</Tooltip>
								<Tooltip title="Detalles denuncia" >
									<IconButton onClick={() => rest.handleOpenDetailsComplaint({ dataComplaint: value })}>
										<RiEyeFill color={theme.colors.info.main} />
									</IconButton>
								</Tooltip>
								<Tooltip title="Eliminar denuncia">
									<IconButton onClick={() => rest.handleOpenDeleteComplaint({ dataComplaint: value })} >
										<RiDeleteBin2Fill color={theme.colors.error.main} />
									</IconButton>
								</Tooltip>
							</Stack >
						)
					}
				}
			}
		]),
		all_users: [
			{
				name: "photo",
				label: "Perfil",
				options: {
					customBodyRender: value => {
						return (
							<Grid item container justifyContent='center'>
								<AvatarWrapper spacing={10}>
									<ImgWrapper img={value} height={'100%'} width={'100%'} />
								</AvatarWrapper>
							</Grid>
						)
					}
				}
			},
			{
				name: "id",
				label: "Cédula",
				options: {
					customBodyRender: value => <Typography variant='h5'>{value}</Typography>
				}
			},
			{
				name: "nameUser",
				label: "Nombres y Apellidos",
				options: {
					customBodyRender: value => <Typography variant='h4'>{value}</Typography>
				}
			},
			{
				name: "email",
				label: "Email",

			},
			{
				name: "phone",
				label: "Teléfono",
			},
			{
				name: "complaints",
				label: "Denuncias",
				options: {
					customBodyRender: value => <Typography variant='h5'>{value}</Typography>
				}
			},
			{
				name: "status",
				label: "Estado",
				options: {
					customBodyRender: value => <ChipStatus
						text={value ? 'Bloqueado' : 'Activo'}
						color={value ? 'error' : 'primary'} />
				}
			},
			{
				name: "actions",
				label: "Acciones",
				options: {
					customBodyRender: value => {
						const { isBlocked } = value
						return (
							<Stack direction='row' spacing={1}>
								<Tooltip title="Detalle del usuario" >
									<IconButton onClick={() => rest.handleOpenDetailsUser({ dataUser: value })}>
										<RiEyeFill color={theme.colors.info.main} />
									</IconButton>
								</Tooltip>
								<Tooltip title={isBlocked ? "Desbloquear Usuario" : "Bloquear usuario"} >
									<IconButton onClick={() => rest.handleOpenChangeStatus({ dataUser: value })}>
										<RiUser4Fill color={isBlocked ? theme.colors.warning.main : theme.colors.error.main} />
									</IconButton>
								</Tooltip>
							</Stack>
						)
					}
				}
			}
		],


		default: []
	}

	const filterDataRows = {
		all_complaint: dataList.map(element => ([
			element.fechaHora,
			element.nombreDenunciante,
			element.tituloDenuncia,
			element.categoria,
			element.estado,
			element
			// element.name,
			// element.ip,
			// `${element.id}-${element.name}-${element.status}`
		])),
		all_users: dataList.map(element => ([
			element.photo,
			element.cedula,
			element.nombreCompleto,
			element.email,
			element.numTelefono,
			element.numDenunciasRealizadas,
			element.isBlocked,
			element

		])),
		default: []
	}

	return {
		dataColumn,
		dataRow,
		paginationData,
		handleChangePage,
	};
};
