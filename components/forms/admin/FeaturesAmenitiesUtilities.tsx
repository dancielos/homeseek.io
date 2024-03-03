'use client';

import H2 from '@/components/htmlElements/H2';
import { customH2Style } from '@/data/constants';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import {
	Autocomplete,
	Checkbox,
	Chip,
	Divider,
	FormControlLabel,
	Paper,
	TextField,
} from '@mui/material';

import { Dispatch, SetStateAction, useMemo, useState } from 'react';

const AMENITIES_FEATURES = [
	'On-Site Staff',
	'Fitness Area',
	'Laundry Facilities',
	'Parking - Underground',
	'Elevator',
	'Storage Lockers',
	'Recreation Room',
	'Swimming Pool',
	'Balcony',
	'Central Heating',
	'Air Conditioning',
	'Pet Friendly',
	'Wheelchair Accessible',
	'Gymnasium',
	'Roof Deck',
	'24/7 Security',
	'Concierge Service',
	'BBQ Area',
	'Garden',
	'Childcare Facility',
];

const AMENITIES_NEARBY = [
	'Schools',
	'Shopping',
	'Convenience Store',
	'Public Transit',
	'Parks',
	'Restaurants',
	'Pharmacy',
	'Gym/Fitness Center',
	'Hospital/Clinic',
	'Library',
];

const icon = <CheckBoxOutlineBlank fontSize='small' />;
const checkedIcon = <CheckBox fontSize='small' />;

export default function FeaturesAmenitiesUtilities({
	featuresOptions,
	valueFeatures,
	setValueFeatures,
}: {
	featuresOptions: string[];
	valueFeatures: string[];
	setValueFeatures: Dispatch<SetStateAction<string[]>>;
}) {
	// const [valueNearby, setValueNearby] = useState<string[]>([AMENITIES_FEATURES[0]]);

	// console.log(value);
	return (
		<Paper elevation={3}>
			<H2 sx={customH2Style}>Features and Amenities</H2>

			<Autocomplete
				multiple
				value={valueFeatures}
				onChange={(event: any, newValue: string[]) => {
					setValueFeatures(newValue);
				}}
				options={AMENITIES_FEATURES}
				disableCloseOnSelect
				renderOption={(props, option, { selected }) => (
					<li {...props} key={option}>
						<Checkbox
							icon={icon}
							checkedIcon={checkedIcon}
							style={{ marginRight: 8 }}
							checked={selected}
						/>
						{option}
					</li>
				)}
				renderTags={(value: string[], getTagProps) =>
					value.map((option: string, index: number) => (
						<Chip
							variant='outlined'
							label={option}
							{...getTagProps({ index })}
						/>
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						value={valueFeatures}
						variant='outlined'
						label='Features'
						color='secondary'
					/>
				)}
			/>

			<Autocomplete
				multiple
				// value={value}
				// onChange={(event: any, newValue: string[]) => {
				// 	setValue(newValue);
				// }}
				options={AMENITIES_NEARBY}
				disableCloseOnSelect
				renderOption={(props, option, { selected }) => (
					<li {...props} key={option}>
						<Checkbox
							icon={icon}
							checkedIcon={checkedIcon}
							style={{ marginRight: 8 }}
							checked={selected}
						/>
						{option}
					</li>
				)}
				renderTags={(value: string[], getTagProps) =>
					value.map((option: string, index: number) => (
						<Chip
							variant='outlined'
							label={option}
							{...getTagProps({ index })}
						/>
					))
				}
				renderInput={(params) => (
					<TextField
						{...params}
						variant='outlined'
						label='Nearby'
						id='amenities-nearby'
						name='amenities-nearby'
						color='secondary'
					/>
				)}
			/>

			<Divider sx={{ my: 2 }} />
			<H2 sx={customH2Style}>Utilities Included</H2>
			<FormControlLabel required control={<Checkbox />} label='Dishwasher' />
			<FormControlLabel
				required
				control={<Checkbox />}
				label='Laundry machine'
			/>
			<FormControlLabel required control={<Checkbox />} label='Oven range' />
		</Paper>
	);
}
