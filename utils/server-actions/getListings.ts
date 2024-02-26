'use server';

import ListingModel from '@/models/Listing';
import connectDB from '../db';
import { PropertyListing, PropertyType } from '@/data/types';
import formatAddress from '../formatAddress';

export default async function getListings(
	city: string
): Promise<PropertyListing[]> {
	try {
		await connectDB();
		// Retrieve listings that match the given city
		const listings = await ListingModel.find({ 'address.city': city }).exec();
		return listings.map((l) => {
			const address = formatAddress(
				l.address.street,
				l.address.city,
				l.address.province,
				l.address.postalCode
			);
			return {
				address,
				propertyType: l.propertyType as PropertyType,
				bedrooms: l.numBedrooms,
				bathrooms: l.numBathrooms,
				img: l.img,
				price: l.price,
			};
		});
	} catch (error) {
		console.error('Error fetching listings:', error);
		throw error;
	}
}
