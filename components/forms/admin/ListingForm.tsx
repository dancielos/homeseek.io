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
import { useRouter } from 'next/navigation';
import ListingFormSubmit from './ListingFormSubmit';
import Alert from './Alert';

export default function ListingForm({
	id = 'new-property-form',
}: {
	id: string;
}) {
	const router = useRouter();

	const [response, formAction] = useFormState(postListing, null);

	const isError = !response?.success;
	const errorMessage = response?.message;
	const invalidInputs = response?.invalidInput ?? [];

	if (isError) window.scrollTo({ top: 0, behavior: 'smooth' });
	else router.push(`/listing/${response.id}?status=success`);

	return (
		<>
			<Grid
				container
				columns={10}
				spacing={1}
				component='form'
				id={id}
				action={formAction}
			>
				{invalidInputs.length > 0 && (
					<Alert message={errorMessage as string} isError={isError} />
				)}
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
					<ListingFormSubmit text='Save Listing' isError={isError} />
				</Grid>
			</Grid>
		</>
	);
}
