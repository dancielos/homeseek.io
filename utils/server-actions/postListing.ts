'use server';

import ListingModel from '@/models/Listing';
import { getSession } from './auth';
import { FormResponse } from '@/data/types';
import connectDB from '../db';
import hashFilename from '../hashFilename';
import { revalidatePath } from 'next/cache';
import { validateListingInput } from '../validators/validateListingInput';
import formatListingInputData from '../formatters/formatListingInputData';
import uploadToS3 from './uploadToS3';

export async function postListing(
	// files: FileWithPreview[]
	// prevState: FormResponse,
	formData: FormData
): Promise<FormResponse> {
	const session = await getSession();

	if (!session || session.role > 1) {
		return {
			success: false,
			message: 'You are not authorized. Please sign in again. ',
			invalidInput: [],
			id: '',
		};
	}

	const {
		street,
		cityProvince,
		postalCode,
		propertyType,
		price,
		numBedrooms,
		numBathrooms,
		isPetFriendly,
		about,
		utilities,
		// img,
		amenitiesFeatures,
		amenitiesNearby,
		amenitiesOthers,
		agreement,
	} = Object.fromEntries(formData.entries());

	const images: Array<File> = [0, 1, 2, 3, 4]
		.map((i) => {
			return formData.get(`img[${i}]`) as File;
		})
		.filter((image) => image !== null);

	const filenames = images.map((image, i) => {
		return `tmp/${hashFilename(image.name, i)}`;
	});

	const isValid = validateListingInput({
		img: filenames,
		street,
		cityProvince,
		postalCode,
		propertyType,
		price,
		numBedrooms,
		numBathrooms,
		isPetFriendly,
		about,
		utilities,
		amenitiesFeatures,
		amenitiesNearby,
		amenitiesOthers,
		agreement,
	});

	if (!isValid.success) {
		return {
			success: isValid.success,
			message: 'There are some invalid field(s). Please try again.',
			invalidInput: isValid.invalidInputs,
			id: '',
		};
	}

	const formattedData = formatListingInputData({
		userId: session.user.id,
		street,
		cityProvince,
		postalCode,
		propertyType,
		price,
		numBedrooms,
		numBathrooms,
		isPetFriendly,
		about,
		utilities,
		img: filenames,
		amenitiesFeatures,
		amenitiesNearby,
		amenitiesOthers,
	});

	try {
		await connectDB();

		const s3Response = await uploadToS3(images, filenames);
		if (!s3Response) throw Error('Failed to upload images.');

		const newListing = await ListingModel.create(formattedData);

		revalidatePath('/(admin)/properties', 'page');

		return {
			success: true,
			message: '',
			invalidInput: isValid.invalidInputs,
			id: newListing._id.toString(),
			// id: 'newListing._id.toString()',
		};
	} catch (error) {
		console.error(error);
		return {
			success: false,
			message: `Something went wrong: ${error}`,
			invalidInput: isValid.invalidInputs,
			id: '',
		};
	}
}
