'use server';

import ListingModel from '@/models/Listing';
import connectDB from '../db';
import { PropertyListing, PropertyType } from '@/data/types';
import formatAddress from '../formatAddress';

type ListingsProps = {
	city: string;
	price: number[];
	beds: number[];
	baths: number[];
	propertyType: PropertyType[];
	isPetFriendly?: boolean;
};

export default async function getListings({
	city,
	price,
	beds,
	baths,
	propertyType,
	isPetFriendly,
}: ListingsProps): Promise<PropertyListing[]> {
	// this is necessary as it may not be always
	// 0 as min
	// and 1 as max
	const minPrice = Math.min(price[0], price[1]);
	const maxPrice = Math.max(price[0], price[1]);

	const minBed = Math.min(beds[0], beds[1]);
	const maxBed = Math.max(beds[0], beds[1]);

	const minBath = Math.min(baths[0], baths[1]);
	const maxBath = Math.max(baths[0], baths[1]);

	// console.log(propertyType);

	const query: { [key: string]: any } = {
		'address.city': city,
		price: { $gte: minPrice, $lte: maxPrice },
		numBedrooms: { $gte: minBed, $lte: maxBed },
		numBathrooms: { $gte: minBath, $lte: maxBath },
		propertyType: { $in: propertyType },
	};
	if (isPetFriendly === true) query.isPetFriendly = isPetFriendly;
	try {
		await connectDB();
		// Retrieve listings that match the given city
		const listings = await ListingModel.find(query).exec();
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
