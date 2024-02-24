import { OtherHousesOutlined } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { ChangeEvent, MouseEvent, useState } from 'react';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
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

	return (
		<FilterButton
			label='More'
			Icon={<OtherHousesOutlined />}
			onClick={handleClick}
			popoverOpen={open}
			anchorEl={anchorEl}
			onPopoverClose={handleClose}
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
		</FilterButton>
	);
}
