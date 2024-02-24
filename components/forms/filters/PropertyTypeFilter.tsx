import { HomeWorkOutlined } from '@mui/icons-material';
import FilterButton from './FilterButton';
import { ChangeEvent, MouseEvent, useState } from 'react';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material';
import { PROPERTY_TYPE } from '@/data/types';
import { propertyTypesArray } from '@/data/constants';

export default function PropertyTypeFilter() {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const [propertyCheckboxes, setPropertyCheckboxes] = useState(
		Object.fromEntries(
			Object.entries(PROPERTY_TYPE).map(([key]) => [key, true])
		)
	);
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPropertyCheckboxes({
			...propertyCheckboxes,
			[event.target.name]: event.target.checked,
		});
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<FilterButton
			label='Property Type'
			Icon={<HomeWorkOutlined />}
			onClick={handleClick}
			popoverId={id}
			popoverOpen={open}
			anchorEl={anchorEl}
			onPopoverClose={handleClose}
		>
			<FormControl
				sx={{ m: 3, bgcolor: 'unset' }}
				component='fieldset'
				variant='standard'
			>
				<Typography component='legend' sx={{ pb: 1 }}>
					You can select different properties at a time:
				</Typography>
				<FormGroup>
					{propertyTypesArray.map((property, i) => {
						return (
							<FormControlLabel
								key={`${property}-${i}`}
								control={
									<Checkbox
										defaultChecked
										checked={propertyCheckboxes[property.name]}
										onChange={handleChange}
										name={property.name}
									/>
								}
								label={property.value}
							/>
						);
					})}
				</FormGroup>
			</FormControl>
		</FilterButton>
	);
}
