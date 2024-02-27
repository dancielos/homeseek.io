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
		const formattedListings: PropertyListing[] = featuredListings.map((l) => {
			const address = formatAddress(
				l.address.street,
				l.address.city,
				l.address.province,
				l.address.postalCode
			);

			// console.log(pinLng, pinLat);

			return {
				id: l._id.toString(),
				address,
				propertyType: l.propertyType as PropertyType,
				bedrooms: l.numBedrooms,
				bathrooms: l.numBathrooms,
				img: l.img,
				price: l.price,
				lat: 0,
				lng: 0,
			};
		});
		return formattedListings;
	} catch (error) {
		console.error('Error fetching featured listings', error);
		throw error;
	}
}
