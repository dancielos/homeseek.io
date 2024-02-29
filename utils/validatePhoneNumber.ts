export default function validatePhoneNumber(phone: string): boolean {
	if (!phone) return false;

	const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

	const phoneString = '' + phone;
	return Boolean(phoneString.match(phoneRegex));
}
