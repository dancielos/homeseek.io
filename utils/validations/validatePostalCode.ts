export default function validatePostalCode(postalCode: string) {
	const canadianPostalCodeRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;

	return canadianPostalCodeRegex.test(postalCode);
}
