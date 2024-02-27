'use server';

import { Bounds, Coords, CoordsWithBounds } from '@/data/types';

export default async function getCoordsFromCity(
	city: string
): Promise<CoordsWithBounds> {
	const coords = {
		lat: 43.65107,
		lng: -79.347015,
		bounds: {
			northeast: { lat: 51.2124247, lng: -113.8598962 },
			southwest: { lat: 50.8428219, lng: -114.3157738 },
		},
	};

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
				console.log(data.results[0]);
				const { lng, lat } = data.results[0].geometry.location;
				const { bounds }: { bounds: Bounds } = data.results[0].geometry;
				return { lng, lat, bounds };
			} else {
				throw Error('No city found');
			}
		} catch (error) {
			console.error(
				'Error fetching coords: ' + error + ' using the fallback coordinates'
			);
		}
	}
	return coords;
}
