'use server';

import ListingModel, { Listing } from '@/models/Listing';
import connectDB from '../db';

export default async function getListings(city: string): Promise<Listing[]> {
	try {
		await connectDB();
		// Retrieve listings that match the given city
		const listings = await ListingModel.find({ 'address.city': city }).exec();
		return listings;
	} catch (error) {
		console.error('Error fetching listings:', error);
		throw error;
	}
}
