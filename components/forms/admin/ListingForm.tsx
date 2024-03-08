'use client';

import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Agreement from './Agreement';

import AddressBasicDetails from './AddressBasicDetails';
import FeaturesAmenitiesUtilities from './FeaturesAmenitiesUtilities';
import ImageUpload from './ImageUpload';

import { FormResponse, postListing } from '@/utils/server-actions/postListing';
import { useRouter } from 'next/navigation';
import ListingFormSubmit from './ListingFormSubmit';
import Alert from './Alert';
import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { ListingSelectOptions, PropertyType } from '@/data/types';

export interface FileWithPreview extends File {
	preview: string;
}

export type InputData = {
	id: string;
	street: string;
	cityProvince: ListingSelectOptions;
	postalCode: string;
	propertyType: PropertyType;
	price: number;
	numBedrooms: number;
	numBathrooms: number;
	isPetFriendly: 'yes' | 'no';
	about: string;
	utilities: string[];
	img: string[];
	amenitiesFeatures: string[];
	amenitiesNearby: string[];
	amenitiesOthers: string;
} | null;

export default function ListingForm({
	id = 'new-property-form',
	action = 'add',
	data,
}: {
	id: string;
	action: 'add' | 'edit';
	data?: InputData;
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
					<AddressBasicDetails
						invalidInputs={invalidInputs as string[]}
						data={data}
					/>
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
					<FeaturesAmenitiesUtilities data={data} />
				</Grid>
				<Grid xs={10}>
					<ImageUpload
						invalidInputs={invalidInputs as string[]}
						files={files}
						setFiles={setFiles}
						action={action}
						images={data?.img || []}
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
						justifyContent: action === 'edit' ? 'space-between' : 'flex-end',
						flexDirection: {
							xs: 'column',
							xm: 'row',
						},
						gap: 2,
					}}
				>
					{action === 'edit' && (
						<Button color='warning' size='small' variant='outlined'>
							Delete
						</Button>
					)}
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
