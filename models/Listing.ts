import { PROPERTY_TYPE, PropertyType } from '@/data/types';
import { Schema, Types, model, models } from 'mongoose';

interface Amenities {
	features: string[];
	nearby: string[];
	other?: string[];
}

interface Listing {
	id: number;
	userId: Types.ObjectId;
	street: string;
	city: string;
	province: string;
	postalCode: string;
	price: number;
	numBedrooms: number;
	numBathrooms: number;
	isPetFriendly: boolean;
	img: string[];
	featured?: boolean;
	propertyType: PropertyType;
	about: string;
	amenities: Amenities;
	utilitiesIncluded: string[];
}

const listingSchema = new Schema<Listing>({
	id: { type: Number, required: true },
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	street: { type: String, required: true },
	city: { type: String, required: true },
	province: { type: String, required: true },
	postalCode: { type: String, required: true },
	price: { type: Number, required: true },
	numBedrooms: { type: Number, required: true },
	numBathrooms: { type: Number, required: true },
	isPetFriendly: { type: Boolean, required: true },
	img: { type: [String], required: true },
	featured: { type: Boolean, required: false },
	propertyType: {
		type: String,
		enum: PROPERTY_TYPE,
		required: true,
	},
	about: { type: String, required: true },
	amenities: {
		features: {
			type: [String],
			required: true,
		},
		nearby: {
			type: [String],
			required: true,
		},
		other: {
			type: [String],
			required: false,
		},
	},
	utilitiesIncluded: {
		type: [String],
		required: true,
	},
});

const ListingModel = models.listing || model<Listing>('listing', listingSchema);

export default ListingModel;
