'use server';

import ListingModel, { Listing } from '@/models/Listing';
import connectDB from '../db';
import { Coords, PropertyListing, PropertyType } from '@/data/types';
import formatAddress from '../formatAddress';
import getPin from './getPin';
import getCoordsFromCity from './getCoordsFromCity';
import { generateRandomCoordinates } from '../generateRandomCoordinates';

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
	const { lat, lng } = await getCoordsFromCity(city);
	const coords = { lat, lng };
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
		'address.city': { $regex: new RegExp(city, 'i') },
		price: { $gte: minPrice, $lte: maxPrice },
		numBedrooms: { $gte: minBed, $lte: maxBed },
		numBathrooms: { $gte: minBath, $lte: maxBath },
		propertyType: { $in: propertyType },
	};
	if (isPetFriendly === true) query.isPetFriendly = isPetFriendly;
	try {
		await connectDB();
		// Retrieve listings that match the given city
		const pins: Coords[] = [];
		const listings = await ListingModel.find(query).exec();

		const formattedListings: PropertyListing[] = await Promise.all(
			listings.map(async (l) => {
				const address = formatAddress(
					l.address.street,
					l.address.city,
					l.address.province,
					l.address.postalCode
				);

				let pinLng, pinLat;

				const pin = await getPin(address, coords);
				let duplicate = false;
				for (let i = 0; i < pins.length; i++) {
					if (pin.lat === pins[i].lat && pin.lng === pins[i].lng) {
						// console.log('DUPLICATE');
						duplicate = true;
						break;
					}
				}
				if (!duplicate) {
					pins.push({ lat: pin.lat, lng: pin.lng });
					pinLng = pin.lng;
					pinLat = pin.lat;
				} else {
					pinLng = generateRandomCoordinates(coords).lng;
					pinLat = generateRandomCoordinates(coords).lat;
				}

				// console.log(pinLng, pinLat);

				return {
					id: l._id.toString(),
					address,
					propertyType: l.propertyType as PropertyType,
					bedrooms: l.numBedrooms,
					bathrooms: l.numBathrooms,
					img: l.img,
					price: l.price,
					lat: pinLat,
					lng: pinLng,
				};
			})
		);
		// console.log(formattedListings);
		return formattedListings;
	} catch (error) {
		console.error('Error fetching listings:', error);
		throw error;
	}
}
