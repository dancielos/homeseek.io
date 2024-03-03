'use client';

import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../../client/CTA';
import Agreement from './Agreement';

import AddressBasicDetails from './AddressBasicDetails';
import FeaturesAmenitiesUtilities from './FeaturesAmenitiesUtilities';
import ImageUpload from './ImageUpload';
import { Suspense, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useFormState } from 'react-dom';
import { AMENITIES_FEATURES, AMENITIES_NEARBY } from '@/data/constants';

export default function ListingForm({
	id = 'new-property-form',
}: {
	id: string;
}) {
	const [valueFeatures, setValueFeatures] = useState([AMENITIES_FEATURES[0]]);
	const [valueNearby, setValueNearby] = useState([AMENITIES_NEARBY[0]]);
	const [valueOthers, setValueOthers] = useState([]);

	// const debouncedFeatures = useDebounce(valueFeatures);

	function test(prevState: string, formData: FormData) {
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
				<input type='hidden' name='amenities-nearby' value={valueNearby} />

				<FeaturesAmenitiesUtilities
					valueFeatures={valueFeatures}
					setValueFeatures={setValueFeatures}
					valueNearby={valueNearby}
					setValueNearby={setValueNearby}
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
