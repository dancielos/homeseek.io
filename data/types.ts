import { TypographyProps } from '@mui/material';

export const PROPERTY_TYPE = {
	HOUSE: 'House',
	CONDO_APARTMENT: 'Condo/Apartment',
	ROW_TOWNHOUSE: 'Row/Townhouse',
	DUPLEX_TRIPLEX: 'Duplex/Triplex',
	MOBILE: 'Mobile',
	MULTIFAMILY: 'Multi-family',
} as const;

export type PropertyType = keyof typeof PROPERTY_TYPE;

export type PropertyListing = {
	id: string;
	propertyType: PropertyType;
	bedrooms: number;
	bathrooms: number;
	address: string;
	img: string[];
	price: number;
	lat: number;
	lng: number;
	userId: string;
};

export type City = {
	img: string;
	title: string;
};

export interface HProps extends TypographyProps {
	children: React.ReactNode;
	smaller?: boolean;
}

export type Address = {
	street: string;
	city: string;
	province: string;
	postalCode: string;
};

export type Coords = {
	lat: number;
	lng: number;
};

export type Bounds = {
	northeast: {
		lat: number;
		lng: number;
	};
	southwest: {
		lat: number;
		lng: number;
	};
};

export type CoordsWithBounds = {
	bounds: Bounds;
} & Coords;

export type MessagesRow = {
	id: string;
	name: string;
	message: string;
	// actions: string;
	listingId: string;
	date: string;
	listing: string;
	phoneNumber: string;
	emailAddress: string;
};

export type ListingSelectOptions = {
	value:
		| string
		| {
				[key: string]: string;
		  };
	label: string;
};

//======== for SERVER ACTIONS ========//

export type InputTypes = {
	[key: string]: FormDataEntryValue | string[];
	img: string[];
};

export type ValidResponse = {
	success: boolean;
	invalidInputs: string[];
};

export type FormResponse =
	| {
			success: boolean;
			message: string;
			invalidInput: string[];
			id: string;
	  }
	| null
	| undefined;
