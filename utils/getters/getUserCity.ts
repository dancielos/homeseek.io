export function getUserCity() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				const { latitude, longitude } = position.coords;
				const response = await fetch(
					`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`
				);
				const data = await response.json();

				// console.log(`getUserCity(): ${data}`);
			},
			(error) => {
				console.error('Error getting user location:', error);
			}
		);
	} else {
		console.error('Geolocation is not supported by this browser.');
	}
}
