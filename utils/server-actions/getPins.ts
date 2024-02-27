'use server';

import { Coords } from '@/data/types';
import { generateRandomCoordinates } from '../generateRandomCoordinates';

export default async function getPins(addresses: string[], coords: Coords) {
	try {
		const encodedAddresses = addresses.map((address) =>
			encodeURIComponent(address)
		);
		const requests = encodedAddresses.map(
			(encodedAddress) =>
				`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GOOGLE_MAPS_API_KEY}`
		);

		const responses = await Promise.all(
			requests.map((request) => fetch(request))
		);
		const results = await Promise.all(
			responses.map((response) => response.json())
		);

		const coordinatesList = results.map((data) => {
			if (data.results && data.results.length > 0) {
				const location = data.results[0].geometry.location;
				return { lat: location.lat, lng: location.lng };
			} else {
				return generateRandomCoordinates(coords);
			}
		});

		return coordinatesList;
	} catch (error) {
		console.error('Retrieving pin coordinate failed. ' + error);
	}
}
