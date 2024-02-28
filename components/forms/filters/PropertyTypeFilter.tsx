import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Typography,
} from '@mui/material';
import { PROPERTY_TYPE } from '@/data/types';
import { propertyTypesArray } from '@/data/constants';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/useDebounce';
import useSearchQuery from '@/hooks/useSearchQuery';

const PROPERTY_PARAM = 'property';

const initialValue = Object.fromEntries(
	Object.entries(PROPERTY_TYPE).map(([key]) => [key, true])
);

export default function PropertyTypeFilter() {
	const propertyParam = useSearchParams()?.get(PROPERTY_PARAM);
	// TODO:
	// when nothing is checked, the house is still checked

	const newValue = initialValue;
	console.log({ propertyParam, newValue });

	if (propertyParam) {
		const properties = propertyParam?.split(',');
		for (const key in newValue) {
			newValue[key] = properties?.includes(key) ? true : false;
		}
	} else {
		for (const key in newValue) {
			newValue[key] = true;
		}
	}
	const [propertyCheckboxes, setPropertyCheckboxes] = useState(newValue);

	const debouncedPropertyCheckboxes = useDebounce(propertyCheckboxes);

	const mappedValues = Object.entries(debouncedPropertyCheckboxes)
		.filter(([key, value]) => value === true)
		.map(([key, _]) => key)
		.join(',');

	useSearchQuery(PROPERTY_PARAM, mappedValues);

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setPropertyCheckboxes({
			...propertyCheckboxes,
			[event.target.name]: event.target.checked,
		});
	}

	return (
		<>
			<FormControl
				sx={{ m: 3, bgcolor: 'unset' }}
				component='fieldset'
				variant='standard'
				id='property-checkboxes'
			>
				<Typography component='legend' sx={{ pb: 1 }}>
					You can select different property types at a time:
				</Typography>
				<FormGroup>
					{propertyTypesArray.map((property, i) => {
						return (
							<FormControlLabel
								key={`${property}-${i}`}
								control={
									<Checkbox
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
		</>
	);
}
