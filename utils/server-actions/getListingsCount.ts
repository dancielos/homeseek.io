'use server';

import ListingModel from '@/models/Listing';
import connectDB from '../db';

export default async function getListingsCount(): Promise<number> {
	try {
		await connectDB();

		const listingsCount = await ListingModel.countDocuments({}).exec();
		// console.log({ listingsCount });
		return listingsCount;
	} catch (error) {
		console.error(error);
		return 0;
	}
}
