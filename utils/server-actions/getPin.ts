'use server';

import { Coords } from '@/data/types';

export default async function getPin(address: string, coords: Coords) {
	try {
		const encodedAddress = encodeURIComponent(address);
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GOOGLE_MAPS_API_KEY}`
		);
		const data = await response.json();
		// console.log(data);

		const location = data.results[0].geometry.location;
		return { lat: location.lat, lng: location.lng };
	} catch (error) {
		console.error('Something went wrong: ' + error + ' using fallback value');
		return coords;
	}
}
