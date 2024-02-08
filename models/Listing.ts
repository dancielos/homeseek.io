import { Schema, model, models } from 'mongoose';

interface Amenities {
	features: (
		| 'elevator'
		| 'lockers'
		| 'fridge'
		| 'dryer'
		| 'laundry'
		| 'dishwasher'
		| 'microwave'
		| 'parking'
		| 'stove'
		| 'garage'
		| 'pool'
		| 'gym'
	)[];
	nearby: (
		| 'publicTransit'
		| 'convenienceStore'
		| 'shopping'
		| 'school'
		| 'parks'
	)[];
	other: ('onSiteMaintenance' | 'noSmoking')[];
}

interface Listing {
	id: number;
	street: string;
	city: string;
	province: string;
	postalCode: string;
	price: number;
	numBedrooms: number;
	numBathrooms: number;
	isPetFriendly: boolean;
	img: string[];
	propertyType:
		| 'House'
		| 'Condo/Apartment'
		| 'Row/Townhouse'
		| 'Duplex/Triplex'
		| 'Mobile'
		| 'Multi-family';
	about: string;
	amenities: Amenities;
	utilitiesIncluded: (
		| 'heating'
		| 'water'
		| 'electricity'
		| 'internet'
		| 'cable'
	)[];
}

const listingSchema = new Schema<Listing>({
	id: { type: Number, required: true },
	street: { type: String, required: true },
	city: { type: String, required: true },
	province: { type: String, required: true },
	postalCode: { type: String, required: true },
	price: { type: Number, required: true },
	numBedrooms: { type: Number, required: true },
	numBathrooms: { type: Number, required: true },
	isPetFriendly: { type: Boolean, required: true },
	img: { type: [String], required: true },
	propertyType: {
		type: String,
		enum: [
			'House',
			'Condo/Apartment',
			'Row/Townhouse',
			'Duplex/Triplex',
			'Mobile',
			'Multi-family',
		],
		required: true,
	},
	about: { type: String, required: true },
	amenities: {
		features: {
			type: [
				{
					type: String,
					enum: [
						'elevator',
						'lockers',
						'fridge',
						'dryer',
						'laundry',
						'dishwasher',
						'microwave',
						'parking',
						'stove',
						'garage',
						'pool',
						'gym',
					],
				},
			],
			required: true,
		},
		nearby: {
			type: [
				{
					type: String,
					enum: [
						'publicTransit',
						'convenienceStore',
						'shopping',
						'school',
						'parks',
					],
				},
			],
			required: true,
		},
		other: {
			type: [{ type: String, enum: ['onSiteMaintenance', 'noSmoking'] }],
			required: true,
		},
	},
	utilitiesIncluded: {
		type: [
			{
				type: String,
				enum: ['heating', 'water', 'electricity', 'internet', 'cable'],
			},
		],
		required: true,
	},
});

const ListingModel = models.listing || model<Listing>('listing', listingSchema);

export default ListingModel;