import toTitleCase from './toTitleCase';

export default function formatAddress(
	street: string,
	city: string,
	province: string,
	postalCode: string
) {
	if (!street && !city && !province && !postalCode) return '';

	const formattedStreet = toTitleCase(street);
	const formattedCity = toTitleCase(city);
	const formattedProvince = toTitleCase(province);
	const capitalizedPostalCode = postalCode.toUpperCase();

	const address = [formattedStreet, formattedCity];

	if (formattedProvince) address.push(formattedProvince);
	if (capitalizedPostalCode) address.push(capitalizedPostalCode);

	return address.join(', ');
}
