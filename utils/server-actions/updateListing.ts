'use server';

import { isValidObjectId } from 'mongoose';
import { getSession } from './auth';
import { FormResponse } from './postListing';
import ListingModel from '@/models/Listing';

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
	if (
		!session ||
		session.role > 1 ||
		(!isSuperAdmin && listing.userId.toString() !== session.user.id)
	) {
		return {
			success: false,
			message: 'You are not authorized. Please sign in again. ',
			invalidInput: [],
			id: '',
		};
	}

	// validate the data
	console.log(Object.fromEntries(formData.entries()));
	// format the data (new image)
	// format the data with old image
	// delete from S3, if needed
	// save data

	// const isValid = isValidObjectId(params.id);
	// if (!isValid) redirect('/');
}
