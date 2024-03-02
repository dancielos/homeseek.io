export default function formatNumber(n: number) {
	return new Intl.NumberFormat('en-CA').format(n);
}
