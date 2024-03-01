type DateStyle = 'full' | 'long' | 'medium' | 'short';

export default function formatDate(
	date: Date | number,
	dateStyle: DateStyle = 'short'
) {
	return new Intl.DateTimeFormat('en-CA', {
		dateStyle,
	}).format(date);
}
