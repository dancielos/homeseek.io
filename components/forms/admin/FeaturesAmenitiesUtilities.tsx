'use client';

import H2 from '@/components/htmlElements/H2';
import {
	AMENITIES_FEATURES,
	AMENITIES_NEARBY,
	UTILITIES_INCLUDED,
	customH2Style,
} from '@/data/constants';
import { CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material';
import {
	Autocomplete,
	Checkbox,
	Chip,
	Divider,
	FormControlLabel,
	FormGroup,
	Paper,
	TextField,
} from '@mui/material';

import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	SyntheticEvent,
	useEffect,
	useState,
} from 'react';
import AutocompleteAmenities from './AutocompleteAmenities';
import ListingTextField from './ListingTextField';
import FormContainer from './FormContainer';
import { InputData } from './ListingForm';

// import dynamic from 'next/dynamic';

// const AutocompleteAmenities = dynamic(() => import('./AutocompleteAmenities'));

const icon = <CheckBoxOutlineBlank fontSize='small' />;
const checkedIcon = <CheckBox fontSize='small' />;

export default function FeaturesAmenitiesUtilities({
	data,
}: {
	data?: InputData;
}) {
	const [valueFeatures, setValueFeatures] = useState([AMENITIES_FEATURES[0]]);
	const [valueNearby, setValueNearby] = useState([AMENITIES_NEARBY[0]]);
	const [valueUtilities, setValueUtilities] = useState<string[]>([]);

	useEffect(() => {
		if (data) {
			if (data?.amenitiesFeatures) setValueFeatures(data.amenitiesFeatures);
			if (data?.amenitiesNearby) setValueNearby(data.amenitiesNearby);
			// if (data?.amenitiesOthers) setValueUtilities(data.amenitiesOthers);
		}
	}, [data, setValueFeatures, setValueNearby]);
	// const [valueFeatures, setValueFeatures] = useState([AMENITIES_FEATURES[0]]);
	// const [valueNearby, setValueNearby] = useState<string[]>([AMENITIES_FEATURES[0]]);

	// console.log(value);

	function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
		const isChecked = event.target?.checked;
		const value = event.target?.value;

		// Update the array of selected utilities based on the checkbox state
		if (isChecked) {
			setValueUtilities([...valueUtilities, value]);
		} else {
			setValueUtilities(valueUtilities.filter((utility) => utility !== value));
		}
	}
	return (
		<FormContainer title='Features and Amenities'>
			<input
				type='hidden'
				name='amenitiesFeatures'
				value={JSON.stringify(valueFeatures)}
			/>
			<AutocompleteAmenities
				label='Features'
				value={valueFeatures}
				setValue={setValueFeatures}
				options={AMENITIES_FEATURES}
			/>
			<Divider sx={{ m: 2 }} />

			<input
				type='hidden'
				name='amenitiesNearby'
				value={JSON.stringify(valueNearby)}
			/>
			<AutocompleteAmenities
				label='Nearby'
				value={valueNearby}
				setValue={setValueNearby}
				options={AMENITIES_NEARBY}
			/>

			<Divider sx={{ m: 2 }} />

			<ListingTextField
				name='amenitiesOthers'
				label='Others'
				placeholder='Separate values with comma (,)'
				multiline
				rows={6}
				required={false}
				defaultValue={data?.amenitiesOthers ?? ''}
			/>

			<Divider sx={{ my: 3 }} />
			<H2 sx={customH2Style}>Utilities Included</H2>
			<input type='hidden' name='utilities' value={'' + valueUtilities} />
			{UTILITIES_INCLUDED.map((utility, i) => (
				<FormControlLabel
					control={<Checkbox onChange={handleCheckboxChange} />}
					label={utility}
					key={`${utility}-${i}`}
					// name='utilities'
					value={utility}
					id={`utilities-${utility}`}
				/>
			))}
		</FormContainer>
	);
}
