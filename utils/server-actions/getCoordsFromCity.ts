'use server';

import { Coords } from '@/data/types';

export default async function getCoordsFromCity(city: string) {
	const coords: Coords = { lat: 43.65107, lng: -79.347015 };

	if (city) {
		try {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
					city
				)}&key=${process.env.GOOGLE_MAPS_API_KEY}`
			);
			const data = await response.json();

			// console.log(city, data.results[0].geometry);
			if (data.results && data.results.length > 0) {
				const { lng, lat } = data.results[0].geometry.location;
				return { lng, lat };
			} else {
				throw Error('No city found');
			}
		} catch (error) {
			console.error(
				'Error fetching coords: ' + error + ' using the fallback coordinates'
			);
			return coords;
		}
	}
}
