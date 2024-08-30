import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	styled,
	useTheme
} from '@mui/material'
import { RiCloseFill } from '@remixicon/react';
import PropTypes from 'prop-types'
import React from 'react'
import SuspenseLoader from '../SuspenseLoader';


const DialogCustom = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
	'.MuiDialog-paper': {
		backgroundColor: theme.palette.background.paper,
		[theme.breakpoints.up('md')]: {
			maxWidth: '60%',
			minWidth: '40%',
			maxHeight: 'max-content'
		},
		[theme.breakpoints.down('md')]: {
			maxWidth: '100%',
			minWidth: '100%',
			maxHeight: '50%'
		},
	}
}))

const DialogTitleWrapper = ({ children, onClose, ...rest }) => {
	const theme = useTheme()

	return (
		<DialogTitle sx={{ m: 0, p: 2 }}{...rest}>
			{children}
			{
				onClose ? (
					<IconButton
						onClick={onClose}
						sx={{
							position: absolute,
							right: 7,
							top: 7
						}}>
						<RiCloseFill color={theme.colors.primary.main} />
					</IconButton>
				)
					:
					null
			}
		</DialogTitle>
	)
}
DialogTitleWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	onClose: PropTypes.func.isRequired
}
const DialogWrapper = ({
	isOpen,
	handleClose,
	title,
	isDividers,
	content,
	btnActionFirst,
	btnLabelFirst,
	isBtnDisabledFirst,
	btnFormFirst,
	btnLabelSecond,
	btnActionSecond,
	isLoading,
	className,
	isLoadingButton,
	isCenterButtons,
	minWidth
}) => {
	return (
		<DialogCustom
			onClose={handleClose}
			aria-labelledby="dialog-title"
			open={isOpen}
			className={className}
			sx={{
				'.MuiDialog-paper': {
					minWidth,
				}
			}
			} >
			{
				(isOpen && isLoading)
					?
					<>
						<DialogContent dividers={isDividers}>
							<Grid container height={'100px'}>
								<SuspenseLoader />
							</Grid>
						</DialogContent>
					</>
					:
					<>
						{
							title
							&&
							<DialogTitleWrapper id="dialog-title" onClose={handleClose}>
								{title}
							</DialogTitleWrapper>
						}
						{
							isOpen
							&&
							<DialogContent dividers={isDividers}>
								{content}
							</DialogContent>
						}
						{
							isLoadingButton
								?
								<Grid container height={'100px'}>
									<SuspenseLoader position='initial' />
								</Grid>
								:
								<>
									{
										(btnLabelSecond || btnLabelFirst)
										&&
										<DialogActions sx={{ justifyContent: `${isCenterButtons ? 'center' : 'flex-end'}` }}>
											{
												btnLabelSecond
												&&
												<Button
													size="large"
													variant="outlined"
													color='secondary'
													onClick={btnActionSecond}
													sx={{
														mr: btnLabelFirst ? 4 : 0,
														maxWidth: '230px',
														minWidth: '130px'
													}}>{btnLabelSecond}</Button>
											}
											{
												btnLabelFirst
												&&
												<Button
													size="large"
													variant="contained"
													onClick={btnActionFirst}
													form={btnFormFirst}
													type={btnFormFirst ? 'submit' : 'button'}
													disabled={isBtnDisabledFirst}
													sx={{
														ml: 0,
														maxWidth: '230px',
														minWidth: '130px'
													}}>{btnLabelFirst}</Button>
											}
										</DialogActions>
									}
								</>
						}
					</>
			}
		</DialogCustom>
	)
}
export default DialogWrapper