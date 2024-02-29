export default function validateEmail(email: string): boolean {
	if (email === '') return false;
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	let isValid = Boolean(email.match(emailRegex));

	return isValid;
}
