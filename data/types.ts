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
	propertyType: PropertyType;
	bedrooms: number;
	bathrooms: number;
	address: string;
	img: string;
	price: number;
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
