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
	Paper,
	TextField,
} from '@mui/material';

import { Dispatch, SetStateAction, useState } from 'react';
import AutocompleteAmenities from './AutocompleteAmenities';
import ListingTextField from './ListingTextField';
import FormContainer from './FormContainer';

// import dynamic from 'next/dynamic';

// const AutocompleteAmenities = dynamic(() => import('./AutocompleteAmenities'));

const icon = <CheckBoxOutlineBlank fontSize='small' />;
const checkedIcon = <CheckBox fontSize='small' />;

export default function FeaturesAmenitiesUtilities() {
	const [valueFeatures, setValueFeatures] = useState([AMENITIES_FEATURES[0]]);
	const [valueNearby, setValueNearby] = useState([AMENITIES_NEARBY[0]]);
	// const [valueFeatures, setValueFeatures] = useState([AMENITIES_FEATURES[0]]);
	// const [valueNearby, setValueNearby] = useState<string[]>([AMENITIES_FEATURES[0]]);

	// console.log(value);
	return (
		<FormContainer title='Features and Amenities'>
			<input type='hidden' name='amenities-features' value={valueFeatures} />
			<AutocompleteAmenities
				label='Features'
				value={valueFeatures}
				setValue={setValueFeatures}
				options={AMENITIES_FEATURES}
			/>
			<Divider sx={{ m: 2 }} />

			<input type='hidden' name='amenities-nearby' value={valueNearby} />
			<AutocompleteAmenities
				label='Nearby'
				value={valueNearby}
				setValue={setValueNearby}
				options={AMENITIES_NEARBY}
			/>

			<Divider sx={{ m: 2 }} />

			<ListingTextField
				name='amenities-others'
				label='Others'
				placeholder='Separate values with comma (,)'
				multiline
				rows={6}
				required={false}
			/>

			<Divider sx={{ my: 3 }} />
			<H2 sx={customH2Style}>Utilities Included</H2>
			{UTILITIES_INCLUDED.map((utility, i) => (
				<FormControlLabel
					control={<Checkbox />}
					label={utility}
					key={`${utility}-${i}`}
					name='utilities'
					value={utility}
					id={`utilities-${utility}`}
				/>
			))}
		</FormContainer>
	);
}
