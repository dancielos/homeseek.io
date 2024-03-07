'use client';

import { Button, Snackbar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../../client/CTA';
import Agreement from './Agreement';

import AddressBasicDetails from './AddressBasicDetails';
import FeaturesAmenitiesUtilities from './FeaturesAmenitiesUtilities';
import ImageUpload from './ImageUpload';

import { useFormState } from 'react-dom';

import { postListing } from '@/utils/server-actions/postListing';

export default function ListingForm({
	id = 'new-property-form',
}: {
	id: string;
}) {
	const [response, formAction] = useFormState(postListing, null);

	console.log(response);

	const isError = !response?.success;
	const errorMessage = response?.message;
	const invalidInputs = response?.invalidInput;

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
				<AddressBasicDetails invalidInputs={invalidInputs as string[]} />
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
				<FeaturesAmenitiesUtilities />
			</Grid>
			<Grid xs={10}>
				<ImageUpload invalidInputs={invalidInputs as string[]} />
			</Grid>
			<Grid xs={10}>
				<Agreement invalidInputs={invalidInputs as string[]} />
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
