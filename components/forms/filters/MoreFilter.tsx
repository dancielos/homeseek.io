import { OtherHousesOutlined } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { ChangeEvent, useState } from 'react';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
} from '@mui/material';

export default function MoreFilter() {
	const [checkboxes, setCheckboxes] = useState({
		isPetFriendly: true,
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCheckboxes({
			...checkboxes,
			[event.target.name]: event.target.checked,
		});
	};

	return (
		<FilterButton label='More' Icon={<OtherHousesOutlined />}>
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
