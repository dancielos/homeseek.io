export default function formatAddress(
	street: string,
	city: string,
	province: string,
	postalCode: string
) {
	const capitalizedPostalCode = postalCode.toUpperCase();

	return `${street}, ${city}, ${province}, ${capitalizedPostalCode}`;
}
