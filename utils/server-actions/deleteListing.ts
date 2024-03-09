'use server';

import { FormResponse } from '@/data/types';
import { isValidObjectId } from 'mongoose';
import delay from '../delay';
import { getSession } from './auth';
import ListingModel from '@/models/Listing';
import connectDB from '../db';
import deleteFromS3 from './deleteFromS3';
import { revalidatePath } from 'next/cache';

export default async function deleteListing(
	listingId: string
): Promise<FormResponse> {
	if (!isValidObjectId(listingId)) {
		return {
			success: false,
			message: 'Something went wrong, please try again later.',
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

	try {
		const s3Response = await deleteFromS3(listing.img);
		if (!s3Response) throw Error(`Failed to update images.`);

		await ListingModel.findByIdAndDelete(listingId);

		revalidatePath('/(admin)/properties', 'page');

		return {
			success: true,
			message: '',
			invalidInput: [],
			id: '',
			// id: 'newListing._id.toString()',
		};
	} catch (error) {
		console.error('ERROR: ', error);
		return {
			success: false,
			message: 'Something went wrong, please try again later.',
			invalidInput: [],
			id: '',
		};
	}
}
