'use client';

import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../../client/CTA';
import Agreement from './Agreement';

import AddressBasicDetails from './AddressBasicDetails';
import FeaturesAmenitiesUtilities from './FeaturesAmenitiesUtilities';
import ImageUpload from './ImageUpload';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useFormState } from 'react-dom';

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

export default function ListingForm({
	id = 'new-property-form',
}: {
	id: string;
}) {
	const [valueFeatures, setValueFeatures] = useState<string[]>([
		AMENITIES_FEATURES[0],
	]);

	// const debouncedFeatures = useDebounce(valueFeatures);

	async function test(prevState: string, formData: FormData) {
		console.log(Array.from(formData.entries()));
		// console.log({ debouncedFeatures });
		return '';
	}

	// const test2 = test.bind(null, { features: debouncedFeatures });
	const [response, formAction] = useFormState(test, '');

	return (
		<Grid
			container
			columns={10}
			spacing={1}
			component='form'
			id={id}
			action={formAction}
		>
			<Grid xs={10} md={5}>
				<AddressBasicDetails />
			</Grid>
			<Grid
				xs={10}
				md={5}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}
			>
				<input type='hidden' name='amenities-features' value={valueFeatures} />
				<FeaturesAmenitiesUtilities
					featuresOptions={AMENITIES_FEATURES}
					valueFeatures={valueFeatures}
					setValueFeatures={setValueFeatures}
				/>
				<ImageUpload />
			</Grid>

			<Grid xs={10}>
				<Agreement />
			</Grid>
			<Grid
				xs={10}
				sx={{
					mt: 1,
					display: 'flex',
					justifyContent: 'space-between',
					flexDirection: {
						xs: 'column',
						xm: 'row',
					},
					gap: 2,
				}}
			>
				<Button color='warning' size='small' variant='outlined'>
					Delete
				</Button>
				<CTA type='submit'>Save / Update Property</CTA>
			</Grid>
		</Grid>
	);
}
