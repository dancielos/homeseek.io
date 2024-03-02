'use server';

import ListingModel from '@/models/Listing';
import connectDB from '../db';
import { PropertyListing, PropertyType } from '@/data/types';
import formatAddress from '../formatAddress';

export type FeaturedListing = {
	id: string;
	address: string;
	propertyType: PropertyType;
	bedrooms: number;
	bathrooms: number;
	img: string[];
	price: number;
	lat: number;
	lng: number;
};

export default async function getFeaturedListings(): Promise<
	FeaturedListing[]
> {
	try {
		await connectDB();

		const featuredListings = await ListingModel.find({ featured: true }).exec();
		const formattedListings: FeaturedListing[] = featuredListings.map((l) => {
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
