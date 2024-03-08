import ListingModel from '@/models/Listing';
import connectDB from '../db';
import formatAddress from '../formatters/formatAddress';
import { PropertyType } from '@/data/types';

type RecentListing = {
	id: string;
	address: string;
	propertyType: PropertyType;
	price: number;
	numBedrooms: number;
	numBathrooms: number;
	date: Date;
};

export default async function getRecentListings(
	limit: number = 10
): Promise<RecentListing[]> {
	try {
		await connectDB();

		const listings = await ListingModel.find().sort({ date: -1 }).limit(limit);
		// console.log(listings);

		// console.log(listings[0].date);

		const formattedDate: RecentListing[] = listings.map((listing) => ({
			id: listing._id.toString(),
			address: formatAddress(
				listing.address.street,
				listing.address.city,
				listing.address.province,
				listing.address.postalCode
			),
			propertyType: listing.propertyType,
			price: listing.price,
			numBedrooms: listing.numBedrooms,
			numBathrooms: listing.numBathrooms,
			date: listing.date,
		}));
		return formattedDate;
	} catch (error) {
		console.error('Something went wrong.');
		return [] as RecentListing[];
	}
}
