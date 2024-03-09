'use server';

import { isValidObjectId } from 'mongoose';
import { getSession } from './auth';

import ListingModel from '@/models/Listing';
import { FormResponse } from '@/data/types';
import hashFilename from '../hashFilename';
import { validateListingInput } from '../validators/validateListingInput';
import formatListingInputData from '../formatters/formatListingInputData';
import connectDB from '../db';
import compareUploadedImages from '../compareUploadedImages';
import deleteFromS3 from './deleteFromS3';
import uploadToS3 from './uploadToS3';
import { revalidatePath } from 'next/cache';

export default async function updateListing(
	formData: FormData
): Promise<FormResponse> {
	// console.log(Object.fromEntries(formData.entries()));
	const listingId = formData.get('listingId');
	if (!isValidObjectId(listingId)) {
		return {
			success: false,
			message: 'Something went wrong, please try again.',
			invalidInput: [],
			id: '',
		};
	}
	await connectDB();
	const listing = await ListingModel.findById(listingId);
	if (!listing) {
		return {
			success: false,
			message: 'Something went wrong, please try again.',
			invalidInput: [],
			id: '',
		};
	}

	const session = await getSession();
	const isSuperAdmin = session?.user.role === 0;
	const isAuthorized =
		!session ||
		session.role > 1 ||
		(!isSuperAdmin && listing.userId.toString() !== session.user.id);

	if (isAuthorized) {
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
		uploadedImages,
		amenitiesFeatures,
		amenitiesNearby,
		amenitiesOthers,
		agreement,
	} = Object.fromEntries(formData.entries());

	const parsedUploadedImages = JSON.parse(uploadedImages.toString());
	console.log('RAW: ', parsedUploadedImages);

	// validate the data

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
		uploadedImages: parsedUploadedImages,
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

	const { userId, date, ...formattedData } = formatListingInputData({
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
		uploadedImages: parsedUploadedImages,
	});

	// console.log(formattedData);

	// check if there's a difference between
	// old uploadedImages vs. new uploadedImages
	// if there's a change (create a CONST for this)
	// that means you need to delete
	// some object from S3

	const comparedImages = compareUploadedImages(
		listing.img,
		parsedUploadedImages
	);

	try {
		if (!comparedImages.isTheSame) {
			const s3Response = await deleteFromS3(comparedImages.toDelete);
			if (!s3Response) throw Error(`Failed to update images.`);
		}

		const s3Response = await uploadToS3(images, filenames);
		if (!s3Response) throw Error('Failed to upload images.');

		// const newListing = await ListingModel.create(formattedData);

		const updatedListing = await ListingModel.findByIdAndUpdate(
			listingId,
			formattedData
		);

		revalidatePath('/(admin)/properties', 'page');

		return {
			success: true,
			message: '',
			invalidInput: isValid.invalidInputs,
			id: listing._id.toString(),
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

	// format the data (new image)
	// format the data with old image
	// delete from S3, if needed
	// save data

	// const isValid = isValidObjectId(params.id);
	// if (!isValid) redirect('/');
}
