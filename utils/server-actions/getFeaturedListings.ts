'use server';

import ListingModel from '@/models/Listing';
import connectDB from '../db';
import { PropertyListing, PropertyType } from '@/data/types';
import formatAddress from '../formatAddress';

export default async function getFeaturedListings(): Promise<
	PropertyListing[]
> {
	try {
		await connectDB();

		const featuredListings = await ListingModel.find({ featured: true }).exec();
		return featuredListings.map((l) => {
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
		console.error('Error fetching featured listings', error);
		throw error;
	}
}
