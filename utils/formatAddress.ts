export default function formatAddress(
	street: string,
	city: string,
	province: string,
	postalCode: string
) {
	return `${street}, ${city}, ${province}, ${postalCode}`;
}
