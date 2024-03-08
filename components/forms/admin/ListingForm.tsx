'use client';

import { Button, Snackbar } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import CTA from '../../client/CTA';
import Agreement from './Agreement';

import AddressBasicDetails from './AddressBasicDetails';
import FeaturesAmenitiesUtilities from './FeaturesAmenitiesUtilities';
import ImageUpload from './ImageUpload';

import { useFormState } from 'react-dom';

import { FormResponse, postListing } from '@/utils/server-actions/postListing';
import { useRouter } from 'next/navigation';
import ListingFormSubmit from './ListingFormSubmit';
import Alert from './Alert';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export interface FileWithPreview extends File {
	preview: string;
}

export default function ListingForm({
	id = 'new-property-form',
}: {
	id: string;
}) {
	const router = useRouter();
	const [files, setFiles] = useState<FileWithPreview[]>([]);
	const [pending, setPending] = useState<boolean>(false);
	const formRef = useRef(null);

	// const postListingWithFiles = postListing.bind(null, files);
	const [formState, setFormState] = useState<FormResponse>(null);

	// const [response, formAction] = useFormState(postListing, null

	const isError = !formState?.success;
	const errorMessage = formState?.message;
	const invalidInputs = formState?.invalidInput ?? [];

	useEffect(() => {
		if (isError) window.scrollTo({ top: 0, behavior: 'smooth' });
		else router.push(`/listing/${formState.id}?status=success`);
	}, [formState]);

	async function formAction(e: SyntheticEvent) {
		setPending(true);
		e.preventDefault();
		const formData = new FormData(formRef.current!);
		files.forEach((file, i) => {
			formData.append(`img[${i}]`, file);
		});

		const response = await postListing(formData);
		setFormState(response);
		setPending(false);
	}

	return (
		<>
			<Grid
				container
				columns={10}
				spacing={1}
				component='form'
				id={id}
				// action={formAction}
				onSubmit={formAction}
				ref={formRef}
			>
				{/* {invalidInputs.length > 0 && ( */}
				{isError && errorMessage && errorMessage !== '' && (
					<Alert
						message={errorMessage as string}
						isError={isError}
						pending={pending}
					/>
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
					<ImageUpload
						invalidInputs={invalidInputs as string[]}
						files={files}
						setFiles={setFiles}
					/>
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
					<ListingFormSubmit
						text='Save Listing'
						isError={isError}
						pending={pending}
					/>
				</Grid>
			</Grid>
		</>
	);
}
