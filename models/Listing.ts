import { PROPERTY_TYPE_KEYS } from '@/data/constants';
import { Address, PropertyType } from '@/data/types';
import { Schema, Types, model, models } from 'mongoose';

interface Amenities {
	features: string[];
	nearby: string[];
	other: string[];
}

export interface Listing {
	userId: Types.ObjectId;
	address: Address;
	price: number;
	numBedrooms: number;
	numBathrooms: number;
	isPetFriendly: boolean;
	img: string[];
	propertyType: PropertyType;
	about: string;
	amenities: Amenities;
	utilitiesIncluded: string[];
	date: Date;
}

export interface ListingInput extends Omit<Listing, 'propertyType'> {
	propertyType: PropertyType;
}

const listingSchema = new Schema<Listing>({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	address: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		province: { type: String, required: true },
		postalCode: { type: String, required: true },
	},
	price: { type: Number, required: true },
	numBedrooms: { type: Number, required: true },
	numBathrooms: { type: Number, required: true },
	isPetFriendly: { type: Boolean, required: true },
	img: { type: [String], required: true },
	propertyType: {
		type: String,
		enum: [...PROPERTY_TYPE_KEYS],
		required: true,
	},
	about: { type: String, required: true },
	amenities: {
		features: {
			type: [String],
		},
		nearby: {
			type: [String],
		},
		other: {
			type: [String],
		},
	},
	utilitiesIncluded: {
		type: [String],
	},
	date: {
		type: Schema.Types.Date,
		default: Date.now,
		required: true,
	},
});

const ListingModel = models.listing || model<Listing>('listing', listingSchema);

export default ListingModel;
