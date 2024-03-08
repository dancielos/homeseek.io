'use server';

import { PROPERTY_TYPE, PropertyType } from '@/data/types';
import ListingModel from '@/models/Listing';
import formatPrice from '../formatPrice';
import formatDate from '../formatDate';

export type AdminListing = {
	id: string;
	userId: string;
	userName: string;
	street: string;
	cityProvince: string;
	propertyType: (typeof PROPERTY_TYPE)[PropertyType];
	price: number;
	numBedrooms: number;
	numBathrooms: number;
	date: string;
};

export default async function getListingsForAdmin(): Promise<AdminListing[]> {
	try {
		const listings = await ListingModel.find()
			.populate('userId')
			.sort({ date: -1 })
			.exec();

		const formattedListing: AdminListing[] = listings.map((listing) => ({
			id: listing._id.toString(),
			userId: listing.userId._id.toString(),
			userName: listing.userId.name,
			street: listing.address.street,
			cityProvince: `${listing.address.city}, ${listing.address.province}`,
			propertyType: PROPERTY_TYPE[listing.propertyType as PropertyType],
			price: listing.price,
			numBedrooms: listing.numBedrooms,
			numBathrooms: listing.numBathrooms,
			date: formatDate(listing.date, 'long'),
		}));
		return formattedListing;
	} catch (error) {
		console.error('Something went wrong: ', error);
		return [] as AdminListing[];
	}
}
