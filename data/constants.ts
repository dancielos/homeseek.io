import { PropertyListing } from './types';

// STYLES
export const BOX_SHADOW = 'rgba(0, 0, 0, 0.1) 0px 4px 12px';
export const BORDER_RADIUS = 1;

// DUMMY DATA
// TODO: to be deleted

export const DUMMY_LISTING: PropertyListing[] = [
	{
		propertyType: 'HOUSE',
		bedrooms: 3,
		bathrooms: 2,
		address: '123 Calgary St SW, Calgary, AB',
		img: 'house1.jpg',
		price: 2000,
	},
	{
		propertyType: 'CONDO_APARTMENT',
		bedrooms: 2,
		bathrooms: 1,
		address: '456 Downtown Ave NE, Calgary, AB',
		img: 'apartment1.jpg',
		price: 1500,
	},
	{
		propertyType: 'ROW_TOWNHOUSE',
		bedrooms: 4,
		bathrooms: 3,
		address: '789 Oakridge Dr SW, Calgary, AB',
		img: 'townhouse1.jpg',
		price: 2500,
	},
	{
		propertyType: 'DUPLEX_TRIPLEX',
		bedrooms: 2,
		bathrooms: 1.5,
		address: '101 Bow River Rd SE, Calgary, AB',
		img: 'duplex1.jpg',
		price: 1800,
	},
];

export const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
		author: '@bkristastucchio',
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
		author: '@rollelflex_graphy726',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
		author: '@helloimnik',
	},
	{
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
		author: '@nolanissac',
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
		author: '@hjrc33',
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
		author: '@arwinneil',
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
		author: '@tjdragotta',
	},
	{
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
		author: '@katie_wasserman',
	},
	{
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
		author: '@silverdalex',
		rows: 2,
		cols: 2,
	},
	{
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
		author: '@shelleypauls',
	},
	{
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
		author: '@peterlaster',
	},
	{
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
		author: '@southside_customs',
		cols: 2,
	},
];
