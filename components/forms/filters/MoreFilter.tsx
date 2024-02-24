import { HomeWorkOutlined, OtherHousesOutlined } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { ChangeEvent, MouseEvent, useState } from 'react';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Popover,
	Typography,
} from '@mui/material';

export default function MoreFilter() {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [checkboxes, setCheckboxes] = useState({
		isPetFriendly: true,
	});

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCheckboxes({
			...checkboxes,
			[event.target.name]: event.target.checked,
		});
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<FilterButton
			label='More'
			Icon={<OtherHousesOutlined />}
			onClick={handleClick}
		>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<FormControl
					sx={{ m: 3, bgcolor: 'unset' }}
					component='fieldset'
					variant='standard'
				>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									defaultChecked
									checked={checkboxes.isPetFriendly}
									onChange={handleChange}
									name={'isPetFriendly'}
								/>
							}
							label={'Pet Friendly'}
						/>
					</FormGroup>
				</FormControl>
			</Popover>
		</FilterButton>
	);
}
