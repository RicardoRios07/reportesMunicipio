import { IconButton, Menu, MenuItem, Stack, useTheme } from '@mui/material';
import { useState } from 'react';
import { RiMore2Line } from "@remixicon/react";
import PropTypes from 'prop-types';


const MenuWrapper = ({ id, options, state, primaryFunction }) => {
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState(false)
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (event) => {
		setAnchorEl(null)
		if (!event.currentTarget.id) return
		if (event.currentTarget.id !== state) {
			primaryFunction(id, event.currentTarget.id)
		}
	};
	const ITEM_HEIGHT = 68;
	return (
		<Stack>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls={open ? 'long-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={handleClick}>
				<RiMore2Line color={theme.colors.warning.main} />
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}

				sx={{
					maxHeight: ITEM_HEIGHT * 4.5,
					width: '25ch',
					'& .MuiPaper-root': {
						border: theme => `1px solid ${theme.colors.info.main}`
					}
				}}>
				{
					options.map((option) => (
						<MenuItem id={option} key={option} onClick={handleClose} disabled={option === state}>
							{option}
						</MenuItem>
					))
				}
			</Menu>
		</Stack>
	)
}
MenuWrapper.propTypes = {
	id: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	state: PropTypes.string,
	primaryFunction: PropTypes.func

}
export default MenuWrapper