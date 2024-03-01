export default function formatDate(date: Date | number) {
	return new Intl.DateTimeFormat('en-CA', {
		dateStyle: 'full',
	}).format(date);
}
