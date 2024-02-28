import { City, PROPERTY_TYPE, PropertyListing } from './types';

// STYLES
export const BOX_SHADOW = 'rgba(0, 0, 0, 0.1) 0px 4px 12px';
// export const BORDER_RADIUS = 1;

export const itemData: Array<City> = [
	{
		img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/toronto-city-1280px.jpg',
		title: 'Toronto',
	},
	// {
	// 	img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/edmonton-city-1280px.jpg',
	// 	title: 'Edmonton',
	// 	author: '@rollelflex_graphy726',
	// },
	{
		img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/montreal-city-1280px.jpg',
		title: 'Montreal',
	},
	{
		img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/ottawa-city-1280px.jpg',
		title: 'Ottawa',
	},
	{
		img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/vancouver-city-1280px.jpg',
		title: 'Vancouver',
	},
	{
		img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/quebec-city-1280px.jpg',
		title: 'Quebec',
	},
	{
		img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/calgary-city-1280px.jpg',
		title: 'Calgary',
	},

	// {
	// 	img: 'https://homeseek-bucket.s3.ca-central-1.amazonaws.com/cities/winnipeg-city-1280px.jpg',
	// 	title: 'Winnipeg',
	// 	author: '@katie_wasserman',
	// },
];

export const MIN_PRICE = 1000;
export const MAX_PRICE = 10000;
export const PRICE_STEP = 1000;
export const PRICE_MARKS = [
	{ value: 1000 },
	{ value: 2000 },
	{ value: 3000 },
	{ value: 4000 },
	{ value: 5000 },
	{ value: 6000 },
	{ value: 7000 },
	{ value: 8000 },
	{ value: 9000 },
	{ value: 10000 },
];

export const CITIES = [
	'Toronto',
	'Vancouver',
	'Calgary',
	'Montreal',
	'Ottawa',
	'Edmonton',
	'Quebec City',
	'Lethbridge',
];

export const PRICE_DISTANCE = 1000;

export const propertyTypesArray = Object.entries(PROPERTY_TYPE).map(
	([name, value]) => ({
		name,
		value,
	})
);
