export default function formatPrice(price: number) {
	return new Intl.NumberFormat('en-CA', {
		style: 'currency',
		currency: 'CAD',
	});
}
