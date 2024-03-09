import { AVAILABLE_CITIES } from '@/data/constants';
import { InputTypes, PropertyType } from '@/data/types';
import { ListingInput } from '@/models/Listing';
import { Types } from 'mongoose';

type FormatInputData = InputTypes & {
	uploadedImages?: string[];
};

export default function formatListingInputData({
	userId,
	street,
	cityProvince,
	postalCode,
	propertyType,
	price,
	numBedrooms,
	numBathrooms,
	isPetFriendly,
	about,
	utilities,
	img,
	amenitiesFeatures,
	amenitiesNearby,
	amenitiesOthers,
	uploadedImages,
}: FormatInputData): ListingInput {
	const { city, province } = AVAILABLE_CITIES.find(
		(ac) => ac.label === cityProvince.toString()
	)?.value as { city: string; province: string };

	return {
		userId: new Types.ObjectId(userId.toString()),
		date: new Date(Date.now()),
		address: {
			street: '' + street,
			city,
			province,
			postalCode: '' + postalCode,
		},
		price: +price,
		numBathrooms: +numBathrooms,
		numBedrooms: +numBedrooms,
		isPetFriendly: isPetFriendly.toString().toLowerCase() === 'yes',
		img: [...(uploadedImages as string[]), ...img],
		propertyType: ('' + propertyType) as PropertyType,
		about: '' + about,
		amenities: {
			features: JSON.parse(amenitiesFeatures.toString()),
			nearby: JSON.parse(amenitiesNearby.toString()),
			other: amenitiesOthers.toString().split(','),
		},
		utilitiesIncluded: utilities.toString().split(','),
	};
}
