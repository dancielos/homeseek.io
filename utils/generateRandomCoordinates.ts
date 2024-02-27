import { Coords } from '@/data/types';

export function generateRandomCoordinates(baseCoords: Coords): Coords {
	function getRandomInRange(min: number, max: number): number {
		return Math.random() * (max - min) + min;
	}

	// Generate random latitude and longitude within a small vicinity of the city
	const lat = getRandomInRange(baseCoords.lat - 0.01, baseCoords.lat + 0.01);
	const lng = getRandomInRange(baseCoords.lng - 0.01, baseCoords.lng + 0.01);
	return { lat, lng };
}
